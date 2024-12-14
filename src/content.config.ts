import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    loader: glob({pattern: "*.md", base: "src/posts/"}),
    schema: z.object({
        title: z.string(),
        author: z.string().default("unknown"),
        created: z.coerce.date(),
        lastmodified: z.coerce.date().optional(),
    })
})

export const collections = { posts };
