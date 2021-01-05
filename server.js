const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const userList = require("./routes/api/userList");

const app = express();


app.use(express.json());
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());


// db info
const db = require("./config/keys").mongoURI;
mongoose.set('useFindAndModify', false);

// mongodb connection
mongoose.connect(db,
    {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Routes
app.use("/api/users", users);
app.use("/api/userlist", userList);

const port = 5000; 

app.listen(port, () => console.log(`Server up and running on port ${port} !`));



