const allQuotes = require("../quotes");

const getQuotes = (req, res) => {
  try {
    res.status(200).send({
      status: 200,
      message: "Quotes fetched successfully",
      quotes: allQuotes,
      length:allQuotes.length
    });
  } catch (error) {
    res.status(500).send({
      error: "An error occurred while fetching quotes",
    });
  }
};

getQuotesbyCaetgory = (req,res)=>{
    try {
      const category = req.params.category;
      const filteredQuotes = allQuotes.filter((quote) => quote.category === category);
      res.status(200).send({
        status: 200,
        message: `Quotes fetched for category ${category}`,
        quotes: filteredQuotes,
      });
    } catch (error) {
      res.status(500).send({
        error: "An error occurred while fetching quotes for the given category",
      });
    }
}


getQuotesbyAuthor = (req,res)=>{
    try {
      const author = req.params.author;
      const filteredQuotes = allQuotes.filter((quote) => quote.author === author);
      res.status(200).send({
        status: 200,
        message: `Quotes fetched for author ${author}`,
        quotes: filteredQuotes,
      });
    } catch (error) {
      res.status(500).send({
        error: "An error occurred while fetching quotes for the given author",
      });
    }
}

const getRandomQuote = (req, res) => {
    try {
      const randomIndex = Math.floor(Math.random() * allQuotes.length);
      const randomQuote = allQuotes[randomIndex];
      res.status(200).send({
        status: 200,
        message: "Random quote fetched successfully",
        quote: randomQuote,
      });
    } catch (error) {
      res.status(500).send({
        error: "An error occurred while fetching the quote",
      });
    }
  };



module.exports = { getQuotes, getQuotesbyCaetgory, getQuotesbyAuthor, getRandomQuote };
