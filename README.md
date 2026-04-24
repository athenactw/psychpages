# Athena's Psychology Pages

Static multi-page scrapbook-style psychology student blog.

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

## Make it a real public site

This project is set up for simple GitHub Pages hosting with:

- `.nojekyll`
- `404.html`

### Publish steps

1. Create a new GitHub repository.
2. Add that repository as the remote for this folder.
3. Push the `main` branch.
4. In GitHub, open `Settings` then `Pages`.
5. Under `Build and deployment`, set `Source` to `Deploy from a branch`.
6. Choose branch `main` and folder `/(root)`.
7. Save and wait a minute or two.

Your public URL will be one of these:

- User site: `https://YOUR-USERNAME.github.io/`
- Project site: `https://YOUR-USERNAME.github.io/REPO-NAME/`

This project uses relative links, so it works as either a user site or a project site.

### Commands

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git add .
git commit -m "Initial site"
git push -u origin main
```

## Admin editor

- Open the `Admin` button in the bottom-right corner.
- Password: `Ooni94662873!`
- All edits save to browser `localStorage`.
- Use `Export JSON` to back up your content.
- Use `Import JSON` to restore or move content.

## Fonts

The theme is set up for these font names:

- `Bettermilk`
- `Milk Choco`
- `LiebeHeide`

To use the exact fonts, add them with `@font-face` in `styles.css`. Until then, the fallbacks stay readable.

## Important note

The admin password is only a front-end gate. It is not real authentication. A real private admin area needs a backend or hosted CMS.
