# Contributing

Additions and corrections via [the GitHub repo](https://github.com/doubleedesign/how-in-language) are very welcome!

::: info
All the docs themselves are simple Markdown files. 

The site is built on [VitePress](), so its built-in [Markdown Extensions](https://vitepress.dev/guide/markdown) are available. You can also see which others have been installed in the [config file](https://github.com/doubleedesign/how-in-language/blob/master/.vitepress/config.mts). VitePress uses [markdown-it](https://github.com/markdown-it/markdown-it), so any extension packages for that can be added similarly.
:::

## Adding a new page

- There is a template for new pages in `./_templates/doc.md`. At the time of writing, this is basically just a guide to structuring the document by having a section for each language, and an attempt to have the languages in the same order across the site.
- You can use [Frontmatter](https://vitepress.dev/guide/frontmatter) to override the title shown in the navigation, and the order the pages appear in.

## Adding a new section

If the topic(s) you wish to contribute don't fit into the existing sections in the sidebar navigation, you can add a new one:
1. Create new directory in the project root
2. Add an `index.data.ts` file, copy the contents from the same file from another directory, and update the path (this is a VitePress [build-time data loader](https://vitepress.dev/guide/data-loading) used to automatically generate navigation from the Markdown files)
3. Add your section to the `getSidebarItems()` function in `./.vitepress/utils.ts`.

## Languages

Adding info for languages not already listed is welcome. If adding a new language, please also add it to the new doc template `./_templates/doc.md`.

## Corrections

> I went an embarrassing number of years not knowing you could interpolate strings in PHP by double-quoting a string with variables in it. I was concatenating everything like an absolute sucker. It was a student I was teaching who told me. So please, if there's a better way to write something, tell me. I can take it.
> -- <cite>Leesa</cite>

We all have different experience with and exposure to language features, different levels of expertise, develop various habits about how we do things, may not know about a new language feature, etc. As such, content on this site is unlikely to be 100% complete and accurate at all times.

If you spot something factually incorrect, misleading, or incomplete, please feel free to correct it via a GitHub PR or issue.
