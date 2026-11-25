import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),            // one line, shown in lists
    summary: z.string(),            // 1–2 sentences, shown on cards
    order: z.number(),              // home page order
    period: z.string(),             // "2026", "2019 – 2025"
    status: z.string(),             // "In testing", "Ongoing", "Finished"
    role: z.string(),
    kind: z.enum(['Software', 'Hardware', 'Software + Hardware']),
    context: z.string(),            // "WavIOT · remote"
    stack: z.array(z.string()),
    highlights: z.array(z.object({ value: z.string(), label: z.string() })),
    coverKind: z.enum(['Photo', 'Screenshot', 'Video']),
    coverPosition: z.string().default('top left'),  // CSS object-position for the cover image
    cover: z.string().optional(),   // real image in /public; the placeholder is used when missing
    coverNote: z.string(),          // describes the picture that belongs here (placeholder text until real media is added)
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

export const collections = { projects };
