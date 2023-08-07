import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  let DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Home Rent",
      amount: 3000,
      date: new Date(2021, 7, 14),
    },
    {
      id: "e2",
      title: "Food cost",
      amount: 4000,
      date: new Date(2022, 4, 12),
    },
    {
      id: "e3",
      title: "Bike Fuel",
      amount: 1000,
      date: new Date(2023, 5, 28),
    },
    {
      id: "e4",
      title: "Others",
      amount: 2000,
      date: new Date(2022, 6, 12),
    },
  ];
  const [expenses,setExpense]=useState(DUMMY_EXPENSES);

  const saveExpenseHandler = (expense) => {
    setExpense((prevState)=>{
      return [expense,...prevState];
    })
  };
  return (
    <div>
      <NewExpense onSaveExpense={saveExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
