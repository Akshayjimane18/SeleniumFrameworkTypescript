import { WebDriver, until } from "selenium-webdriver";
import { GlobalConfig, PageId } from "../env/global";

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
