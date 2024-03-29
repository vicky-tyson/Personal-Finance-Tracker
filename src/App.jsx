import Header from "./Components/Header";
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from "./Components/Dashboard";
import { Transactions } from './Components/Transactions';
import { Budgeting } from './Components/Budgeting';
import UserForm from "./Components/UserForm";
import Welcome from "./Components/Welcome";
import Contact from "./Components/Contact";

function App(){

  function UserFormOrWelcome(){
    const USERDATA = localStorage.getItem('name');
    if(USERDATA){
      return <Welcome />;
    } else{
      return <UserForm />
    }
  }
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' Component={UserFormOrWelcome} />
        <Route path='welcome' element={<Welcome />} />
        <Route path='budgeting' element={<Budgeting />} />
        <Route path='transactions' element={<Transactions />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;