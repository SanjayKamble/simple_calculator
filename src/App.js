
import './App.css';
import { useState } from 'react';

function App() {


  // whatever is in the display
  const [calc, setCalc] = useState("");

  const [result, setResult] = useState("");


  const ops = ['+','-','*','/','.'];

  // function to calculate
const updateCalc = value =>{

  if(
      (ops.includes(value) && calc==='') ||//first operand will check whether there is only operator and second operand will check if there is nothing typed
      (ops.includes(value) && ops.includes(calc.slice(-1)))// last character should not be operator 
  ){
    return ;
  }
  
  setCalc(calc + value);

  if(!ops.includes(value)){
    setResult(eval(calc+value).toString());
  }
}


// functionn to add buttons in dom 
  function showButtons() {

    const digits = [];
    for (let i = 9; i > 0; i--) {

      digits.push(<button onClick={()=>updateCalc(i.toString())} key={i}>{i}</button>);

    }

    return digits;
  }


const calculate = ()=>{
  setCalc(eval(calc).toString());
  setResult("");
}


  // function to clear text in display
  const deleteLast =()=>{
    if(calc===''){
      return;
    }
     const val = calc.slice(0,-1);
     setCalc(val);
      
    
  
  }
  return (
    <div className="app">


      <div className="calculator">

        {/* display section */}
        <div className="display">
          {result ? <span> {result}</span> : ''}&nbsp;
          {calc||'0'}
        </div>

        {/* operators */}

        <div className="operators">

          <button onClick={deleteLast}>C</button>
          <button onClick={()=>updateCalc('+')}>+</button>
          <button onClick={()=>updateCalc('-')}>-</button>
          <button onClick={()=>updateCalc('*')}>x</button>
          <button onClick={()=>updateCalc('/')}>/</button>

        </div>

        {/* function for buttons */}
        <div className="digits">


          {showButtons()}

          <button onClick={()=>updateCalc('0')}>0</button>
          <button onClick={()=>updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>

        </div>


      </div>
    </div>
  );
}

export default App;
