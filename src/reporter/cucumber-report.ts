import reporter, { Options } from 'cucumber-html-reporter';
import { env } from '../env/parseEnv';
import dotenv from 'dotenv'

dotenv.config();

const SCREENSHOT_PATH = process.env.SCREENSHOT_PATH;
const JSON_REPORT_FILE = process.env.JSON_REPORT_FILE;
const HTML_REPORT_FILE = process.env.HTML_REPORT_FILE;

const options: Options = {
    theme: 'bootstrap',
    jsonFile: env('JSON_REPORT_FILE'),
    output: env('HTML_REPORT_FILE'),
    screenshotsDirectory: env('SCREENSHOT_PATH'),
    storeScreenshots: true,
    reportSuiteAsScenarios: true,
    launchReport: false
}

reporter.generate(options);