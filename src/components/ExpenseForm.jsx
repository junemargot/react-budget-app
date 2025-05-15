import "./ExpenseForm.css";
import { MdSend } from 'react-icons/md';

const ExpenseForm = ({ handleCharge, charge, handleAmount, amount, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-center'>
        <div className='form-group'>
          <label htmlFor='charge'>지출항목</label>
          <input 
            type='text'
            className='form-control' 
            id='charge' 
            name='charge'
            value={charge}
            placeholder='예) 따릉이' 
            onChange={handleCharge}  
          />
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>비용</label>
          <input 
            type='number' 
            className='form-control' 
            id='amount' 
            name='amount' 
            value={amount}
            placeholder='예) 3000' 
            onChange={handleAmount}
          />
        </div>
      </div>
      <div className="btn-container">
        <button type='submit' className='btn'>저장<MdSend className='btn-icon' /></button>
      </div>
    </form>
  )
}

export default ExpenseForm
