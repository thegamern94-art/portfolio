# Deploying `idriss.algerialawlibrary.com` on GitHub Pages

This project hosts the portfolio at **https://idriss.algerialawlibrary.com**.

DNS for `algerialawlibrary.com` lives on **Cloudflare**, and the apex already serves the
existing site. You are adding **one new record** for a subdomain — nothing that already exists
is modified, and your main site cannot be affected by this.

> **Do the steps in order.** Steps 4 and 5 are deliberately sequenced: on GitHub's own
> recommendation the custom domain is registered in GitHub **before** the DNS record exists.
> Reversing them can allow someone else to serve a site on a subdomain of your domain.

---

## 1. Local development

```powershell
npm install      # first time only
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # serve the built dist/ locally
```

**The portfolio source is one file:** `idriss_zaghez_spatial_legal_tech_portfolio.tsx`, at the
project root. `src/main.tsx` imports it directly from there on purpose, so there is exactly one
copy to edit — there is no duplicate inside `src/` that can drift out of sync.

`dist/` is gitignored. It is built fresh in CI on every push; never commit it.

---

## 2. Create the repo and push

Create an empty repo named **`portfolio`** on GitHub (no README, no .gitignore — this project
already has one), then:

```powershell
git init
git add .
git commit -m "Portfolio: Algeria Law Library, محامي PDF, IdrissClaw"
git branch -M main
git remote add origin https://github.com/thegamern94-art/portfolio.git
git push -u origin main
```

The repo name is invisible to visitors once the custom subdomain is attached, so `portfolio`
is fine.

> **Free-plan note:** on GitHub's free tier, Pages only publishes from **public** repositories.
> If you need this repo private, you need GitHub Pro/Team/Enterprise Cloud — the workflow below
> works unchanged either way.

---

## 3. Turn on Pages

In the new repo: **Settings → Pages → Build and deployment → Source**.

Select **GitHub Actions**. Do *not* pick "Deploy from a branch" — this project builds with Vite
and the workflow at `.github/workflows/deploy.yml` handles it.

That workflow runs on every push to `main`: it installs dependencies with `npm ci`, runs
`npm run build`, and publishes `dist/` to Pages.

After the first run goes green (repo → **Actions** tab), the site is live at:

```
https://thegamern94-art.github.io/portfolio/
```

Open that URL and confirm the portfolio actually renders **before** touching domains. If it is
blank there, the problem is the build, not DNS.

---

## 4. Register the custom domain in GitHub *first*

Still in **Settings → Pages → Custom domain**, enter:

```
idriss.algerialawlibrary.com
```

and click **Save**.

GitHub will immediately report the DNS check as unsuccessful — that is expected and correct,
because the record does not exist yet. You are claiming the hostname before creating it.

---

## 5. Now add the Cloudflare DNS record

Cloudflare dashboard → your **algerialawlibrary.com** zone → **DNS → Records → Add record**:

| Field | Value |
| --- | --- |
| Type | `CNAME` |
| Name | `idriss` |
| Target | `thegamern94-art.github.io` |
| Proxy status | **DNS only (grey cloud)** |
| TTL | Auto |

### The proxy setting is the part that matters

Click the orange cloud so it turns **grey** (DNS only). This is not cosmetic: GitHub has to
validate the domain and issue its own Let's Encrypt certificate for it, and it cannot complete
that validation while Cloudflare is proxying the hostname. Leave it proxied and GitHub's Pages
settings will keep reporting the domain as unresolvable, with HTTPS never becoming available.

Because this record is DNS-only, Cloudflare's SSL/TLS mode does not apply to
`idriss.algerialawlibrary.com` at all — traffic goes straight to GitHub.

Verify from your machine:

```powershell
Resolve-DnsName idriss.algerialawlibrary.com
```

You want an alias to `thegamern94-art.github.io`, resolving to GitHub's IPs
(`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).
DNS changes can take up to 24 hours to propagate, though Cloudflare is usually far quicker.

Re-check **Settings → Pages** until the DNS check passes.

---

## 6. Enforce HTTPS

Once GitHub has issued the certificate, tick **Enforce HTTPS** in **Settings → Pages**.

This can take up to 24 hours after the DNS record resolves, though it is normally a few
minutes. If the checkbox is greyed out or says HTTPS is unavailable, the cause is almost always
an orange-cloud record from step 5 — fix that and wait. Don't repeatedly toggle the setting.

---

## 7. Ongoing updates

```powershell
git add .
git commit -m "Update portfolio"
git push
```

The Action redeploys automatically. Nothing else to do.

---

## Note: there is deliberately no `CNAME` file

Under a **custom GitHub Actions workflow** publishing source, GitHub does not create a `CNAME`
file and **ignores any that exists** — it is neither read nor required. The Custom domain field
in Settings (step 4) is the only thing that binds the domain.

That is why `public/CNAME` was removed from this project rather than committed. If you ever
switch Pages to "Deploy from a branch", a `CNAME` file becomes relevant again.

---

## Why `base: '/'` in `vite.config.ts` (do not change this)

A GitHub Pages *project* repo is normally served from a subpath —
`thegamern94-art.github.io/portfolio/` — but the moment a custom domain is attached, the site
is served from the **root of that domain**. Asset URLs must therefore be `/assets/…`, not
`/portfolio/assets/…`.

Point `base` at `/portfolio/` and the custom domain serves a blank white page with 404s on the
JS and CSS. It is already configured correctly; leave it alone.

---

## Troubleshooting

| Symptom | Cause |
| --- | --- |
| Blank white page on the custom domain | `base` in `vite.config.ts` changed to `'/portfolio/'` |
| "Domain does not resolve to the GitHub Pages server" | Record is orange-cloud, or Target has a typo, trailing dot, or slash |
| Enforce HTTPS stays unavailable | Still orange-cloud, or the cert has simply not been issued yet |
| Pages 404 after a green Action | Source is set to "Deploy from a branch" instead of "GitHub Actions" |
| Action fails at `npm ci` | `package-lock.json` is missing from the commit |
| Action fails on `pages: write` | Repo → Settings → Actions → General → Workflow permissions: allow write |

---

## Security note: never add a wildcard record

GitHub specifically warns against wildcard DNS records such as `*.algerialawlibrary.com`. They
open a domain-takeover path: verifying `algerialawlibrary.com` stops someone claiming
`a.algerialawlibrary.com`, but a wildcard still lets them claim `b.a.algerialawlibrary.com`.

Your zone currently has **no wildcard record** (verified), so `idriss` is a clean, explicit
hostname. Keep it that way, and add subdomains one at a time.

Optionally, repo → **Settings → Pages → Verified domains** lets you add a GitHub-supplied
**TXT** record proving you control `algerialawlibrary.com`. GitHub shows you the exact record
name and value — copy them rather than guessing.

---

## If you ever want the orange cloud (or Cloudflare Pages instead)

- **Orange cloud on GitHub Pages:** this works, but only *after* GitHub's certificate is active
  and **Enforce HTTPS** is ticked. At that point you can switch the record to proxied, provided
  Cloudflare SSL/TLS is set to **Full (strict)**. "Flexible" causes an infinite redirect loop,
  and "Off" is never right. If the certificate ever fails to renew, switch back to DNS-only.
- **Cloudflare Pages instead:** since your nameservers are already on Cloudflare, adding
  `idriss.algerialawlibrary.com` as a Pages custom domain creates the DNS record for you
  automatically. Deploy the same output with `npx wrangler pages deploy dist` — no config
  changes needed, because `base` stays `'/'`.
