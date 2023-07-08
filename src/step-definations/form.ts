import { Then } from "@cucumber/cucumber"
import { waitFor, waitForSelector } from "../support/wait-for-behaviour"
import { getElementLocator } from "../support/web-element-helper"
import { ScenarioWorld } from "./setup/world"
import { ElementKey, InputValue } from "../env/global"
import { inputElementValue, selectElementValue } from "../support/html-behaviour"
import { WebDriver } from "selenium-webdriver"

Then('I fill in the {string} input with {string}', async function (this: ScenarioWorld, elementKey: ElementKey,
    inputValue: InputValue) {

    const {
        screen: { driver },
        globalConfig
    } = this;

    console.log(`I fill in the ${elementKey} input with ${inputValue}`);

    const elementIdentifier = await getElementLocator(driver, elementKey, globalConfig);

    await waitFor(async () => {
        const elementStable = await waitForSelector(driver, elementIdentifier);
        if (elementStable) {
            await inputElementValue(driver, elementIdentifier, inputValue);
        }

        return elementStable;
    });


});

Then('I select the {string} option from the {string}', async function (this: ScenarioWorld, option: string, elementKey: ElementKey) {

    const {
        screen: { driver },
        globalConfig
    } = this;

    console.log(`I fill in the ${option} input with ${elementKey}`);

    const elementIdentifier = await getElementLocator(driver, elementKey, globalConfig);

    await waitFor(async () => {
        const elementStable = await waitForSelector(driver, elementIdentifier);

        if(elementStable) {
            await selectElementValue(driver,elementIdentifier,option);
        }

        return elementStable;
    });



});