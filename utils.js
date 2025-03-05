const fs = require("fs");

function sendJsonResponse(res, data) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

function sendHtmlResponse(res, filepath) {
  fs.readFile(filepath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(data);
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

function sendImageResponse(res, imgPath) {
  fs.readFile(imgPath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error loading image");
    } else {
      res.writeHead(200, { "Content-Type": "image/png" });
      res.end(data);
    }
  });
}

function sendNotFound(res) {
  res.writeHead(404, { "Content-Type": "text/plain" });
}

module.exports = {
  sendHtmlResponse,
  sendImageResponse,
  sendJsonResponse,
  sendNotFound,
};
