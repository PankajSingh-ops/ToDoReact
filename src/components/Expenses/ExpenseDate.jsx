import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  const date = props.date.getDate();
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-us", { month: "long" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{date}</div>
    </div>
  );
}
