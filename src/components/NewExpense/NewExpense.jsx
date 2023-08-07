import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const getExpensehandler = (userExpense) => {
    props.onSaveExpense(userExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm getExpense={getExpensehandler} />
    </div>
  );
}
