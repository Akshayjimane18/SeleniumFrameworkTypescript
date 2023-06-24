import {
    Given
} from "@cucumber/cucumber";
import { ScenarioWorld } from "../setup/world";

Given('I am on the {string} page', async function (this:ScenarioWorld,pageId:string) {

        const {
            screen: {driver}
        } = this;

        await driver.get("https://hub.testingtalks.com.au/");


        console.log(`I am on ${pageId}`);

        //const pageSource = driver.getPageSource();

    }
);