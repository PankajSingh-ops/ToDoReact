import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props){
  // const titleChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, title: event.target.value };
  //   });
  //   console.log(userInput.title);
  // };
  // const amountChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, amount: event.target.value };
  //   });
  //   console.log(userInput.amount);
  // };
  // const dateChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, date: event.target.value };
  //   });
  //   console.log(userInput.date);
  // };

  // another method
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // const titleChangeHandler = (event) => {
  //   setTitle(event.target.value);
  //   // console.log(title);
  // };

  // const amountChangeHandler = (event) => {
  //   setAmount(event.target.value);
  //   // console.log(title);
  // };

  // const dateChangeHandler = (event) => {
  //   setDate(event.target.value);
  //   // console.log(title);
  // };

  //another method

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  //another method

  const handleChange = (field, value) => {
    if (field === "title") {
      setTitle(value);
    } else if (field === "amount") {
      setAmount(value);
    } else {
      setDate(value);
    }
    // console.log(title, amount, date);
  };

  const addExpensesHandler = (event) => {
    event.preventDefault();
    const expense = {
      title: title,
      amount: amount,
      date: new Date(date),
      id:Math.random().toString(),
    };
    // console.log(expenses);
    props.getExpense(expense);
    setTitle("");
    setDate("");
    setAmount("")
  };

  return (
    <form onSubmit={addExpensesHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(event) => {
              handleChange("title", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            value={amount}
            onChange={(event) => {
              handleChange("amount", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(event) => {
              handleChange("date", event.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
}
