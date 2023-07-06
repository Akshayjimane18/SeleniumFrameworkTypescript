export type PageId = string;
export type ElementKey = string;
export type ElementLocator = string;
export type ExpectedElementText = string;
export type PageElementMapping = Record<PageId, Record<ElementKey, ElementLocator>>;
export type PagesConfig = Record<PageId, Record<string, string>>;
export type HostConfig = Record<string, string>;
export type GlobalVariables = { [key: string]: string }

export type GlobalConfig = {
    hostConfig: HostConfig;
    pagesConfig: PagesConfig;
    pageElementsMapping:PageElementMapping;
}
