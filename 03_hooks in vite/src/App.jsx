import { useState } from 'react'// useState is a hook
import './App.css'

//we use vite it is just  abundler nothing else , ye bundle karke dia lal the testa nd such 

// normal html, js me we have to change everywhere using document.getElemnet karke 
//but in react same variabe is re rendered everywhere once changed 
//hence more good is once thing does many things


function App() {
  // let counter = 15;

  // const increase = () =>{
  //   counter = counter+1;
  //   console.log(counter);
  // }

  // const decrease = () =>{
  //   counter = counter+1;
  //   console.log(counter);
  // }

  //this way the counter is updated but UI rendering is not done . 
  // Either use hooks or this.state se 

  let [counter,setCounter] = useState(15);

  const increase = () =>{
    setCounter(counter+1)
    console.log(counter); // see here it takes time somehow it shows the previous answer
  }

  const decrease = () =>{
    setCounter(counter-1)
    console.log(counter);
  }

  //this way the UI knows the state is changed , hence it re renders that part 

  return (
    <>
      <h1>Count is {counter}</h1>
      <button onClick={increase}>Increase</button>
      {/* pass the reference never call the function */}
      <button onClick={decrease}>Decrease</button>
    </>
  )
  
}

export default App
