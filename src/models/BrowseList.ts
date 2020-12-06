import type { Entry } from "./Entry";

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
