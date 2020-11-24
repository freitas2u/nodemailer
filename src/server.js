const express = require("express");
const routes = require("./routes/routes");

const app = express();

const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`***Back-end started on port ${PORT}***`);
});

//https://hero-nodemailer.herokuapp.com/
