import ExpenseItem from './ExpenseItem';
import "./ExpenseList.css";
import { MdDelete } from 'react-icons/md';

const ExpenseList = ({ initialExpenses, handleDelete, handleEdit }) => {
  return (
    <>
      <ul className="list">
        {initialExpenses.map(expense => {
          return (
            <ExpenseItem 
              expense={expense} 
              key={expense.id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          )
        })}
      </ul>
      <div className="btn-container">
        <button className="btn">
          목록 지우기
          <MdDelete className='btn-icon' />
        </button>
      </div>
    </>
  )
}

export default ExpenseList;