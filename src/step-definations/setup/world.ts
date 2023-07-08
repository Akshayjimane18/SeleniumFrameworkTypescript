require("chromedriver");


import {
    Builder,
    WebDriver
} from 'selenium-webdriver';
import {
    World,
    IWorldOptions,
    setWorldConstructor
} from '@cucumber/cucumber';
import { env } from '../../env/parseEnv';
import { GlobalConfig, GlobalVariables } from '../../env/global';
import {stringIsOfOptions} from '../../support/options-helper';
import firefox from 'selenium-webdriver/firefox';
import chrome, { Options } from 'selenium-webdriver/chrome';

export type Screen = {
    driver: WebDriver
}

export class ScenarioWorld extends World {
    constructor(options: IWorldOptions){
        super(options);

        this.globalConfig = options.parameters as GlobalConfig;

    }

    globalConfig : GlobalConfig;

    screen!: Screen;

    async init(): Promise < Screen > {
        const browser = await this.newBrowser()
        const browserBuilder = await this.browserBuilder(browser)
        const driver = browserBuilder.build();
        await driver.manage().window().maximize();

        this.screen = { driver };

        return this.screen;
    }

    private newBrowser = async (): Promise<string> => {
        const automationBrowser = env('UI_AUTOMATION_BROWSER');
        const automationBrowsers = ['chrome', 'firefox', 'safari'];
        const valideAutomationBrowser = stringIsOfOptions(automationBrowser, automationBrowsers);
        return valideAutomationBrowser;
    }

    private browserBuilder = async (browser: string): Promise<Builder> => {
        console.log(`Executing on ${browser} browser 🖥️`);

        const builder = new Builder();

        switch (browser) {
            case "chrome": {
                const chromeBrowserOptions = (
                    new Options());

                chromeBrowserOptions.addArguments(
                    env('BROWSER_ARGUMENTS')
                );
                return builder.forBrowser(browser).withCapabilities(chromeBrowserOptions);
                break;
            }
            case "firefox": {

                const firefoxBrowserOptions = new firefox.Options();
                firefoxBrowserOptions.addArguments(
                    env('BROWSER_ARGUMENTS')
                );
                firefoxBrowserOptions.set("acceptInsecureCerts", true);

                return builder.forBrowser(browser).withCapabilities(firefoxBrowserOptions);
                break;
            }
            default: {
                return builder.forBrowser(browser);
                break;
            }

        }
    }
}

setWorldConstructor(ScenarioWorld);



