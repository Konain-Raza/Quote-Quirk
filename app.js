const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const Routes = require("./routes/routes");

app.use(express.json());
app.use("/", Routes);

const runServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

runServer();
