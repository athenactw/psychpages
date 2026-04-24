# Athena's Psychology Pages

Static multi-page scrapbook-style psychology student blog with a real CMS path.

## Pages

- `index.html`: hub / homepage
- `about.html`: about page
- `threads.html`: blog index with topic filter
- `post.html?id=...`: individual thread page
- `reading-room.html`: resources page

## View locally

Best option is to run a local server in this folder:

```bash
python3 -m http.server 8000
```

Then open:

- `http://127.0.0.1:8000/`

You can also open `index.html` directly, but a local server is better for testing multi-page links consistently.

## Public site and real admin login

The public site can still be hosted on GitHub Pages, but the real CMS login is set up for Netlify + Decap CMS.

This matches the official Decap CMS guidance:

- Decap says GitHub authentication needs server support, and Netlify can provide that for GitHub-backed sites.
- Decap's Netlify setup uses Netlify Identity + Git Gateway.

Official docs:

- https://decapcms.org/docs/choosing-a-backend/
- https://decapcms.org/docs/install-decap-cms/
- https://docs.netlify.com/deploy/create-deploys/

### Recommended setup

1. Keep the repo on GitHub.
2. Import that GitHub repo into Netlify.
3. In Netlify, enable `Identity`.
4. In Netlify, enable `Git Gateway`.
5. Open `/admin/` on your Netlify site and log in there.

### CMS files

- `admin/index.html`
- `admin/cms.html`
- `admin/config.yml`
- `content/settings.json`
- `content/posts/*.json`
- `content/resources/*.json`
- `content/generated/posts.json`
- `content/generated/resources.json`
- `scripts/build-content.mjs`
- `package.json`

The site reads generated content indexes, while the CMS edits individual post and resource files.

### Netlify setup steps

1. Go to Netlify and choose `Add new project` -> `Import an existing project`.
2. Connect your GitHub account and choose this repo.
3. Set the build command to `npm run build`
4. Set the publish directory to `.`
5. Deploy the site.
6. Open the Netlify project dashboard.
7. Go to `Identity` and click `Enable Identity`.
8. Under registration, choose `Invite only`.
9. Under `Services`, enable `Git Gateway`.
10. Visit `https://YOUR-NETLIFY-SITE.netlify.app/admin/`

Every CMS save now updates real repo files, and Netlify rebuilds the generated content indexes for the live site.

If you want Google or GitHub login buttons, enable them under Netlify Identity external providers.

### Commands

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git add .
git commit -m "Initial site"
git push -u origin main
```

## Fonts

The theme is set up for these font names:

- `Bettermilk`
- `Milk Choco`
- `LiebeHeide`

To use the exact fonts, add them with `@font-face` in `styles.css`. Until then, the fallbacks stay readable.

## Important note

The old front-end-only admin gate has been replaced by a real CMS path. The site content now lives in repo files, which is what makes proper authenticated editing possible.
