import '../Expenses/ExpenseItem.css'
import {ExpenseDate} from "./ExpenseDate";
import {Card} from "../UI/Card";

export function ExpenseItem(props ){
    return (
        <Card className="expense-item">
<ExpenseDate date={props.date}/>
            <div></div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div class="expense-item__price">{props.amount}</div>
            </div>
</Card>
    );
}
