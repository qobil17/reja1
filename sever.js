const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://ibrohimovqobilbek5:qqT8Web6N80tNtz4@cluster0.apfdw.mongodb.net/reja1";

mongodb.connect(
  connectionString,
  { userNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      console.log(client);
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is runing seccessfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
