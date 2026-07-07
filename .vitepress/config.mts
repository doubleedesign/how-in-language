import { defineConfig } from 'vitepress';

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
		}
	});
};

