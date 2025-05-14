import React, { Component } from 'react'
import "./ExpenseItem.css";
import { MdDelete, MdEdit } from 'react-icons/md';

export class ExpenseItem extends Component {
  render() {
    return (
      <li className='item'>
        <div className='info'>
          <span className="expense">자격증 응시료</span>
          <span className="amount"> 44,000원</span>
        </div>
        <div>
          <button className='edit-btn'><MdEdit /></button>
          <button className='clear-btn'><MdDelete /></button>
        </div>
      </li>
    )
  }
}

export default ExpenseItem
