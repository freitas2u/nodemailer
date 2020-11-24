const express = require("express");
const routes = require("./routes/routes");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log("***Back-end started on port 3333***");
});

//https://hero-nodemailer.herokuapp.com/
