const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const axios = require("axios");
const cheerio = require("cheerio");

// const reels = require("./reels");

//middleware
const getVideo = async (url) => {
  const html = await axios.get(url);

  const $ = cheerio.load(html.data);

  const videoString = $("meta[property='og:video']").attr("content"); // IGTV
  const imgString = $("meta[property='og:image']").attr("content"); //IMG

  //   return videoString;
  if (videoString) {
    return videoString;
  }
  if (imgString) {
    return imgString;
  }
};
app.get("/getdownload", async (req, res) => {
  const studdata = await getdownload.find();
  res.send(studdata);
});

app.post("/api/download", async (req, res) => {
  console.log("API");

  try {
    const videoLink = await getVideo(req.body.url);
    console.log(videoLink);
    if (videoLink !== undefined) {
      res.json({ downloadLink: videoLink });
    } else {
      res.json({ error: "The link you have entered is invalid. " });
    }
  } catch (err) {
    res.json({
      error: "There is a problem with the link you have provided.",
    });
  }
});

// app.get('/api2',reels, async (req, res) => {
//     console.log("done");
// })

// our sever is listening on port 3001 if we're not in production
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

module.exports = app;
