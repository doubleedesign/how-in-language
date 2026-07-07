import { DefaultTheme } from 'vitepress/theme';
import type { ContentData } from 'vitepress';
type SidebarItem = DefaultTheme.SidebarItem;

type MenuItem = SidebarItem & {
	order?: number;
};

export function mapContentDataToMenuItems(rawItems: ContentData[]): SidebarItem[] {
	return rawItems.map((page: ContentData) => {
		return ({
			text: page.frontmatter.title,
			link: page.url,
			order: page.frontmatter.order
		});
	});
}

export async function getPagesInDirectory(dir: string): Promise<SidebarItem[]> {
	const dataFromLoader = (await import (`../${dir}/index.data.ts`)).data;

	return dataFromLoader
		.sort((a: MenuItem, b: MenuItem) => {
			if(a.order && b.order) {
				return a.order - b.order;
			}

			// if one has an order and the other doesn't, put the one without at the end
			if(a.order && !b.order) {
				return -1;
			}

			if(!a.order && b.order) {
				return 1;
			}

			return a.text?.localeCompare(b.text ?? '') ?? 0;
		})
		.map((page: MenuItem) => ({
			text: page?.text ?? sentenceCase(page?.link?.split('/').pop()?.replace('.html', '')),
			link: page.link
		}));
}

function sentenceCase(text?: string) {
	if(!text) return '';

	return (String(text).charAt(0).toUpperCase() + String(text).slice(1)).replace('-', ' ');
}

export async function getSidebarItems() {
	return await Promise.all([
		{
			text: 'Welcome',
			link: '/home',
		},
		{
			text: 'Basic syntax',
			items: await getPagesInDirectory('syntax') ?? []
		},
		{
			text: 'Primitives',
			items: await getPagesInDirectory('primitives') ?? []
		},
		{
			text: 'Collections',
			items: await getPagesInDirectory('collections') ?? []
		},
		{
			text: 'Functions and methods',
			items: await getPagesInDirectory('functions') ?? []
		},
		{
			text: 'OOP structures',
			items: await getPagesInDirectory('oop-structures') ?? []
		},
		{
			text: 'Other OOP concepts',
			items: await getPagesInDirectory('oop-concepts') ?? []
		},
		{
			text: 'Miscellany',
			items: await getPagesInDirectory('misc') ?? []
		},
	]);
}
