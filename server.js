const http = require("http");
const handleRequest = require("./routes");

const server = http.createServer(handleRequest);

server.listen(3000, () =>
  console.log("Server running at http://localhost:3000/")
);
