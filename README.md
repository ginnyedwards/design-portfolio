# Virginia Edwards Design — portfolio

A clean, static rebuild of the Cargo portfolio. Plain HTML/CSS/JS — no build
step, no framework. It runs anywhere, and you own all of it.

## Pages

| File                   | Page                                   |
|------------------------|----------------------------------------|
| `index.html`           | Home (logo links to About)             |
| `about.html`           | About Me                               |
| `norma-jeanne.html`    | Norma Jeanne (2023)                    |
| `environment.html`     | The Environment Keeps Happening To Me  |
| `brutalist-jigsaw.html`| The Brutalist Jigsaw (2024)            |
| `cannibalism.html`     | Escape To Cannibalism (2024–2025)     |
| `excess.html`          | A Story Of Excess (2025)              |
| `contact.html`         | Contact Information (live clock)        |

Shared styling is in `css/style.css`; the live date/clock and the home hero
pattern are in `js/script.js`.

## Preview locally

Double-click `index.html` to open it in your browser. That's it.

## Adding your images

Every photo currently shows a striped placeholder box. To add a real image:

1. Drop the file into the `images/` folder (see `images/README.txt` for the
   filenames each page expects).
2. Open the matching `.html` page. Each placeholder has a comment above it
   showing the line to use, e.g. replace
   `<div class="placeholder">…</div>` with
   `<img src="images/norma-jeanne-1.jpg" alt="Phrenology skull">`.

For the **Escape To Cannibalism** video, open `cannibalism.html`, find the
commented-out `<iframe>`, paste your YouTube video id in place of
`YOUR_VIDEO_ID`, and delete the placeholder above it.

The **home hero** is recreated in code (the repeating "VIRGINIA EDWARDS"
boxes). If you'd rather use your original photo of it, delete the
`<div class="hero-pattern" …>` block in `index.html` and drop in
`<img src="images/home-hero.jpg" alt="Virginia Edwards">`.

## Changing the typeface

The font is set in one place — the `--font-serif` line near the top of
`css/style.css`. Swap it for any Google Font (update the `@import` line too) or
a web-safe serif. I picked Source Serif 4 as a close match from a screenshot;
since you'll know the original better than I can guess it, this is easy to change.

---

# Hosting on GitHub Pages

1. Create a new repository on GitHub (any name, e.g. `portfolio`). Make it
   **Public**.
2. Upload everything in this folder to the repo (drag the files into the
   "Add file → Upload files" screen, or use `git`). Keep the folder structure —
   `index.html` must sit at the top level of the repo.
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to *Deploy from a branch*,
   pick your `main` branch and the `/ (root)` folder, then **Save**.
5. Wait a minute. Your site appears at `https://YOURUSERNAME.github.io/portfolio/`.

The `.nojekyll` file is already included so GitHub serves your files as-is.

---

# Pointing your own domain at it (the swap)

Your situation: your domain currently points at your *other* GitHub Pages site,
and you want it on this portfolio instead, with the other site moving to a new
domain. Because both sites are on GitHub Pages, your domain's DNS already points
at GitHub — so this is mostly a settings change, with little or no DNS work on
your existing domain.

Do it in this order so nothing goes offline:

### 1. Move the other site to its new domain first
- Buy the new domain.
- At that registrar, add GitHub's DNS records (same values as in step 3 below).
- In the **other site's repo → Settings → Pages → Custom domain**, replace your
  old domain with the new one and Save. This moves that site *and* releases your
  old domain.
- Confirm the other site loads on its new domain.

### 2. Claim your freed domain for this portfolio
- In **this portfolio repo → Settings → Pages → Custom domain**, type your
  domain (e.g. `yourdomain.com`) and Save. This writes a `CNAME` file into the repo.

### 3. Check / set the DNS for your domain
Your domain already points at GitHub, so it may just work. If it doesn't, make
sure these records exist at your domain's registrar (current GitHub values):

**Apex domain (`yourdomain.com`) — four A records:**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
(Optionally, the IPv6 AAAA records:)
```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

**www subdomain — one CNAME record:**
```
www  →  YOURUSERNAME.github.io
```

### 4. Turn on HTTPS
Back in **Settings → Pages**, tick **Enforce HTTPS** once it becomes available
(it can take a little while after DNS resolves).

DNS changes can take up to 24 hours to propagate, though it's often much faster.

> One free alternative: the other site doesn't *have* to get a custom domain at
> all — you could just let it live at `YOURUSERNAME.github.io/other-repo/` and
> skip buying a domain. Only worth it if you don't need a branded URL for it.
