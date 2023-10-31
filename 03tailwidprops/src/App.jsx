import './App.css'
import {Cards,Detail} from './components/Cards'
function App() {
  // let myData = {
  //   userName:'Tanmay',
  //   age:'21,'
  // }
  // let array=[
  //   1,2,3,4,5,6,7,8,9,10,11
  // ]
  let productdata={
    productname:"Nature",
    productprice:200,
    stock:"out of stock",
  }

  return (
<>

<Detail productobj={productdata}/>
<Cards userName="Tanmay" btnText="Click me" /> { /* someObj={myData}  and aomeobj={array} */}
<Cards userName="Amit" btnText="Click me"/>

</>

  )
  }

export default App


