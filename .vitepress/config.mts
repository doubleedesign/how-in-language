import { defineConfig } from 'vitepress';
// @ts-expect-error TS7016: Could not find a declaration file for module markdown-it-footnote.
import footnote from 'markdown-it-footnote';
import anchor from 'markdown-it-anchor';

// https://vitepress.dev/reference/site-config
export default () => {
	return defineConfig({
		title: 'How in Language?',
		description: 'Translating programming concepts and syntax',
		themeConfig: {
			// https://vitepress.dev/reference/default-theme-config
			nav: [
				{ text: 'Home', link: '/home' },
			],
			// Sidebar is configured dynamically, see ./vitepress/theme/index.ts
			// (Content loaders cannot be used in config, but can in theme)
			socialLinks: [
				{ icon: 'github', link: 'https://github.com/doubleedesign/how-in-language' }
			],
			search: {
				provider: 'local'
			}
		},
		markdown: {
			config: (md) => {
				md.use(footnote);
				md.use(anchor);
			}
		}
	});
};

