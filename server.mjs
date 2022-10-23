import { createServer } from "http";
import finalhandler from "finalhandler";
import serveStatic from "serve-static";

const PORT = process.env.PORT || 3000;

let serve = serveStatic(".");
let server = createServer((req, res) => serve(req, res, finalhandler(req, res)));

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log(`      open http://localhost:${PORT}`);
});
