# Simplified Personal Site

This folder is a static, dependency-free version of the personal site.

The visual structure is inspired by [AcademicPages](https://github.com/academicpages/academicpages.github.io), a fork of [Minimal Mistakes](https://mademistakes.com/work/minimal-mistakes-jekyll-theme/). This version removes the Jekyll machinery but keeps an explicit attribution because the layout remains recognizably derived from that academic-site design.

## Structure

- `index.html`: home page
- `publications.html`: publication list
- `publication.html`: internal publication detail page
- `talks.html`: talks page
- `talk.html`: internal talk detail page
- `cv.html`: CV page
- `blog.html`: research notes list
- `asset/`: image, SVG favicon, PDF assets, and local PNG icons
- `script.css`: visual style
- `script.js`: shared rendering logic
- `content/publications/`: one JavaScript data file per publication, sorted by category
- `content/talks/`: one JavaScript data file per talk, sorted by category
- `content/blog/`: reserved for future research-note data files

## Adding an item

Add one data file in the appropriate category folder, then add it to that category's `items.js` loader.

For example, a new preprint can live in:

`content/publications/preprints/my-paper.js`

Then add this line to `content/publications/preprints/items.js`:

```js
document.write('<script src="content/publications/preprints/my-paper.js"></script>');
```

For publications, use `note` for the short sentence shown in the publication list, and `abstract` for the full paper abstract shown on the detail page.

Optionally, add `award: "Award name"` to a publication file to show an award note above the abstract on the detail page.

For talks, keep the list concise and use `summary` only for the detail page.

The HTML files intentionally stay very small and only load the shared CSS, the relevant content loaders, and JavaScript.

Publication list links point to `publication.html?id=paper_slug`, and talk links point to `talk.html?id=talk_slug`, so detail pages stay inside the site layout instead of opening raw content files.
