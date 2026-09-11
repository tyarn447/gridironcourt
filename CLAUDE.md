# The Gridiron Court

A chronicle of the NFL season written as high-fantasy romantasy, for people who
love someone who watches football. Astro static site, deployed to GitHub Pages
at <https://gridironcourt.com>.

**`VOICE.md` is the product.** Read it before writing a word of content.

## The reader

One person. She is on her phone, between other things. She does not follow
football and will not look anything up. **She will not reread a sentence** — if
a line does not land the first time, it does not land.

She is not the one who finds the site. A fan forwards it to her. So the post
must be accurate enough that he keeps forwarding it, and clear enough that she
keeps opening it. Both, in 450 words.

---

# The understandability review — required before any dispatch is published

Real feedback, 11 Sept 2026: a reader who is exactly the target audience said
Chapter Two "was not really understandable." She was right. Diagnosing that post
against Chapter One, which worked, produced the gates below.

Run this on **every** dispatch. Mechanical checks first, then read it as her.

## 1. Mechanical gate

```bash
python3 scripts/check-post.py src/content/posts/<file>.md
```

Must exit 0. It enforces, with reasons:

| Check | Limit | Why |
|---|---|---|
| Story length | 350–500 words, hard 550 | phone, between other things |
| Named people | **8 maximum**, 6 is better | Chapter Two had 9 and lost her; Chapter One had 4 |
| Football vocabulary | zero | listed in the script; "end zone" slipped into Chapter Two three times |
| Digits in prose | zero | numbers live in `record` |
| A plain statement of who won | required | the no-numbers rule makes it very easy to write a whole dispatch that never says who won |

## 2. The read-aloud gate

Read the post start to finish, out loud, as someone who has never watched a
game. Stop at the first place you hesitate. That is where she stops too.

Then answer these. **Any "no" blocks publication.**

1. **Who won, and was it close?** Findable in one pass, without the Record.
2. **Can she follow the Turn without knowing football?** This is where Chapter
   Two failed hardest. It ran: *"A stride short, one try left. McVay could send
   a knight. He sent the lord."* She does not know what "one try left" means,
   why sending the lord rather than a knight is remarkable, or what was being
   attempted. **A Turn must carry its own stakes in plain language** — what he
   was trying to do, why it was hard, what it cost to fail.
3. **Is every person introduced with a reason to care?** A name with no stake
   attached is a name she drops. If someone appears once and does nothing to
   anybody, cut them — that is usually how a post gets from 9 names to 6.
4. **Does each paragraph follow from the one before?** Chapter Two jumps: a
   lord, then a defender, then travel logistics, then a roster's age, then a
   goal line. Five subjects, little connective tissue. This is the single
   biggest clarity win available in this voice.
5. **Is the most understandable hook in the first two paragraphs?** Chapter
   Two's best and most human hook — *they flew in the day before and lost to a
   team that had been there a week* — was buried in section three. It was good
   enough to be the `line`. It should have opened the post.
6. **Does any image need two ideas held at once?** Replace it with one clean
   image.
7. **Any pronoun without an obvious antecedent?** She will not work it out.

## 3. What clarity does *not* mean

It never licenses flattening the voice. The register stays sincere, high
fantasy, played straight. Never explain a football term — use it with
confidence or write around it. Never condescend; she is not stupid, she is
uninformed about one specific topic and reading on a phone.

Clarity beats cleverness. If an elegant line is ambiguous, cut it for a plain
one.

---

## Workflow

- Branch, PR, merge. Never commit to `main`.
- `npm run build` must pass before a PR.
- Auto-merge is fine; Taylor reviews on the live site.
- Deploy is automatic on merge to `main` (~40s) and the site is
  <https://gridironcourt.com>.

## Where things live

| Path | What |
|---|---|
| `VOICE.md` | the voice bible — rules, ranks, altitude, retired tics |
| `reference/REALM-2026.md` | standings, playoff bracket, power tiers, upset table |
| `src/content/posts/` | dispatches; `week-01-seahawks-patriots.md` is the model |
| `src/content/houses/` | 32 house chronicles |
| `scripts/check-post.py` | the mechanical gate |
| `.claude/skills/story-review/` | the full review skill |
| `.claude/agents/story-reviewer.md` | editor subagent with edit authority |

## Facts are load-bearing

Never write a dispatch from memory. Research the box score and at least two
recaps. An invented detail is the one thing that ends this blog — a fan who
spots a wrong score stops forwarding, and he was the entire distribution
channel. If a detail cannot be confirmed, write around it.
