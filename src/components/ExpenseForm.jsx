import "./ExpenseForm.css";
import { MdSend } from 'react-icons/md';

const ExpenseForm = () => {
  return (
    <form action="">
      <div className='form-center'>
        <div className='form-group'>
          <label htmlFor='charge'>지출항목</label>
          <input type='text' className='form-control' id='charge' name='charge' placeholder='예) 따릉이' />
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>비용</label>
          <input type='text' className='form-control' id='amount' name='amount' placeholder='예) 3000' />
        </div>
      </div>
      <div className="btn-container">
        <button type='submit' className='btn'>저장<MdSend className='btn-icon' /></button>
      </div>
    </form>
  )
}

export default ExpenseForm
