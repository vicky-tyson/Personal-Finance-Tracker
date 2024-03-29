import React, { useState, useEffect } from 'react'

export const Dashboard = () => {

  const [income, setIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [averageTransactionAmount, setAverageTransactionAmount] = useState(0);
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [expenseCategories, setExpenseCategories] = useState({});

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const totalIncome = localStorage.getItem('income');
    let totalExpenseAmount = 0;
    let transactionsCount = 0;
    let expenseCategoriesCount = {};

    storedTransactions.forEach(transaction => {
      if (transaction.amount > 0) {
        totalExpenseAmount += parseFloat(transaction.amount);
        transactionsCount++;
        const category = transaction.category || 'Uncategorized';
        expenseCategoriesCount[category] = (expenseCategoriesCount[category] || 0) + 1;
      }
    });

    setIncome(totalIncome);
    setTotalExpenses(totalExpenseAmount);
    setTotalTransactions(storedTransactions.length);
    setAverageTransactionAmount(totalTransactions ? totalExpenses / totalTransactions : 0);
    setRecentTransactions(storedTransactions.slice(0, 5));
    setExpenseCategories(expenseCategoriesCount);
  }, []);

  return (
    <div>
        <section className="bg-gray-100 dark:bg-gray-800 h-screen p-3 sm:p-5 flex items-center">
      <div className="mx-auto max-w-screen-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-white-700 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Income</h2>
            <p className="text-green-600 dark:text-green-400 text-2xl font-semibold">{income}</p>
          </div>
          <div className="bg-white dark:bg-white-700 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Total Expenses</h2>
            <p className="text-red-600 dark:text-red-400 text-2xl font-semibold">{Math.abs(totalExpenses).toFixed(2)}</p>
          </div>
          <div className="bg-white dark:bg-white-700 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Total Transactions</h2>
            <p className="text-gray-600 dark:text-black-400 text-2xl font-semibold">{totalTransactions}</p>
          </div>
          <div className="bg-white dark:bg-white-700 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Average Transaction Amount</h2>
            <p className="text-gray-600 dark:text-black-400 text-2xl font-semibold">{averageTransactionAmount.toFixed(2)}</p>
          </div>
          <div className="bg-white dark:bg-white-700 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            <ul className="text-black-600 dark:text-black-600 font-bold">
              {recentTransactions.map((transaction, index) => (
                <li key={index} className="mb-2">
                  {transaction.category} - {transaction.amount}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-white-700 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Expense Categories</h2>
            <ul className="text-black-600 dark:text-black-800 font-bold">
              {recentTransactions.map((transaction, index) => (
                <li key={index} className="mb-2">
                  {transaction.category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
