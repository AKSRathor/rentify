const mongoose = require('mongoose');
require('dotenv').config();

// Update the mongoURI to include the database name 'rentify'
const mongoURI = "mongodb+srv://rentify:LwuZAbIq5cK75jlC@clusterrentify.mzlteyy.mongodb.net/rentify?retryWrites=true&w=majority";

const connectToMongoose = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to MongoDB successfully.");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error);
        });
};

module.exports = connectToMongoose;