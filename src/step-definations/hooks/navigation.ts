import {
    Given
} from "@cucumber/cucumber";

Given(/^I am on the home page$/,
    async function () {

        await global.myDriver.manage().setTimeouts( { implicit: 10000 } );
        console.log("I am on the home page");

        await global.myDriver.get("https://hub.testingtalks.com.au/");
        const currentPageSource = await global.myDriver.getPageSource();
        

    }
);