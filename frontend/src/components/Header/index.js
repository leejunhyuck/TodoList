import React from 'react'
import './header.css'
import Moment from 'react-moment';

export default function Header(){


    let now = new Date()

    return(
        <main className="todo-list-template">
        <div className="title">
          오늘 할 일
         <div className="today">Today : <Moment format="YYYY/MM/DD">{now}</Moment></div>
        </div>
        </main>


    )


}