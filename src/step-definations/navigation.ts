import {
    Given, When
} from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";
import { PageId } from "../env/global";
import { currentPathMatcesPageId } from "../support/navigation-behaviour";
import { navigateToPage } from "../support/navigation-behaviour";
import { waitFor } from "../support/wait-for-behaviour";

Given('I am on the {string} page', async function (this: ScenarioWorld, pageId: PageId) {

    const {
        screen: { driver },
        globalConfig
    } = this;

    console.log(`I am on ${pageId}`);

    await navigateToPage(driver, pageId, globalConfig);
    //await driver.get("https://hub.testingtalks.com.au/"); 

    //const pageSource = driver.getPageSource();
    await waitFor(() => currentPathMatcesPageId(driver, pageId, globalConfig));
}
);

When('I redirected to the {string} page', async function (this: ScenarioWorld, pageId: PageId) {

    const {
        screen: { driver },
        globalConfig
    } = this;

    console.log(`I am redirected to ${pageId} page`);

    await waitFor(() => currentPathMatcesPageId(driver, pageId, globalConfig));


}
);
