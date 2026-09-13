import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
  schema: z.object({
    title: z.string(),
    /** Event date. For a "tba" event, use a placeholder date in the target season. */
    date: z.coerce.date(),
    location: z.string().optional(),
    /** Map link for the venue; makes the location in the header clickable. */
    locationUrl: z.string().url().optional(),
    /** upcoming = confirmed and in the future; tba = planned, details pending; past = archived */
    status: z.enum(["upcoming", "tba", "past"]),
    /** Groups the archive. Symposia get cards; seminars and meetings get a compact list. */
    kind: z.enum(["symposium", "seminar", "meeting"]).default("symposium"),
    summary: z.string(),
    theme: z.string().optional(),
    /** Speaker line shown on seminar list rows, e.g. "Kwang-Won Park, Ph.D. (Cornell)" */
    speaker: z.string().optional(),
    /** Planned-year fields, from the chapter annual plan. */
    plannedAttendees: z.number().optional(),
    plannedBudget: z.number().optional(),
    /** Photos. The first is used as the card and page hero. */
    images: z
      .array(z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() }))
      .default([]),
    bookletUrl: z.string().url().optional(),
    registrationUrl: z.string().url().optional(),
    /** Button label for registrationUrl. Defaults to "Register". */
    registrationLabel: z.string().optional(),
    /** Set when attendance must be confirmed in advance (catering, seating). */
    rsvpRequired: z.boolean().default(false),
  }),
});

export const collections = { events };
