import dotenv from 'dotenv';
import { env } from './env/parseEnv';

dotenv.config();

const BROWSER_ARGUMENTS = process.env.BROWSER_ARUGMENTS;
const UI_AUTOMATION_BROWSER = process.env.UI_AUTOMATION_BROWSER;


const common = './src/features/**/*.feature \
                --require-module ts-node/register \
                --require ./src/step-definations/**/**/*.ts \
                -f json:./reports/report.json \
                --format progress-bar';

const dev = `${common} --tags '@dev'`;
const smoke = `${common} --tags '@smoke'`;
const regression = `${common} --tags '@regression'`;

console.log(`🥒✨🥒✨🥒✨🥒✨🥒✨🥒✨🥒✨`);

export { dev, smoke, regression }