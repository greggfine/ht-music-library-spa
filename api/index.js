const express = require("express"),
  app = express(),
  path = require("path"),
  Grid = require("gridfs-stream"),
  mongoose = require("mongoose"),
  Categories = require("./routes/categories");

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI);
const conn = mongoose.createConnection(process.env.MONGO_URI);
conn.once("open", () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

app.use("/categories", Categories);

app.get("/tracks/:genre", (req, res) => {
  const genreArray = req.params.genre.split("&");

  //   Based on the contents of the genreArray, for ex. ['pop', 'rock'],
  //     we are finding the documents where each subGenre array contains
  //      all or some members of genreArray
  gfs.files
    // .find({ "metadata.genre": req.params.genre })
    // .find({ "metadata.subGenres": { $all: ["rock", "electronic"] } })
    // .find({ "metadata.subGenres": { $all: genreArray } })
    .find({ "metadata.genres": { $all: genreArray } })
    .toArray((err, files) => {
      //   console.log(files);
      res.json(files);
    });
});

app.get("/tracks/search/:name", (req, res) => {
  gfs.files.find({ searchname: req.params.name }).toArray((err, files) => {
    //   gfs.files.find({ filename: req.params.name }).toArray((err, files) => {
    // console.log(files);
    res.json(files);
  });
});

app.get("/audio/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, function (err, file) {
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists",
      });
    }

    if (file.contentType === "audio/mp3") {
      var name = file.filename;
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: "Not an audio file",
      });
    }
  });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
