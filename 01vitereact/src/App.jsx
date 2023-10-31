import { useState } from 'react'

import './App.css'

function App() {
   let [count,setCounter] = useState(0)

  //  let count=0
   let valueup =() => {
   console.log("valueup", count)
   if (count < 20 ){
    count += 1
    setCounter(count)
   }
     }
   let valuedown =() => {
    if (count >0){
    count -= 1
   setCounter (count)
    }
   }
  return (
<>
<span>Count{count}</span>
<br />
<button onClick={valueup}>Up {count}</button>
    <button onClick={valuedown}>Down {count}</button>
</>


  )
}

export default App
