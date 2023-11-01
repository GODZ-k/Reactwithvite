import { useState } from 'react'
// import './App.css'

function App() {
let [color,setColor] = useState("red")

  return (
    <>
    <div className=' flex justify-center items-end py-10 w-screen h-screen overflow-hidden' style={{backgroundColor: color}}>
    <div className=' h-20 rounded-xl w-50 bg-black px-5  '>
      <div className=' flex j items-center h-full'>
      <div className='  rounded-sm bg-white inline-block p-2 mx-3 text-black cursor-pointer select-none ' onClick={() => setColor("white")}>White</div>
      <div className='  rounded-sm bg-green-400 inline-block p-2 mx-3 text-black select-none cursor-pointer'onClick={() => setColor("green")}>green</div>
      <div className='  rounded-sm bg-red-800 inline-block p-2 mx-3 text-black select-none cursor-pointer'onClick={() => setColor("red")}>red</div>
      <div className='  rounded-sm bg-blue-500 inline-block p-2 mx-3 text-black select-none cursor-pointer'onClick={() => setColor("blue")}>blue</div>
      <div className='  rounded-sm bg-black inline-block p-2 mx-3 text-white select-none cursor-pointer'onClick={() => setColor("black")}>Black</div>
      <div className='  rounded-sm bg-gray-700 inline-block p-2 mx-3 text-black select-none cursor-pointer'onClick={() => setColor("gray")}>gray</div>
      <div className='  rounded-sm bg-violet-400 inline-block p-2 mx-3 text-black select-none  cursor-pointer ' onClick={() => setColor("violet")}>violet</div>
      <div className='  rounded-sm bg-yellow-500 inline-block p-2 mx-3 text-black select-none cursor-pointer'onClick={() => setColor("yellow")}>yellow</div>
      <div className='  rounded-sm bg-orange-500 inline-block p-2 mx-3 text-black select-none cursor-pointer'onClick={() => setColor("orange")}>orange</div>

      </div>
      </div>
      </div>
    </>
  )
}

export default App
