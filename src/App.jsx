import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";

const App = () => {
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);
  const [alert, setAlert] = useState({ show:false });

  const [expenses, setExpenses] = useState([
    { id: 1, charge: "따릉이 대여비", amount: 2000 },
    { id: 2, charge: "교통비", amount: 1600 },
    { id: 3, charge: "식비", amount: 9000 }
  ]);

  const handleCharge = (e) => {
    console.log(e.target.value);
    setCharge(e.target.value);
  }

  const handleAmount = (e) => {
    console.log(e.target.valueAsNumber);
    setAmount(e.target.valueAsNumber);
  }

  const handleDelete = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !== id);
    console.log(newExpenses);
    setExpenses(newExpenses);
    handleAlert({ type: 'danger', text: '아이템이 삭제되었습니다.' });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(charge !== "" && amount > 0) {
      const newExpense = { id: crypto.randomUUID(), charge, amount };

      // 불변성을 지켜주기 위해서 새로운 expenses 생성
      const newExpenses = [...expenses, newExpense];
      setExpenses(newExpenses);
      setCharge("");
      setAmount(0);
      handleAlert({ type: "success", text: "아이템이 추가되었습니다."});

    } else {
      console.log("error");
      handleAlert({ type: "danger", text: 'charge는 amount는 0보다 커야 합니다.' });
    }
  }

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 5000);
  }

  return(
    <main className="main-container">
      {alert.show ? <Alert type={alert.type} text={alert.text} /> : null }
      <h1>Budget Calculator</h1>
      <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
        <ExpenseForm 
          handleCharge={handleCharge}
          charge={charge}
          handleAmount={handleAmount}
          amount={amount}
          handleSubmit={handleSubmit}
        />
      </div>
      <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
        <ExpenseList 
          initialExpenses={expenses} 
          handleDelete={handleDelete}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'end', marginTop: '1rem' }}>
        <p style={{ fontSize: '2rem' }}>
          Total Price: ₩
          <span>
            {expenses.reduce((acc, curr) => {
              return (acc += curr.amount);
            }, 0)}
            원</span>
        </p>
      </div>
    </main>
  )
}

export default App;