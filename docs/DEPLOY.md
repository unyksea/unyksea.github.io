# Deploying this site

Pushing to `main` builds the site and deploys it to GitHub Pages automatically
(`.github/workflows/deploy.yml`). Nothing else is needed for a routine content
change.

## Domain

The site is served at **https://uny.ksea.org**, a subdomain of `ksea.org` that
**KSEA Headquarters controls**. The chapter cannot change that DNS record itself.

```
uny.ksea.org.  CNAME  unyksea.github.io.
```

Two things must both be true for the domain to work:

1. **The DNS record above exists.** HQ's IT team owns this.
2. **The repo claims the domain.** `public/CNAME` contains `uny.ksea.org`, and it
   is also set under Settings → Pages → Custom domain.

If only the first is true, GitHub serves a *"There isn't a GitHub Pages site here"*
page — the domain is pointing at GitHub, but no repository has claimed it. That is
a repo configuration problem, not a DNS problem.

`https://unyksea.github.io/` redirects to the custom domain once it is set, so old
links keep working.

## History

An earlier subdomain, `unyc.ksea.org`, hosted the chapter's Google Sites symposium
page. HQ replaced it with `uny.ksea.org` rather than repointing it, and
`unyc.ksea.org` no longer resolves. Printed material from the 2025 and 2026
symposia that cites `unyc.ksea.org` is therefore dead — worth asking HQ to restore
it as a redirect if any of it is still circulating.
