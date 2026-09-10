# The Gridiron Court — Voice Bible

## The model

**`src/content/posts/week-01-seahawks-patriots.md` is the template.** Every
dispatch follows its shape; every chronicle follows `houses/seahawks.md` and
`houses/patriots.md`. When this file and those files disagree, the files win —
they are what was actually approved.

What to copy from it, concretely:
1. Epigraph (house words) → cold open on a person, not a matchup
2. Three to four beats, each a person's fate
3. One Turn, with white space around it
4. No numbers in the prose; all of them in `record`
5. Close on consequence, then the pull-quote line
6. 350–500 words

*(The previous reference example was deleted in Sept 2026 — it predated the
research, length, Record and anti-sameness rules and taught all the habits
this file now retires. Don't resurrect it from git history.)*

---

The shelf we are on is ACOTAR / Fourth Wing / Quicksilver. Not "sportswriter
being funny." The comedy comes from total sincerity applied to a football game,
never from winking at the reader. **If a line feels like a joke about romantasy
instead of a line of romantasy, cut it.**

## Naming

**A house is always the real team name: House Seahawks, House Patriots,
House 49ers.** No invented house names, ever. She has to know who is playing
without decoding anything, and a fan searching for his team has to be able to
find us.

Everything *around* the name stays high fantasy — the seat, the words, the
sigil, the grudges, "bannerman," "lord," "the realm." That contrast is the
whole joke, and it only works if one side of it is plain.

**Grammar:** "House Patriots" is singular ("House Patriots was having the
worst kind of good night"). For possessives and bare references, use the
**city**, never the plural team name — *Seattle's lord*, *Dallas is 0-1*,
*Philadelphia was always going to be fine*. Never "Seahawks's." The city is
also just good prose: it gives you a second word for a house.

## Before anything: know where the houses stand

`reference/REALM-2026.md` holds the 2025 standings, the full playoff bracket,
and the September 2026 power tiers. **Check it before framing a game.** A
house losing is not a story; a Great House losing to a Fallen one is the
entire story, and you cannot tell the difference from the box score alone.

The file also carries the upset table — what a cross-tier result should be
read as — and the two houses currently out of position (Kansas City went
6–11 and nobody believes it; Baltimore went 8–9 and is ranked third).

Keep it current. A blog still calling a 9–2 team plucky underdogs in November
has stopped paying attention.

## House pages are evergreen — dispatches are dated

A dispatch is a chapter: written on a night, about that night, never touched
again. A house page is a **reference**. Someone lands on it in November after
a friend forwards a link, and everything on it has to still be true.

**Never put in a house page body:** "tonight", "last night", "this week",
"week one", "currently", "so far", "right now", or a stat line from a single
game. Those rot within days and make the whole site look abandoned.

- **Anchor history to absolute dates.** "In February 2026", "in 2015" — never
  "last winter", which is wrong by January.
- **Volatile facts go in the `status` frontmatter field**, with `statusAsOf`.
  It renders in the crest with its date, so a stale one is visibly stale
  rather than quietly lying. Injuries, who's starting, a suspension — that's
  what the field is for.
- **Describe character, not form.** "He has never once been anyone's first
  choice, and he is very hard to embarrass" is true in September and in
  January. "18 of 22 last week" is true for six days.
- Single-game detail belongs in the dispatch. If a house page needs it, the
  house page is doing the dispatch's job.

The test: read the page in December and ask whether any sentence has quietly
become false.

## Research — non-negotiable

**Never write a dispatch from memory or inference. Research the game first.**
Box score, at least two recaps, and the injury news. Every fact in a post —
score, stat line, who threw it, who caught it, when the injury happened, how
many years a man has been in the league — must come from a source you actually
read that week.

Invented detail is the one thing that ends this blog. A fan forwards a post to
his partner; if the score is wrong or a player is on the wrong team, he never
forwards another. The fantasy is in the *framing*. The facts underneath it are
load-bearing and literal.

If a detail can't be confirmed, write around it. Never estimate a man's age,
never guess how long he's been in the league, never assume who started.

## Titles and ranks

The court has a hierarchy and it maps to positions. Use it consistently.

| Football | Court |
|---|---|
| Quarterback | **the Lord** of the house |
| Backup QB | **the Understudy** |
| WR / RB / TE | **Knights** — the ones who ride out and get the glory |
| Offensive line | **the Shieldwall** |
| Defense | **the Watch** |
| Head coach | **the Steward** — runs the house, does not play |
| Owner / GM | **the Crown** / **the Master of Coin** |
| Rookie | **a new entry to the court** — squire until he does something |
| Kicker | **the Reckoner** — cold, apart, decides things |

A Lord is singular. A house has one, and losing him is a succession crisis —
which is why a backup taking over is always the best story available.

## Venues — use the real name

Stadiums are **Lumen Field**, **Gillette Stadium**, **Lambeau Field**. Do not
invent names for them; a reader who doesn't know "the Drowned Hall" is a reader
you just lost. Real nicknames that fans already use — the Jungle, the Black
Hole, the Frozen Tundra, the Dawg Pound, the Linc — are fair game, because
they're real.

## Prose rules

1. **Present tense. First person.** The narrator is a person at the game,
   having feelings she did not consent to.
2. **Fragments are the rhythm.** Long sentence, long sentence, then three words
   alone on a line. That break is where the swoon lives.
3. **One-line paragraphs carry the emotional beats.** Never bury the turn in a
   block of text.
4. **Physical fixation over statistics.** Jaw, throat, hands, shoulders, the
   line of his back. A completion percentage is never a feeling; the way he
   sets his feet is.
5. **Italics for the word the sentence turns on.** One per paragraph, maximum.
6. **Address the reader directly, sparingly.** "Reader, I did not." Once a post.
7. **Never explain a football term.** Use it with total confidence and let
   context carry it. Explaining breaks the spell and insults the reader.
   The score and the turning point must still be unmissable.
8. **No stats blocks. No bullet recaps.** Numbers appear as sentences —
   "Seventeen unanswered." — or not at all.

## Structural rules

- **Chapter number + trope title.** "The Bargain." "Second Chances."
  "A Marriage of Convenience." Map the week's story onto a romance trope.
- **Open on a man, not a matchup.** Always.
- **House words as the epigraph.**
- **The Turn gets its own section** with white space around it. This is the
  fourth-down moment, the pick six, the missed kick. Slow down here. This is
  the sex scene and it should be paced like one.
- **Close with "the line you say tomorrow."** A single pull-quote, blockquoted.
  This is the product. Everything above it is why she'll read the next one.
- **Sign-off trio:** Ships of the week / Villain of the week / Next week.

## Every game is a war or a court intrigue

Before you write a word, decide which kind of conflict the game was. This is
the frame; the romance trope sits inside it.

**A WAR** — physical, close, decided by force. Divisional grudges, low-scoring
slugfests, bad weather, a game won on the ground. Vocabulary: the field, the
line, the siege, the border, ground taken and given back, casualties, a house
that holds. Write it as territory.

**A COURT INTRIGUE** — decided by a decision, not a collision. A succession
crisis (the lord goes down), a betrayal (a former player wrecks his old
house), a claim pressed (a young lord's first real test), a bargain that
backfires (the expensive free agent), an ambush (a fourth-down call nobody saw
coming). Vocabulary: claims, oaths, debts, alliances, the wrong man in the
right chair. Write it as consequence.

Most games are one or the other and the wrong choice reads as noise. A 13–10
rock fight framed as court politics feels weightless; a shootout framed as a
siege feels absurd. **Say which it is in the first three paragraphs** — not
with the label, but by what you choose to describe.

When both are genuinely present, pick the one the *loser* will be thinking
about in bed that night. That's the real story.

## Tropes by game type

| Game | Trope |
|---|---|
| Division rival | Enemies to lovers |
| QB facing old team | Second-chance romance |
| Big free-agent signing | Marriage of convenience |
| Backup QB starts | The understudy / secret heir |
| Dominant offensive line | Touch her and die |
| Rookie breakout | Coming of age at court |
| Aging star's last run | The last season of a long love |

## Sameness — the standing failure

The voice has tics. They were charming once and are now wallpaper. Vary the
architecture of every post, and treat this list as spent:

- **"He does not X. He does not Y."** The negation-pair. Used to death.
- **"Reader, ..."** Once per post at the absolute most. Better: zero.
- **"There is something almost indecent about how much they enjoy it."** And
  every other "there is something [adverb] [adjective] about..." construction.
- **"Something in my chest does something unforgivable."** Retired.
- Three-word fragment on its own line, used more than twice in a post.
- Opening two consecutive posts with the same move (a man's appearance, a
  rhetorical question, a number).

Concretely: **vary sentence length across the whole post, not just at the
turn.** A page of fragments is as monotonous as a page of long sentences. Let
one paragraph run long and sinuous; let the next be four flat words. Change
where the emphasis falls. Change what the first sentence does — sometimes a
fact, sometimes a man, sometimes a flat declarative about time.

If two posts in a row could swap paragraphs without anyone noticing, the voice
has stopped working.

## Hard limits

- Never mock the reader for not knowing football.
- Never mock romantasy readers. The genre is the *format*, not the punchline.
  The bit only works because it's played completely straight.
- See **Length** above. 350–500 words.

## The Record — where the facts go

The story carries no numbers. None. Every score, stat line, and clock reading
goes in the `record` frontmatter array, which renders as a small grey ledger
under the post.

This is what lets the blog serve two readers at once. She reads a court story
and never sees a stat; he checks six lines and confirms it's accurate. Neither
reads the other's half, and the post is shorter for it.

**In the prose**, a number is only allowed when it has stopped being a
statistic and become a fact about a person: *"He was asked twenty-two times.
He answered eighteen."* If it reads like a box score, it belongs in the Record.

Forbidden in the story: quarterback, pass, completion, reception, touchdown,
field goal, interception, sack, punt, third down, yardage. The reader knows
what game this is. Say what it cost someone instead.

## Length

**350–500 words.** Hard ceiling 550. She is reading this on her phone between
other things, and the single most common way this blog fails is by being
longer than the interest it has earned.

Three to five beats. One Turn. Cut the paragraph you like most if it isn't
doing work — it's usually the one showing off.

## Altitude — the most important rule

**Broad strokes only. This is a story about people, told through a game — not
a recap of a game that mentions people.**

- **Three to five beats per post. Never more.** Pick only the ones with human
  stakes: an injury, a debut, a redemption, a choke, a rematch, a last chance.
- **The narrative unit is a person's fate, not a possession.** Never a drive
  chart. Never "2nd and 7 from the 34." Never a series of downs unless it *is*
  the Turn.
- **If a beat can't be told as something happening to a character, cut it.**
  A defensive scheme is not a character. A man who has waited nine years for
  this start is.
- **One Turn per post.** Everything else is setup or aftermath.
- **The test:** she should be able to retell the entire game in four sentences
  at brunch, and every one of them should be about a person.

**Worked example — House Seahawks vs. House Patriots, week one:**

The four beats are (1) Seattle's lord goes down injured, (2) the career
backup — a man who has been in this league a decade without a story — comes
in and wins it, (3) New England's new prize, the best receiver they've ever bought,
is carted off in his first night in the colors, and (4) their golden boy loses
to the same house that took the throne from him last winter.

That's the post. Not a single yard total. Not one third-down conversion rate.
Four people, four fates, one rematch nobody in Patriots wanted this early.
