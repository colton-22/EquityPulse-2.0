var express = require("express");
var path = require("path");
var app = express();

const PORT = process.env.PORT || 3001;

// ---------------- ADD THIS ----------------
var cors = require("cors");
app.use(cors());
// --------------------------------

// ---------------- ADD THIS ----------------
// Serve static files from the React app
if(process.env.NODE_ENV ==='production') {
app.use(express.static("client/build"));
}
// --------------------------------

// ---------------- ADD THIS ----------------
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
// --------------------------------

const mongoose = require("mongoose");
const io = require("socket.io")(PORT, {
  cors: {
    origin: "*",
  },
});

require("dotenv/config");

mongoose.connect(process.env.DB_CONNECTION, (err, db) => {
  console.log("Succesfully connected to MongoDB");

  io.on("connection", (socket) => {
    var EPdata = db.collection("info");
    var futures = db.collection("futures");
    var options = db.collection("options");

    options
      .find()
      .limit(100)
      .sort({ _id: 1 })
      .toArray((err, res) => {
        if (err) {
          throw err;
        }
        socket.emit("options", res);
      });

    EPdata.find()
      .limit(100)
      .sort({ _id: 1 })
      .toArray((err, res) => {
        if (err) {
          throw err;
        }
        socket.emit("output", res);
      });

    futures
      .find()
      .limit(100)
      .sort({ _id: 1 })
      .toArray((err, res) => {
        if (err) {
          throw err;
        }
        socket.emit("futures", res);
      });

    const changeStream = EPdata.watch();
    const FutureschangeStream = futures.watch();
    const OptionschangeStream = options.watch();

    OptionschangeStream.on("change", (next) => {
      console.log("change");

      options
        .find()
        .limit(1)
        .sort({ _id: -1 })
        .toArray((err, res) => {
          if (err) {
            throw err;
          }
          socket.emit("options", res);
        });
    });

    FutureschangeStream.on("change", (next) => {
      console.log("change");

      futures
        .find()
        .limit(1)
        .sort({ _id: -1 })
        .toArray((err, res) => {
          if (err) {
            throw err;
          }
          socket.emit("futures", res);
        });
    });

    changeStream.on("change", (next) => {
      console.log("change");

      EPdata.find()
        .limit(1)
        .sort({ _id: -1 })
        .toArray((err, res) => {
          if (err) {
            throw err;
          }
          socket.emit("output", res);
        });
    });
  });
});
