import React, { useState, useEffect } from 'react';

export const Transactions = () => {

const USERINCOME = localStorage.getItem('income');
const forMonth = localStorage.getItem('month').toUpperCase();

  const [transactions, setTransactions] = useState(() => {
    const storedTransactions = localStorage.getItem('transactions');
    return storedTransactions ? JSON.parse(storedTransactions) : [];
  });
  const [showPopup, setShowPopup] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    transactionNo: '',
    category: '',
    amount: '',
    description: ''
  });

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleAddTransaction = () => {
    setTransactions([...transactions, newTransaction]);
    setNewTransaction({
      transactionNo: '',
      category: '',
      amount: '',
      description: ''
    });
    setShowPopup(false);
  };

  const handleDeleteTransaction = (index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions);
  };

  return (
    <div>
        <section class="bg-gray-50 dark:bg-gray-900 h-screen p-3 sm:p-5">
    <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div class="w-full  md:w-1/2">
                    <div class="flex items-center text-xl">
                        <div className="flex w-full text-white font-bold">
                            <p>Your Income : {USERINCOME}</p>
                        </div>
                        <div className="flex w-full text-white font-bold text-lg"> 
                            <p>Budgeting for Month : {forMonth}</p>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <button type="button" class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800" onClick={() => setShowPopup(true)}>
                        + Add Transactions
                    </button>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr >
                            <th scope="col" class="px-4 py-3">Transaction No</th>
                            <th scope="col" class="px-4 py-3">Category</th>
                            <th scope="col" class="px-4 py-3">Amount</th>
                            <th scope="col" class="px-4 py-3">Description</th>
                            <th scope="col" className="px-4 py-3">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                     {transactions.map((transaction, index) => (
                  <tr key={index} className="border-b dark:border-gray-700">
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{transaction.transactionNo}</td>
                    <td className="px-4 py-3">{transaction.category}</td>
                    <td className="px-4 py-3">{transaction.amount}</td>
                    <td className="px-4 py-3">{transaction.description}</td>
                      <button onClick={() => handleDeleteTransaction(index)} className="flex items-center justify-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-primary- mt-1">Delete</button>
                  </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-white">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-4 w-2/3">
            <h2 className="text-lg font-bold mb-4">Add Transaction</h2>
            <form  className="space-y-4 md:space-y-6" onSubmit={(e) => { e.preventDefault(); handleAddTransaction(); }}>
              <label>
                Transaction No:
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="transactionNo"
                  value={newTransaction.transactionNo}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Category:
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="category"
                  value={newTransaction.category}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Amount:
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="number"
                  name="amount"
                  value={newTransaction.amount}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Description:
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="description"
                  value={newTransaction.description}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <div className="flex justify-end mt-4">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Add</button>
                <button type="button" onClick={() => setShowPopup(false)} className="bg-gray-400 text-white px-4 py-2 rounded-md">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
  </section>
</div>
  )
}
