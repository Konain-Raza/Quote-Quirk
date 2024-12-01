const express = require("express");
const router = express.Router();
const {
  getQuotes,
  getQuotesbyCaetgory,
  getQuotesbyAuthor,
  getRandomQuote,
} = require("../controllers/controllers");

router.get("/quotes", getQuotes);
router.get("/", getRandomQuote);

router.get("/inspire/:category", getQuotesbyCaetgory);
router.get("/wisdom/:author", getQuotesbyAuthor);

module.exports = router;
