import {Then} from "@cucumber/cucumber";
import {expect} from 'chai';
import {By, until} from 'selenium-webdriver';
import { ScenarioWorld } from "../setup/world";

Then('the {string} should contain the text {string}',
    async function (this:ScenarioWorld,elementKey:string, expectedElementText:string) {

        const {
            screen: {driver}
        } = this;

        console.log(`The ${elementKey} should contain the text ${expectedElementText}`);

        const element = await driver.findElement(By.css("[data-id='contacts']"));

        const elementText = await element.getAttribute('innerText');

        expect(elementText).to.contain(expectedElementText);
});

Then('the {string} should be displayed', async function(this:ScenarioWorld,elementKey:string){

    const{
   screen: {driver}
    } = this;

    console.log(`the {$elementKey} should be displayed`);

    const element = await driver.findElement(By.css("[data-id='header-logo']"));

    expect(await element.isDisplayed()).to.be.true;

});