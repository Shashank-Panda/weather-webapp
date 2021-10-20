const { response } = require("express");
const express = require("express");
const needle = require("needle");
const router = express.Router();

const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY = process.env.API_KEY;

router.use("/", (req, res) => {
  
  if (req.method === "GET") {
    try {
      const { q } = req.query;
      needle("get", `${API_BASE_URL}?q=${q}&appid=${API_KEY}`)
        .then((response) => response.body)
        .then((data) => {
          res.status(200).json(data);
          
        });
    } catch (error) {
      console.log(error);
      res.status(500);
    }

  } else {
    res.status(400);
  }
});

module.exports = router;
