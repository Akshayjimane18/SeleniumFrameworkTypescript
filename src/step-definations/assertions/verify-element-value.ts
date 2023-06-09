import { Then } from "@cucumber/cucumber";
import { By, until } from 'selenium-webdriver';
import { ScenarioWorld } from "../setup/world";
import { waitFor } from "../../support/wait-for-behaviour";
import {
    ElementKey,
    ExpectedElementText
} from "../../env/global";
import { getElementLocator } from "../../support/web-element-helper";
import { elemetnDisplayed, getElementText } from "../../support/html-behaviour";

Then('the {string} should contain the text {string}',
    async function (this: ScenarioWorld, elementKey: ElementKey, expectedElementText: ExpectedElementText) {

        const {
            screen: { driver },
            globalConfig
        } = this;

        console.log(`The ${elementKey} should contain the text ${expectedElementText}`);

        const elementIdentifier = await getElementLocator(driver, elementKey, globalConfig);

        const element = await driver.findElement(By.css(elementIdentifier));

        const elementText = await element.getAttribute('innerText');

        //expect(elementText).to.contain(expectedElementText);
        await waitFor(async() => {
            const elementText = await getElementText(driver, elementIdentifier)
            return elementText?.includes(expectedElementText)
        })
    });

