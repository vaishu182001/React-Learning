import logo from './logo.svg';
import './App.css';
import ClickButton from './ClickButton';
import FormSubmit from './FormSubmit';
import Counter from './Counter';
import Counterwithstate from './Counterwithstate';
import Toggler from './Toggler';
import IntermediateState from './IntermediateState';
import Players from './Players';
import Playersusingobj from './Playersusingobj';
import Passingarrst from './passingarrst';
import ArrayDeleteExample from './ArrayDeleteExample';
import ArrayModifyExample from './ArrayModifyExample';
import ParentComponent from './ParentComponent';
function App() {
  return (
    <div className="App">
      
       {/* The example for events */}
     <ClickButton/>
       {/* The example for events and form */}
       <FormSubmit/>
        {/* The example for state */}
        <p>Understanding how the num is incremented</p>
        <Counter/>
        <p>Understanding how the num is incremented with state</p>
        <br></br>
        <Counterwithstate/>
        <br></br>
        {/* This is a simple toggler an example for states*/}
        <Toggler/>

        <br/>
         {/* This is a simple example of a countet when working with intermediate  states*/}
         <h3>The intermediate state example</h3>
         <IntermediateState/>
         <br/>
         <h3>The Player Game increase of score :</h3>
         <Players/>
         <h3>The Player Game increase of score using the object passed in the state :</h3>
         <Playersusingobj/>
         <br/>
         <p>Passing array in state example</p>
         <Passingarrst/>
         <br/>
         <p>Deleting array element  in state example</p>
         <ArrayDeleteExample/>
         <br/>
         <p>Modifying the array element  in state example</p>
         <ArrayModifyExample/>
        < br/>
         <p>PAssing functions as props</p>
         
    </div>
  );
}

export default App;
