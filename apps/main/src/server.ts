import express from "express";
import pino from "pino";
import { createId } from "./utils";

const logger = pino({ "timestamp": pino.stdTimeFunctions.isoTime });
const app = express();
const MAIN_HUB_PORT = process.env.RAZUBERRI_MAIN_HUB_PORT ? Number(process.env.RAZUBERRI_MAIN_HUB_PORT) : 5556;
const servers = new Map<string, number | null>();

app.use(express.json());

app.post("/api/ping", (req, res) => {
    const { id } = req.body;
    if (!id) return res.status(400).json({ message: "Missing id." });

    logger.info(`Ping received from ${id}.`);
    if (!servers.has(id)) return res.status(400).json({ message: "Invalid id." });
    servers.set(id, Date.now());
    return res.status(200).json({ message: "Pong!" });
});

app.post("/api/register", (req, res) => {
    const id = createId("server");
    servers.set(id, null);
    logger.info(`Server registered with id ${id} from ${req.ip}.`);
    return res.status(200).json({ id });
});

app.get("/api/servers", (req, res) => {
    return res.status(200).json({ servers: [...servers.entries()] });
});

app.listen(MAIN_HUB_PORT, () => {
    logger.info("Main server hub started.");
})