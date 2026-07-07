// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.css';
import { getSidebarItems } from '../utils';

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
		});
	},
	async enhanceApp({ app, router, siteData }) {
		siteData.value = {
			...siteData.value,
			themeConfig: {
				...siteData.value.themeConfig,
				sidebar: await getSidebarItems()
			}
		};
	}
} satisfies Theme;
