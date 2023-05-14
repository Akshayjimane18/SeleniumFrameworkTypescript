import {Then} from "@cucumber/cucumber";
import {expect} from 'chai';
import {By} from 'selenium-webdriver';

Then(/^the contacts header should contain the text contacts$/,
    async function () {

            console.log("The contacts header should contain the text contacts");

        const element = await global.myDriver.findElement(By.css("[data-id='contacts']"));

        const elementText = await element.getAttribute('innerText');

        expect(elementText).to.contain("Contacts");
        });