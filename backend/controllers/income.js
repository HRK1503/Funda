const IncomeSchema = require("../models/incomeModel");

exports.addIncome=async(req,res) =>{
    const {title,amount,category,description,date}=req.body;

    const income=IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try{
        //validations
        if(!title || !amount || !category || !date){
            return res.status(400).json({message:'ALL FIELDS ARE REQUIRED'})
        }
        if(amount<=0){
            return res.status(400).json({message:"Amount must be positive"})
        }
        await income.save()
        res.status(200).json({message:"Income added successfully"})
    }
    catch(e){
        console.error(e);
        res.status(500).json({ message: "Internal Server Error" });
    }
    
}