import { Worker } from "node:worker_threads";
import path from "node:path";

for (let i = 0; i < 5; i++) {
    const worker = new Worker(path.resolve(process.cwd(), "server.js"), {
        workerData: {
            port: 8081 + i,
            instanceId: i
        }
    });
}