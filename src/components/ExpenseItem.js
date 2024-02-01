import './Expense.css'
import {ExpenseDate} from "./ExpenseDate";

export function ExpenseItem(props ){





    return (

        <div className="expense-item">

<ExpenseDate date={props.date}/>

            <div></div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div class="expense-item__price">{props.amount}</div>
            </div>



</div>
    );

}
