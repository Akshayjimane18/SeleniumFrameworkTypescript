import {
    Before,
    After
} from "@cucumber/cucumber";
import { Builder } from 'selenium-webdriver';

Before(

    async function () {

        const driver = new Builder()
            .forBrowser("chrome").build();

        await driver.manage().window().maximize();

        global.myDriver = driver;
    }
)

After(
    async function () {

        await global.myDriver.quit();

    }
)


