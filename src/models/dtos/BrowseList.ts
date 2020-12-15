import type { Entry } from "./BrowseListEntry";

export interface BrowseList {
    navigation: {
        lists: {
            availableListViews: string[];
            items: Entry[];
        }[];
        prev: {
            uri: 'radio';
        };
    };
}
