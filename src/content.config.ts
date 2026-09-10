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
    draft: z.boolean().default(false),
  }),
});

export const collections = { houses, posts };
