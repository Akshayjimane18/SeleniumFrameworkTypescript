import { WebDriver, until } from "selenium-webdriver";
import { GlobalConfig, PageId } from "../env/global";
import { Driver } from "selenium-webdriver/chrome";

export const navigateToPage = async (
    driver: WebDriver,
    pageId: PageId,
    {
        pagesConfig, hostConfig
    }: GlobalConfig
): Promise<void> => {


    const {
        UI_AUTOMATION_HOST: hostName = 'localhost'
    } = process.env

    const hostPath = hostConfig[`${hostName}`];
    console.log("hosts path", hostPath);
    const url = new URL(hostPath);
    const pagesConfigItem = pagesConfig[pageId];

    url.pathname = pagesConfigItem.route;
    console.log("pages routs ", url.pathname);

    await driver.get(url.href);



}

export const currentPathMatcesPageId = async (
    driver: WebDriver,
    pageId: PageId,
    globalConfig: GlobalConfig
): Promise<boolean> => {

    const currentURL: string = await driver.getCurrentUrl();
    const { pathname: currentPath } = new URL(currentURL);

    return pathMatchesPageId(currentPath, pageId, globalConfig)
}

const pathMatchesPageId = (
    path: string,
    pageId: PageId,
    { pagesConfig }: GlobalConfig
): boolean => {

    const pageRegexString = pagesConfig[pageId].regex;
    const pageRegex = new RegExp(pageRegexString);

    return pageRegex.test(path);

}

export const getCurrentPageId = async (
    driver: WebDriver,
    globalConfig: GlobalConfig
): Promise<PageId> => {

    const { pagesConfig } = globalConfig;
    console.log("pagesConfig ", pagesConfig);

    const currentURL: string = await driver.getCurrentUrl();
    const pagesConfigPageIds = Object.keys(pagesConfig);

    const { pathname: currentPath } = new URL(currentURL);
    console.log("currentPath ", currentPath)

    const currentPageId = pagesConfigPageIds.find(pageId =>
        pathMatchesPageId(currentPath, pageId, globalConfig)
    )

    console.log("currentPageId ", currentPageId);

    if (!currentPageId) {

        throw Error(
            `🧨 Failed to get page name from current route ${currentPath}, \
            possible pages: ${JSON.stringify(pagesConfig)}`
        )
    }

    return currentPageId;
}