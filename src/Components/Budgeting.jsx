import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Budgeting = () => {

const [month, setMonth] = useState("");  
const [isediting, setEditing] = useState(false);
let [initialIncome, setIncome] = useState(0);
const USERINCOME = localStorage.getItem('income');


function handleIncomeChange(event){
   setIncome(event.target.value);
}

function handleEditSave(){
   setEditing(editing => !editing);
   localStorage.setItem('income', initialIncome);
}

function handleMonth(e){
   setMonth(e.target.value);
}

function submitMonth(){
  localStorage.setItem('month', month);
}

let incomeOfUser = <span className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{USERINCOME}</span>

if (isediting) {
  incomeOfUser = <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleIncomeChange} required />
}


  return (
    <div className="bg-gray-900 m-0 p-0">
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight mb-9 leading-none md:text-5xl xl:text-4xl dark:text-white">Budgeting</h1>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Make Your Budeget
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Income</label>
                    <div className="flex">
                      {incomeOfUser}
                      <button type="button" className="text-red-700 ml-3 mt-1 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" onClick={handleEditSave}>{isediting ? "Save" : "Edit"}</button>
                    </div>
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter the month you are Budgeting for</label>
                      <input type="text" placeholder="month for budgeting" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleMonth}/>
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={submitMonth}><Link to='/transactions'>Go to add Transactions</Link></button>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}
