import './output.css';
import './index.css';
import './App.css';
import './components/Expense.css'
import {ExpenseItem} from "./components/ExpenseItem";

function App() {



    const data = [{
        id:'001',
        title:'mazda',
        amount:'$456.96',
        date:'2024.01.31',


    },{
        id:'002',
        title:'Benz',
        amount:'$524.36',
        date:'2024.01.31',


    },{
        id:'003',
        title:'BMW',
        amount:'$668.6',
        date:'2024.01.31',


    }]

  return (
    <div className="App">


        <ExpenseItem  title={data[0].title} amount={data[0].amount} date={data[0].date}></ExpenseItem>
        <ExpenseItem  title={data[1].title} amount={data[1].amount} date={data[1].date}></ExpenseItem>
        <ExpenseItem  title={data[2].title} amount={data[2].amount} date={data[2].date}></ExpenseItem>



    </div>
  );
}

export default App;
