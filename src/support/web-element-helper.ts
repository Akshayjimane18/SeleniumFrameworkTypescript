import { WebDriver, error } from "selenium-webdriver";
import { getCurrentPageId } from "./navigation-behaviour"
import {
    ElementKey,
    ElementLocator,
    GlobalConfig,
    GlobalVariables
} from '../env/global'

export const getElementLocator = async (
    driver: WebDriver,
    elementKey: ElementKey,
    globalConfig: GlobalConfig): Promise<ElementLocator> => {

    const { pageElementsMapping } = globalConfig;

    const currentPage = await getCurrentPageId(driver, globalConfig)

    const elementIdentifier = pageElementsMapping[currentPage]?.[elementKey] || pageElementsMapping.common?.[elementKey]

    if (!elementIdentifier) {
        throw Error(
            `🧨 Unable to find the ${elementKey} mapping 🧨`
        );
    }

    return elementIdentifier;

}