import React from 'react'

export interface IItem {
  date: string
  title: string
}

const Item = ({ date, title }: IItem): JSX.Element => {
  return (
    <div className='d-flex'>
      <span className='me-5'>{date}</span>
      <span >{title}</span>
    </div>
  )
} 

export default Item