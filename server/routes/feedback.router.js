const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post("/", (req, res) => {
  const queryString = `
     INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
     VALUES ($1,$2,$3,$4);
    `;

  pool
    .query(queryString, [
      req.body.feeling,
      req.body.understanding,
      req.body.supported,
      req.body.comments,
    ])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`Err: ${err}`);
      res.sendStatus(500);
    });
});

module.exports = router;
