import './output.css';
import './index.css';
import './App.css';
import './components/Expenses/ExpenseItem.css'
import {Expenses} from "./components/Expenses/Expenses";

function App() {



    const data = [{
        id:'001',
        title:'mazda',
        amount:'$456.96',
        date:new Date(2024, 7 , 8),


    },{
        id:'002',
        title:'Benz',
        amount:'$524.36',
        date:new Date(2024, 3 , 8),


    },{
        id:'003',
        title:'BMW',
        amount:'$668.6',
        date:new Date(2024, 1 , 8),


    }]

  return (
    <div className="App">

        <Expenses items={data}/>


    </div>
  );
}

export default App;
