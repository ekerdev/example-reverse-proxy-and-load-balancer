import { workerData } from "node:worker_threads";
import http from "node:http";

const sleep = async (ms) => {
    return new Promise(res => setTimeout(res, ms));
}

const server = http.createServer(async (req, res) => {
    await sleep(2000);

    const data = `Hello, this is the same API in different instance ${workerData.instanceId}`

    console.info(data);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data,
    }));
});

console.info(`Server is running on port ${workerData.port}`)
server.listen(workerData.port);