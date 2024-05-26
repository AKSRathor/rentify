const mongoose = require('mongoose');
const { Schema } = mongoose

const requestSchema = new Schema({
    key:{
        type:mongoose.Schema.Types.ObjectId, //same as foreign key
        ref: 'user'
    },
    from:{
        type:String,
        require:true
    },
    to:{
        type:String,
    },
    postid:{
        type:String
    }
  });

  module.exports = mongoose.model("aksrent", requestSchema)