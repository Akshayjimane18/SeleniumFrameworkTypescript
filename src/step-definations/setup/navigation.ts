import {
    Given
} from "@cucumber/cucumber";
import { ScenarioWorld } from "../setup/world";
import { PageId } from "../../env/global";
import { navigateToPage } from "../../support/navigation-behaviour";

Given('I am on the {string} page', async function (this: ScenarioWorld, pageId: PageId) {

    const {
        screen: { driver },
        globalVariables,
        globalConfig
    } = this;


    globalVariables.currentScreen = pageId;
    console.log(`I am on ${pageId}`);

    await navigateToPage(driver, pageId, globalConfig)
    //await driver.get("https://hub.testingtalks.com.au/");



    //const pageSource = driver.getPageSource();

}
);