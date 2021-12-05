const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");


// send that data on to the database
router.post("/", async (req, res) => {
  const client = await pool.connect();


  // truth time I don't understand everything happening here
  // I understand the SQL query.
  // much copy/paste
  try {
    const { feeling, understanding, support, comments } = req.body;
    await client.query("BEGIN");
    const feedbackInsertResults = await client.query(
      `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
      VALUES ($1, $2, $3, $4)
      RETURNING id;`,
      [feeling, understanding, support, comments]
    );
    const feedbackId = feedbackInsertResults.rows[0].id;
    await client.query("COMMIT");
    res.sendStatus(201);
  } catch (error) {
    await client.query("ROLLBACK");
    console.log("Error POST /feedback", error);
    res.sendStatus(500);
  } finally {
    client.release();
  }
});

module.exports = router;
