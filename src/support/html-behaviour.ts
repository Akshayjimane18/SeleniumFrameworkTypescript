import { By, IWebElementId, WebDriver, WebElement } from "selenium-webdriver";
import { ElementLocator, InputValue } from "../env/global";
import { Driver } from "selenium-webdriver/chrome";

export const getElement = async (
    driver: WebDriver,
    elementIdentifier: ElementLocator
): Promise<WebElement> => {

    const element = await driver.findElement(By.css(elementIdentifier));
    return element;
}

export const getElementWithOption = async (driver: WebDriver,
    elementIdentifier: ElementLocator,
    option: string): Promise<WebElement> => {

    const element = await driver.findElement(By.css(`${elementIdentifier} > option[value=${option}]`));
    return element;
}

export const elemetnDisplayed = async (
    driver: WebDriver,
    elementIdentifier: ElementLocator
): Promise<boolean | null> => {

    try {
        await driver.findElement(By.css(elementIdentifier));
        return true;
    } catch (e) {
        return false;

    }

}

export const getElementText = async (
    driver: WebDriver,
    elementIdentifier: ElementLocator
): Promise<string | null> => {

    const element = await getElement(driver, elementIdentifier);
    const elementText = await element.getAttribute("innerText");
    return elementText;
}

export const clickElement = async (
    driver: WebDriver,
    elementIdentifier: ElementLocator): Promise<void> => {

    const element = await getElement(driver, elementIdentifier);
    await element.click();
}

export const inputElementValue = async (
    driver: WebDriver,
    elementIdentifier: ElementLocator,
    inputValue: InputValue): Promise<void> => {

    const element = await getElement(driver, elementIdentifier);
    await element.clear();
    await element.sendKeys(inputValue);

}

export const selectElementValue = async (
    driver: WebDriver,
    elementIdentifier: ElementLocator,
    option: string
): Promise<void> => {
    const element = await getElementWithOption(driver, elementIdentifier, option);
    await element.click();
}
