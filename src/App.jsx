import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, charge: "따릉이 대여비", amount: 2000 },
    { id: 2, charge: "교통비", amount: 1600 },
    { id: 3, charge: "식비", amount: 9000 }
  ]);

  const handleDelete = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !== id);
    console.log(newExpenses);
    setExpenses(newExpenses);
  }
  return(
    <main className="main-container">
      <h1>Budget Calculator</h1>
      <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
        <ExpenseForm />
      </div>
      <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem' }}>
        <ExpenseList 
          initialExpenses={expenses} 
          handleDelete={handleDelete}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'end', marginTop: '1rem' }}>
        <p style={{ fontSize: '2rem' }}>
          총 지출:
          <span>원</span>
        </p>
      </div>
    </main>
  )
}

export default App;