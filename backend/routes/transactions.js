const { addExpense, getExpense, deleteExpense } = require('../controllers/expenses.js');
const {addIncome, getIncomes, deleteIncomes}=require('../controllers/income.js');
const fetchUser = require('../middleware/fetchUser.js');
const router=require('express').Router();


router.post('/add-income',fetchUser,addIncome)
        .get('/get-incomes',fetchUser,getIncomes)
        .delete('/delete-income/:id',fetchUser,deleteIncomes) 
        .post('/add-expense',fetchUser,addExpense)
        .get('/get-expenses',fetchUser,getExpense)
        .delete('/delete-expense/:id',fetchUser,deleteExpense)

module.exports=router