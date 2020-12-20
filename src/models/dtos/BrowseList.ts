import type { BrowseListEntry } from "./BrowseListEntry";

export interface BrowseList {
    navigation: {
        lists: {
            availableListViews: string[];
            items: BrowseListEntry[];
        }[];
        prev: {
            uri: 'radio';
        };
    };
}
