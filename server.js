const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Digital Udann MCP Server Running");
});

app.get("/sse", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  res.write(`data: MCP Server Connected\n\n`);

  setInterval(() => {
    res.write(`data: heartbeat\n\n`);
  }, 5000);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
