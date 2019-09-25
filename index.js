const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require ('./config/database')
const app = express();
const {PORT}= require('./config/variabelEnv');
const port = PORT || 3000;
const userRouter = require("./routes/user");
const userAddress = require("./routes/address");


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.then(() => {
    console.log(`connected to database`);
  }).catch(error => {
      console.log(`error happened when to reach mongodb`)
  });

app.use("/users", userRouter);
app.use("/address", userAddress);


app.listen(port, () => console.log(`example app listening on port ${port}!`));

// yarn add dotenv cors body-parser mongoose express
// yarn add nodemon -D 
