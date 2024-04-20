const { request } = require('express');
const mongoose = require('mongoose');

const ExpenseSchema=new mongoose.Schema({
    title:{
        type:String,
        required: true,
        trim:true,
        maxLength:50
    },
    amount:{
        type:Number,
        required:true,
        maxLength:20,
        trim:true
    },
    type:{
        type:String,
        default:"Income"
    },
    date:{
        type:Date,
        required:true,
        trim:true,
        default:Date()
    },
    category:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:false,
        trim:true,
        maxLength:50
    }
},{timestamps:true})

module.exports=mongoose.model('Expense',ExpenseSchema)