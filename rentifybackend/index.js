const connectToMongoose = require("./db");
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());



connectToMongoose();

const port = 5000;

app.use(express.json());
  
app.use('/api/auth', require('./routes/auth'));
app.use('/api/post', require('./routes/post'));

app.listen(port, () => {
  console.log(`Successfully connected at: ${port}`);
});