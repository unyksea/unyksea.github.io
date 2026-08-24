# Deploying this site

## Why `CNAME` is not in `public/` yet

GitHub Pages reads a `CNAME` file from the published output and treats it as the
site's custom domain. If that file says `unyc.ksea.org` **before** KSEA HQ has
pointed the DNS record here, Pages redirects the working `<org>.github.io` URL to
a domain that doesn't resolve yet — the site appears broken and there is nothing
to review.

So the file is parked at `docs/CNAME.hold`. Move it into `public/` only at the DNS
step:

```bash
mv docs/CNAME.hold public/CNAME
git add -A && git commit -m "Point Pages at unyc.ksea.org" && git push
```

Until then the site lives at `https://<org>.github.io/`, which is a perfectly good
URL to circulate for review.
