import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const houses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/houses' }),
  schema: z.object({
    team: z.string(),          // "Seahawks" -> renders as "House Seahawks"
    city: z.string(),          // used for possessives + singular verbs. See VOICE.md
    conference: z.enum(['AFC', 'NFC']),
    division: z.enum(['East', 'North', 'South', 'West']),
    seat: z.string(),          // the stadium, renamed
    words: z.string(),         // house words
    sigil: z.string(),
    ink: z.string(),           // primary color
    gold: z.string(),          // accent color
    // false until the full chronicle + offseason section is written.
    // Standing in the realm as of Sept 2026 — see reference/REALM-2026.md.
    // Drives what counts as an upset. Revisit as the season disagrees.
    tier: z.enum(['great', 'ascendant', 'contested', 'diminished', 'fallen']),
    // Volatile facts (injuries, who's starting) live HERE, never in the body —
    // the body must stay true all season. Rendered with its date so staleness
    // is visible rather than silent. See VOICE.md "House pages are evergreen".
    status: z.string().optional(),
    statusAsOf: z.coerce.date().optional(),
    record2025: z.string(),
    chronicled: z.boolean().default(false),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    chapter: z.string(),       // "Chapter One"
    title: z.string(),         // trope title: "The Understudy"
    trope: z.string(),
    frame: z.enum(['war', 'intrigue']),   // see VOICE.md — decide before writing
    season: z.number(),
    week: z.number(),
    date: z.coerce.date(),
    houses: z.array(z.string()),   // house slugs this post belongs to
    line: z.string(),          // "the line you say tomorrow" — the pull quote
    excerpt: z.string(),
    // The facts, quarantined. The story above must never carry a stat line —
    // see VOICE.md. Every number in the post lives here instead.
    record: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { houses, posts };
