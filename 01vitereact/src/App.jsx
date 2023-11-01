// import { useState } from 'react'
import { useState } from 'react'

import './App.css'

function App() {
  //  let [counter,setcounterer] = useState(0)
  let[counter,setcounter]=useState(0)

  //  let counter=0
   let valueup =() => {
   console.log("valueup", counter)
   if (counter < 20 ){
    // counter += 1
    // setcounter( counter => counter+1)
    // setcounter( counter => counter+1)
    // setcounter( counter => counter+1)
    // setcounter( counter => counter+1)
    // setcounter( counter => counter+1)
    setcounter(counter+1)

   }
     }
   let valuedown =() => {
    if (counter >0){
    counter -= 1
   setcounter (counter)
    }
   }
  return (
<>
<span>counter{counter}</span>
<br />
<button onClick={valueup}>Up {counter}</button>
    <button onClick={valuedown}>Down {counter}</button>
</>


  )
}

export default App
