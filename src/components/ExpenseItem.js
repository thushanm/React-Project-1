import './Expense.css'

export function ExpenseItem(props ){





    return (

        <div className="expense-item">



            <div>{props.date}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div class="expense-item__price">{props.amount}</div>
            </div>



</div>
    );

}
