const mongoose = require('mongoose');
const { Schema } = mongoose

const postSchema = new Schema({
    key:{
        type:mongoose.Schema.Types.ObjectId, //same as foreign key
        ref: 'user'
    },
    ownerName:{
        type:String,
        require:true
    },
    desc:{
        type:String,
    },
    tags:{
        type:Array,
    },
    price:{
        type:String,
    },
    address:{
        type:String,
    }
  });

  module.exports = mongoose.model("post", postSchema)