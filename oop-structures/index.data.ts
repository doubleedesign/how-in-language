import { type ContentData, createContentLoader } from 'vitepress';
import { mapContentDataToMenuItems } from '../.vitepress/utils';

export default createContentLoader('oop-structures/*.md', {
	transform(rawData: ContentData[]) {
		return mapContentDataToMenuItems(rawData);
	}
});
