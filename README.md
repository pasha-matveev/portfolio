# Portfolio

Astro + MDX. Run `npm run dev`, build with `npm run build`.

## Adding or editing a project

Each project is one file in `src/content/projects/`. The frontmatter drives the cards and the info sidebar; the body is MDX.

## Adding media

1. Put files in `public/projects/<project-slug>/` (e.g. `public/projects/telebot/front.jpg`, `demo.mp4`).
2. Cover image (card + top of the page): add `cover: /projects/<slug>/front.jpg` to the frontmatter.
3. In the body, replace a placeholder by adding `src`:

```mdx
<Figure src="/projects/telebot/front.jpg" kind="Photo" caption="Telebot in the lab." />
<Video src="/projects/telebot/demo.mp4" poster="/projects/telebot/front.jpg" caption="Driving through a room." />
```

Anything without `src` / `cover` renders as a placeholder that describes the picture. After changing the content schema, restart the dev server.

## Deployment

The site is deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`. The custom domain is `matveev.best` (`public/CNAME`).
