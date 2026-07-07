import { type ContentData, createContentLoader } from 'vitepress';
import { mapContentDataToMenuItems } from '../.vitepress/utils';

export default createContentLoader('oop-concepts/*.md', {
	transform(rawData: ContentData[]) {
		return mapContentDataToMenuItems(rawData);
	}
});
