#!/usr/bin/env python3
"""
Mechanical gate for a dispatch. Catches the things a human reviewer misses
because they already know what the post is trying to say.

    python3 scripts/check-post.py src/content/posts/<file>.md

Exit 1 on any FAIL. Every threshold here came from comparing a post that
worked against one a real reader said she could not follow.
"""
import re, sys, pathlib

FORBIDDEN = ["quarterback", "completion", "reception", "touchdown", "field goal",
             "interception", "punt", "third down", "fourth down", "first down",
             "yardage", "sack", "end zone", "line of scrimmage", "red zone",
             "snap count", "play-action", "coverage"]

# Words that start a sentence and get caught by the name regex.
STOP = {"And", "But", "In", "On", "At", "By", "For", "The", "Then", "When",
        "Before", "After", "House", "Super", "Late", "Out", "So", "Old", "That"}

PLACES = {"Los Angeles", "San Francisco", "New England", "Kansas City", "New York",
          "Green Bay", "Las Vegas", "Tampa Bay", "New Orleans", "Melbourne Cricket",
          "Lumen Field", "Gillette Stadium", "Levi's Stadium", "Super Bowl"}


def core(text: str) -> str:
    """The story body: after the epigraph, before the sign-off trio."""
    if "— the words of House" in text:
        c = text.split("— the words of House", 1)[1]
        c = c.split("\n", 1)[1]
    else:
        c = text.split("---", 2)[2]
    return c.split("*Ships of the week")[0]


def people(c: str):
    found = set()
    for m in re.finditer(r"\b([A-Z][a-z]+(?:\.[A-Z]\.)?(?: [A-Z][a-z'\.]+)+)\b", c):
        n = m.group(1)
        if n.split()[0] in STOP or n in PLACES:
            continue
        if any(n.startswith(p) for p in PLACES):
            continue
        found.add(n)
    return found


def main(path):
    text = pathlib.Path(path).read_text()
    c = core(text)
    low = c.lower()
    fails, warns = [], []

    words = len(c.split())
    if words > 550:
        fails.append(f"length {words} words — hard ceiling is 550")
    elif words > 500:
        warns.append(f"length {words} words — target is 350–500")
    elif words < 300:
        warns.append(f"length {words} words — thin, target is 350–500")

    hits = [w for w in FORBIDDEN if w in low]
    if hits:
        fails.append(f"football vocabulary in the prose: {hits}")

    digits = re.findall(r"\d", c)
    if digits:
        fails.append(f"digits in the prose ({''.join(digits)}) — numbers belong in `record`")

    names = people(c)
    if len(names) > 8:
        fails.append(f"{len(names)} named people — cap is 8. She cannot track more.\n"
                     f"        {sorted(names)}")
    elif len(names) > 6:
        warns.append(f"{len(names)} named people — 6 or fewer reads easiest")

    # Did anyone actually win? The no-numbers rule makes it easy to omit.
    won = any(w in low for w in ["won", "beat", "beaten", "lost", "defeat",
                                 "took it", "ended it", "winner"])
    if not won:
        fails.append("no plain statement of who won — the result must be unmissable")

    # --- self-containment ---------------------------------------------
    # A name in the sign-off trio that never appears in the story is a
    # stranger introduced at the door. Either work them into the post or
    # explain them inline where they're named.
    if "*Ships of the week" in c or "*Ships of the week" in text:
        story = c.split("*Ships of the week")[0]
        signoff = text.split("*Ships of the week", 1)[1] if "*Ships of the week" in text else ""
        for n in people(signoff):
            if n in story:
                continue
            # An appositive right after the name counts as introducing them.
            if re.search(re.escape(n) + r"\s*,\s*(who|the|a|an)\b", signoff):
                continue
            fails.append(f"`{n}` is named in the sign-off but never appears in the "
                         f"story and isn't explained there — a stranger at the door")

    # Elliptical closers: a line that withholds the point it claims to make.
    for phrase in ["the only true thing", "said it best", "said what needed",
                   "you know the rest", "enough said", "says it all"]:
        if phrase in low:
            warns.append(f'"{phrase}" — this construction promises a point and then '
                         f'withholds it. State the point plainly.')

    # A quotation with nobody attached to it.
    for para in c.split("\n\n"):
        flat = " ".join(para.split())
        if flat.startswith(("\u201c", '"')) and not re.search(r"\b(said|told|asked|answered)\b", flat):
            warns.append("a quotation with no attribution — say who is speaking")
            break

    fm = text.split("---")[1]
    for field in ["record:", "line:", "excerpt:", "frame:", "trope:"]:
        if field not in fm:
            fails.append(f"frontmatter missing `{field}`")

    print(f"\n{path}")
    print(f"  words {words} · named people {len(names)} · "
          f"paragraphs {len([p for p in c.split(chr(10)*2) if p.strip()])}")
    for w in warns:
        print(f"  WARN  {w}")
    for f in fails:
        print(f"  FAIL  {f}")
    if not fails and not warns:
        print("  OK    all mechanical checks pass")
    print()
    return 1 if fails else 0


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(2)
    sys.exit(max(main(p) for p in sys.argv[1:]))
