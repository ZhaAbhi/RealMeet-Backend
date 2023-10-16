const http = require("http");
const app = require("./app");

const PORT = 8000;
const server = http.createServer(app);

//starts the server
function startServer() {
  server.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`);
  });
}

startServer();
