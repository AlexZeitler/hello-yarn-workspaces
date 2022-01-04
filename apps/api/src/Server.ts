import app from "./App";

const server = app.listen(3000, () => {
  console.log("server is listening");
});

process.on("SIGINT", () => {
  console.log("server is stopping...");

  server.close();
});
