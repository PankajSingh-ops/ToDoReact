import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";

export default function Expenses(props) {
  const[filteredYear, setFilteredYear]=useState("2023")
  const handleFilteredYear=(selectedYear)=>{
    console.log(selectedYear);
    setFilteredYear(selectedYear)
  }
  const filterDate=props.items.filter((expense)=>{
     return expense.date.getFullYear().toString()===filteredYear;
  })
  return (
    <Card className="expenses">
      <ExpensesFilter onFilteredYear ={handleFilteredYear}/>
      {filterDate.length == 0 && <p className="notfound">No expenses found</p>}
      {filterDate.length > 0 && 
      filterDate.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        );
      })
      }
      
    </Card>
  );
}
