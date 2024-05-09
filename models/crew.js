
//creaete the schema for the database
const mongoose = require('mongoose');

//declaring a variable to store the schema
const crewSchema = new mongoose.Schema({

//columns/properties/variables/conditions
    name:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    contact:{
        type:Number,
        required:true
    },

    from:{
        type:String,
        required:true
    },

    cost:{
        type:Number,
        required:true
    },

    category:{
        type:String,
        required:true
    }


});

//expose modules inorder to perform crud 
module.exports = mongoose.model('Crewdb',crewSchema)
