import React, { Component } from 'react'
import "./ExpenseForm.css";
export class ExpenseForm extends Component {
  render() {
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
        <button type='submit'>저장</button>
      </form>
    )
  }
}

export default ExpenseForm
