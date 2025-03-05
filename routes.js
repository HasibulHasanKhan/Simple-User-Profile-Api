const fs = require("fs");
const path = require("path");
const {
  sendJsonResponse,
  sendHtmlResponse,
  sendImageResponse,
  sendNotFound,
} = require("./utils");

function handleRequest(req, res) {
  if (req.url === "/user") {
    // sending json data .
    const user = {
      name: "Hasibul Hasan.",
      age: 22,
      email: "hasibulhasankhan@gmail.com",
    };
    sendJsonResponse(res, user);
  } else if (req.url === "/profile") {
    // serving an HTML page.
    const filePath = path.join(__dirname, "views", "profile.html");
    sendHtmlResponse(res, filePath);
  } else if (req.url === "/profile/pic") {
    // serving an image.
    // const imageName = req.url.split("/profile/pic/")[1];
    const imgPath = path.join(__dirname, "assets", "doctor.png");
    sendImageResponse(res, imgPath);
  } else {
    sendNotFound(res);
  }
}

module.exports = handleRequest;
