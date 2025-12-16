const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.get("/", (_req, res) => {
  res.json({
    service: "gitops-devops-pipeline-app",
    status: "ok",
    commit: process.env.APP_COMMIT || "unknown"
  });
});

app.get("/healthz", (_req, res) => res.status(200).send("ok"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
