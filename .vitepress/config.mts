import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "How in Language?",
  description: "Translating programming concepts and syntax",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/home' },
    ],

    sidebar: [
      {
        text: 'Welcome',
        link: '/home',
      },
      {
        text: 'Section 1',
        items: [
          { text: 'Topic 1', link: '/section-1/topic-1' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/doubleedesign/how-in-language' }
    ]
  }
})
