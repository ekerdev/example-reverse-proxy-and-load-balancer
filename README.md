To perform what will be demonstrated in this example, you'll need these tools:

- Node 22: https://nodejs.org/pt/blog/release/v22.11.0
- Caddy: https://caddyserver.com/docs/install

Open 3 terminals in the project folder:

First terminal, start the Caddy server:

> caddy run

Second terminal, start Node servers:

> node start_workers.js

Third terminal, use autocannon to create parallel requests:

> npx --yes autocannon http://localhost:8080