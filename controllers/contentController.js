const express = require('express');
const fs =require('fs');

module.exports = {
  descriptionPage: async (req, res) => {
    const contentId = req.params.page;
    try {
      fs.readFile(
        "./public/content/description/" + contentId + ".md",
        "utf8",
        (err, data) => {
          if (err) {
            return res.status(500).send({ error: "not vaild content" });
          } else {
            let content = {};
            content.title = contentId;
            content.content = data;
            res.send(content);
          }
        }
      );
    } catch {
      res.status(500).send("Internal Server Error");
    }
  },

  codePage: async (req, res) => {
    const contentId = req.params.page;
    try {
      fs.readFile(
        "./public/content/python_problem/" + contentId + ".md",
        "utf8",
        (err, data) => {
          if (err) {
            return res.status(500).send({ error: "not vaild content" });
          } else {
            let content = {};
            content.title = contentId;
            content.content = data;
            res.send(content);
          }
        }
      );
    } catch {
      res.status(500).send("Internal Server Error");
    }
  },
};
