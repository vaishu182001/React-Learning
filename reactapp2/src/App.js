import logo from './logo.svg';
import './App.css';
import UserForm from './UserForm';
import FormExample from './FormExample';
import ShoppingList from './ShoppingList';
import ExampleWithUseEffect from './ExampleWithUseEffect';
function App() {
  return (
    <div className="App">
     <h1>The form rendering</h1>
     <UserForm/>
     <h3>A better form </h3>
     <br/>
     <FormExample/>
    < h3>Shopping List Form </h3>
     <br/>
     <ShoppingList/>

     <h2>Use Effect Hook Demonstration</h2>
     <br/>
     <ExampleWithUseEffect/>
    </div>
  );
}

export default App;
