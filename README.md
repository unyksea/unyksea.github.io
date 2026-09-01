# KSEA Upstate New York — chapter website

The website for the Upstate New York chapter of the Korean-American Scientists and
Engineers Association. Live at **https://uny.ksea.org**.

Built with [Astro](https://astro.build) and Tailwind CSS. It is a fully static site —
there is no server, no database, and no hosting bill.

---

## The three things you'll actually need to do

You can do all of these from the GitHub website. No local setup, no command line.

### 1. Add or update an event

Create a file in `src/content/events/` named like `2027-symposium.md`:

```markdown
---
title: "KSEA Upstate New York Symposium 2027"
date: 2027-04-11
location: "Cornell University, Ithaca, NY"
status: "upcoming"        # upcoming | tba | past
kind: "symposium"         # symposium | seminar | meeting
speaker: "Name, Ph.D. (Institution)"   # seminars only
theme: "Optional subtitle shown in quotes"
summary: "One or two sentences shown on the events list."
registrationUrl: "https://..."   # optional
bookletUrl: "https://..."        # optional
---

Write the event page here in normal Markdown — headings, lists, tables, links.
```

`status` controls where it appears:

| status | Meaning | Where it shows |
| --- | --- | --- |
| `upcoming` | Confirmed, date is set | Top of Events, and the home page |
| `tba` | Planned, details pending | Top of Events, marked "Planned" |
| `past` | Finished | The archive at the bottom of Events |

**After an event ends, change its `status` to `past`.** That is the only cleanup step.

### 2. Update the officer list

Edit `src/data/leadership.json`. Move outgoing officers into the `past` array rather
than deleting them — the chapter's history is worth keeping.

```json
{
  "name": "Full Name",
  "role": "President",
  "institution": "Cornell University",
  "linkedin": "https://www.linkedin.com/in/..."
}
```

Only list people who have agreed to be listed publicly.

### 3. Publish

Commit to `main`. GitHub Actions builds and deploys automatically, usually within two
minutes. Watch it under the repo's **Actions** tab.

---

## Rules that matter

**Never commit member data.** The chapter roster contains personal email addresses,
employers, and job titles for people who did not consent to publication. `.gitignore`
blocks `*.csv` and `*.xlsx`, and the deploy workflow fails the build if a personal
`.edu` address appears anywhere in the output. Do not weaken either check.

Member figures on the site are **aggregate only** (member counts, institution names)
and are hardcoded in `src/data/site.ts`. No build step reads the roster.

---

## Running it locally (optional)

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview  # serve the built site
```

## Layout

```
src/
├─ pages/            One file per URL
│  └─ events/[...slug].astro   Generates a page per event Markdown file
├─ content/events/   The event Markdown files — this is the content you edit
├─ data/
│  ├─ site.ts        Chapter name, email, nav, member stats, institutions
│  └─ leadership.json Officer list
├─ components/       Reusable UI pieces
├─ layouts/          Page shell: header, nav, footer, meta tags
└─ styles/global.css Colors, fonts, long-form article styling
public/
├─ CNAME            Tells GitHub Pages the custom domain. Do not delete.
└─ favicon.svg
```

## Domain and DNS

`uny.ksea.org` is a subdomain of `ksea.org`, so **KSEA Headquarters controls the DNS
record** — the chapter cannot change it directly. It points here via:

```
uny.ksea.org.  CNAME  unyksea.github.io.
```

If the site ever needs to move hosts, that record change has to be requested from the
HQ IT director.

## Before launch

Search the source for `TODO` — there are placeholders for the chapter email address
and two Google Form embed URLs (mailing list, contact form) that need real values.

`kind` controls how a past event is displayed: `symposium` gets a card in the
Symposia grid, while `seminar` and `meeting` appear as compact rows in the
"Seminars and meetings" list. Add `speaker:` to seminar entries.

### Updating the membership chart

The stacked bar chart on the Membership page reads `membershipMatrix` in
`src/data/site.ts` — one row per institution with undergrad / grad / regular
counts. Every total on the site (chart, legend, table footer, the "at a glance"
figures) is computed from those rows, so editing the matrix updates all of them
consistently. Add the new year's counts and nothing else needs to change.

The three series colors are fixed and were validated for color-vision
deficiency; do not substitute new hues without re-checking them.

### Updating the annual plan

The "year at a glance" table on the Events page is generated from the event
Markdown files that have `status: "tba"` or `"upcoming"` — add `plannedAttendees`
to a file and it appears in the table. Chapter goals for the year live in
`annualPlan` in `src/data/site.ts`.

Planned budgets are deliberately **not** published on the site.

### The homepage institution map

`src/components/InstitutionMap.astro` draws New York State as an inline SVG with a
logo chip per member institution. The data is `mapInstitutions` in
`src/data/site.ts`:

- `x` / `y` — the campus's **true** geographic position, projected from lat/lon.
  Don't change these by hand; they are what the map is claiming.
- `cx` / `cy` — where the **logo chip** is drawn. A dashed leader line joins the
  chip to its true point, so a chip can be nudged anywhere legible. The three
  Rochester-area campuses sit within two percent of each other and would otherwise
  overlap.

To add an institution: drop a transparent PNG in `public/images/institutions/`
(longest side ~220px), then add a row with its coordinates. To reposition a chip,
change only `cx`/`cy` — keep chips at least 7% apart horizontally or 9%
vertically so they don't collide, and inside the state outline.

The logos are third-party university trademarks used to identify member
institutions. Several universities require permission for use of their marks —
worth confirming with each before the site goes public.

### Event photos

Add photos to an event by listing them in its Markdown frontmatter. The first
image becomes the card thumbnail and the page hero; the rest appear in a "Photos"
grid below the text.

```yaml
images:
  - src: "/images/events/2027-symposium-group.jpg"
    alt: "What is literally visible in the photo, for screen readers"
    caption: "Shown under the image. Optional."
```

Put the files in `public/images/events/`, resized to about 1400px on the long side
and saved as JPEG — the originals out of a phone are far too large to serve.

**Check every photo before adding it.** Screenshots of video calls routinely
include a participant list with attendees' full names, and group photos may include
people who did not expect to appear on a public website. Crop or leave out anything
that publishes a name or face without consent — the immigration seminar photo in
this repo is deliberately cropped for exactly this reason.

### RSVP / registration links

Add these to an event's frontmatter:

```yaml
registrationUrl: "https://forms.gle/..."
registrationLabel: "RSVP for this event"   # optional; defaults to "Register"
rsvpRequired: true                          # adds an "RSVP required" badge
```

`registrationUrl` puts a button on the event page and an **RSVP** button on the
event's card wherever it appears (home page, events list). `rsvpRequired: true`
additionally shows an "RSVP required" badge on the card — use it when you need a
headcount for catering or seating, not for every event with a sign-up form.
