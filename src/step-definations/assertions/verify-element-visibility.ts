import { Then } from "@cucumber/cucumber";
import { expect } from 'chai';
import { By, until } from 'selenium-webdriver';
import { ScenarioWorld } from "../setup/world";
import { waitFor } from "../../support/wait-for-behaviour";
import {
    ElementKey,
    ExpectedElementText
} from "../../env/global";
import { getElementLocator } from "../../support/web-element-helper";
import { elemetnDisplayed, getElementText } from "../../support/html-behaviour";

Then('the {string} should be displayed', async function (this: ScenarioWorld, elementKey: ElementKey) {

    const {
        screen: { driver },
        globalVariables,
        globalConfig
    } = this;

    console.log(`the {$elementKey} should be displayed`);

    const elementIdentifier = await getElementLocator(driver, elementKey, globalVariables, globalConfig);

    const element = await driver.findElement(By.css(elementIdentifier));

    await waitFor(async () => {
        const isElementVisible = await elemetnDisplayed(driver, elementIdentifier);
        return isElementVisible
    })

});