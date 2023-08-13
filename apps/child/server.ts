import fetch, { Response } from "node-fetch";
import chalk from "chalk";

const INTERVAL = process.env.RAZUBERRI_INTERVAL ? Number(process.env.RAZUBERRI_INTERVAL) : 1000 * 60 * 5;
const MAIN_SERVER_URL = process.env.RAZUBERRI_MAIN_SERVER_URL ?? "http://localhost:5556";
const ID = process.env.RAZUBERRI_CHILD_ID;
if (!ID) {
    console.log(chalk.red`Missing token. Please supply as the RAZUBERRI_CHILD_ID environment variable.`);
    process.exit(1);
}

async function ping() {
    console.log("Pinging the main hub.");

    let req: Response;
    try {
        req = await fetch(MAIN_SERVER_URL + "/api/ping", {
            "method": "POST",
            "body": JSON.stringify({ id: ID }),
            "headers": {
                "Content-Type": "application/json"
            }
        })
    } catch (err) {
        console.log(chalk.red`Error making HTTP request to main hub.`);
        console.log(chalk.red((err as Error).message));
        return;
    }

    const res = await req.text();
    if (!req.ok) {
        console.log(chalk.red`Bad response from pinging the main hub.`);
        console.log(chalk.red(res));
        return;
    }

    console.log(chalk.yellow`Successfully pinged the main hub.`);
}

console.log(chalk.green`Starting child server.`);
ping();
console.log("Starting interval.");
setInterval(ping, process.env.NODE_ENV === "development" ? 1000 * 5 : INTERVAL);
console.log("Interval started.");