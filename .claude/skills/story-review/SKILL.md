---
name: story-review
description: Review a Gridiron Court dispatch for understandability, voice and factual discipline before publishing. Use after drafting any post in src/content/posts/ and before opening a PR. Runs the mechanical gate, then reads the post as the target reader — someone who does not follow football, on a phone, who will not reread a sentence.
---

# Story review

Two passes. The mechanical one is cheap and catches what you cannot see once
you know what the post is trying to say. The human one is the real review.

## Before you start

Read, in this order:

1. `CLAUDE.md` — the understandability gates and why each exists
2. `VOICE.md` — the voice bible
3. `src/content/posts/week-01-seahawks-patriots.md` — **the model.** When
   `VOICE.md` and this file disagree, the file wins.
4. The other recent posts, so you don't approve two that open the same way
5. The draft

You also need the **verified fact sheet** for this game — the box score and
what actually happened, from sources someone read. If the caller hasn't given
you one, ask before editing. Never fill a gap from memory; write around it or
flag it.

## Pass 1 — mechanical

```bash
python3 scripts/check-post.py src/content/posts/<file>.md
npm run build
```

Both must pass. The checker enforces length, the 8-name cap, zero football
vocabulary, no digits in prose, a plain statement of who won, and required
frontmatter. Fix every FAIL. Treat WARN as a strong default.

## Pass 2 — read it as her

Read the whole post aloud as someone who has never watched a game. **Stop at
the first hesitation.** That is where she stops.

Work the seven questions in `CLAUDE.md` § "The read-aloud gate" in order. Any
"no" blocks publication. The two that catch the most:

- **The Turn must carry its own stakes in plain language.** What was he trying
  to do, why was it hard, what did failing cost? A Turn that assumes the reader
  knows the rules is the most common way one of these posts fails.
- **Every name needs a stake.** Someone who appears once and does nothing to
  anybody is the fastest cut available, and name count is the strongest single
  predictor of whether she finishes.

## Pass 2b — self-containment

Assume the reader has **zero context of any kind** — no football, no previous
dispatch, no news. Work `CLAUDE.md` § "The self-containment gate".

The highest-yield checks, in order:

- **Is every person introduced where they first appear?** Name, what they are,
  why she cares — same breath.
- **Does the sign-off trio name anyone the story didn't?** The checker fails
  this. It happens most often right after you cut names from the body.
- **Does every quote say who is speaking and what they were asked?**
- **Any withholding construction** — "the only true thing about it", "said it
  best"? State the point instead.
- **Every "it" / "that" / "this"** — is the antecedent actually on the page?

## Pass 3 — the voice

Check against `VOICE.md`:

- Opens on a **person**, not weather, equipment, a venue or a matchup
- Three to five beats, each a person's fate — never a scheme or a drive chart
- Frame declared (`war` or `intrigue`) and honoured in the vocabulary
- The court title map is right: QB = Lord · backup = Understudy · WR/RB/TE =
  Knights · O-line = Shieldwall · defense = the Watch · coach = Steward ·
  kicker = the Reckoner. A defender among the knights is a real error.
- Real team names, singular verbs, **city** for possessives ("Los Angeles
  bought him", never "Rams's")
- No retired tics — the negation pair, "Reader,", "something [adverb]
  [adjective] about", three-word fragments more than twice
- A different opening move from the previous post
- Sentence length varies across the whole post, not just at the Turn
- Played straight — never a joke *about* romantasy

## What to report

- The word count, name count, and the checker's output
- Every change you made, grouped: **clarity / structure / voice / cuts**
- The specific line you expect her to stumble on if any survives, and why you
  left it
- Anything in the draft not on the fact sheet
- Whether the build passed

Do not commit or push. The caller handles git.
