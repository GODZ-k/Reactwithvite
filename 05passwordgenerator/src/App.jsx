import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
const[length, setLength]=useState(8)
const[numberallowed,setNumberallowed]=useState(false)
const[charallowed,setCharallowed]=useState(false)
const[password,setPassword]=useState("")

// useRef hook
const passwordref=useRef(null)

const passwordgen = useCallback(()=>{

  let pass = ""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy"
  if (numberallowed) {
    str +="0123456789"
  }
  if (charallowed) {
    str +="!@#$%^&*(){}[]:;//><;:"
  }

for (let i=1; i<=length; i++){
  let char=Math.floor(Math.random() * str.length+1)
  pass+=str.charAt(char)
}
setPassword(pass)
} ,[length,numberallowed,charallowed,setPassword])

const copypassword=useCallback(()=>{
  passwordref.current?.select()
  passwordref.current?.setSelectionRange(0,5)
window.navigator.clipboard.writeText(password)
},[password])
useEffect(()=>{
  passwordgen()
},[length,numberallowed,charallowed,passwordgen])
  return (
<>
<div className=" h-screen w-full bg-black text-white flex justify-center items-center">
<div className="bg-gray-900 h-40 w-[50%] rounded-xl flex flex-col justify-arround gap-5 ">
  <div>
<input type="text" value={password} className=" w-[90%] p-2 m-2 rounded-l text-black "
placeholder='password' ref={passwordref} readOnly/>
<button className='bg-red-400 p-2' onClick={copypassword}> copy</button>
  </div>
  <div className=' flex m-2 justify-between'>
  <div>
    <input type="range"
    min={6} max={100}
    value={length} className=' cursor-pointer'
    onChange={(e) => {setLength(e.target.value)}} />
   <label htmlFor="" className='px-2'>Length: ({length})</label>
  </div>
  <div>
    <input type="checkbox"
    min={6} max={100}
    defaultChecked={numberallowed} className=' cursor-pointer'
    onChange={()=>{setNumberallowed((prev) => !prev)}} />
   <label htmlFor="" className='px-2'>Number</label>
  </div>
  <div>
    <input type="checkbox"
    min={6} max={100}
    defaultChecked={charallowed} className=' cursor-pointer'
    onChange={()=>{setCharallowed((prev) => !prev)}} />
   <label htmlFor="" className='px-2'>Character</label>
  </div>

  </div>
</div>

</div>
</>
  )
}

export default App
