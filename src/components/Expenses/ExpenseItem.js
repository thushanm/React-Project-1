import '../Expenses/ExpenseItem.css'
import {ExpenseDate} from "./ExpenseDate";
import {Card} from "../UI/Card";
import React,{useState} from "react";

export function ExpenseItem(props ){
const [title,setTitle] =useState(props.title)


    const click =()=>{
    setTitle("clicked")


console.log("Clicked OKy")

    }
    return (
        <Card className="expense-item">
<ExpenseDate date={props.date}/>
            <div></div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={click}>ChangeTitle</button>
</Card>
    );
}
