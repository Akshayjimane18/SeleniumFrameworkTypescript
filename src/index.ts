import dotenv from 'dotenv';
import { env, getJsonFromFile } from './env/parseEnv';
import * as fs from "fs";
import {
    GlobalConfig,
    HostConfig,
    PagesConfig,
    PageElementMapping
} from './env/global';


dotenv.config();

const BROWSER_ARGUMENTS = process.env.BROWSER_ARUGMENTS;
const UI_AUTOMATION_BROWSER = process.env.UI_AUTOMATION_BROWSER;
const HOST_URLS_PATH = process.env.HOSTS_URL_PATH;
const PAGE_URLS_PATH = process.env.PAGE_URLS_PATH;
const PAGE_ELEMENT_PATH = process.env.PAGE_ELEMENT_PATH;

const hostConfig: HostConfig = getJsonFromFile(HOST_URLS_PATH);
console.log("hostConfig ", hostConfig);
const pagesConfig: PagesConfig = getJsonFromFile(PAGE_URLS_PATH);
console.log("pagesConfig ", pagesConfig);
const mappingFiles = fs.readdirSync(`${process.cwd()}${PAGE_ELEMENT_PATH}`);

const pageElementsMapping: PageElementMapping = mappingFiles.reduce(
    (pageElementConfigAcc, file) => {
        const key = file.replace('.json', '');
        const elementMappings = getJsonFromFile(`${PAGE_ELEMENT_PATH}${file}`);
        return { ...pageElementConfigAcc, [key]: elementMappings }
    },
    {}
);

console.log("pageElementsMappings ", pageElementsMapping);

const worldParameters: GlobalConfig = {
    hostConfig,
    pagesConfig,
    pageElementsMapping
}


const common = `./src/features/**/*.feature \
                --require-module ts-node/register \
                --require ./src/step-definations/**/**/*.ts \
                -f json:./reports/report.json \
                --world-parameters ${JSON.stringify(worldParameters)} \
                --format progress-bar`;

const dev = `${common} --tags '@dev'`;
const smoke = `${common} --tags '@smoke'`;
const regression = `${common} --tags '@regression'`;

console.log(`🥒✨🥒✨🥒✨🥒✨🥒✨🥒✨🥒✨`);

export { dev, smoke, regression }