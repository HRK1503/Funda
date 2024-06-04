const ExpenseSchema = require("../models/expenseModel");

exports.addExpense=async(req,res) =>{
    const {title,amount,category,description,date}=req.body;

    const expense=ExpenseSchema({
        title,
        amount,
        category,
        description,
        date,
        user: req.user.id
    })

    try{
        //validations
        if(!title || !amount || !category || !date){
            return res.status(400).json({message:'ALL FIELDS ARE REQUIRED'})
        }
        if(amount<=0){
            return res.status(400).json({message:"Amount must be positive"})
        }
        await expense.save()
        res.status(200).json({message:"Expense added successfully"})
    }
    catch(e){
        console.error(e);
        res.status(500).json({ message: "Internal Server Error" });
    }
    
}


exports.getExpense=async(req,res)=>{
    try{
        const incomes=await ExpenseSchema.find({user: req.user.id}).sort({createdAt:-1})
        res.status(200).json(incomes)
    }
    catch(e){
        console.error(e);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

exports.deleteExpense=async(req,res)=>{
        const {id}=req.params;
        ExpenseSchema.findByIdAndDelete(id).then((income)=>{
            res.status(200).json({message:"Expense deleted"})
        }).catch((error)=>{
            console.error(e);
        res.status(500).json({ message: "Internal Server Error" });
        })
}