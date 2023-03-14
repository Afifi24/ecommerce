import Nav from "./component/Nav";
import Products from "./component/products/Products";
import {Routes,Route} from 'react-router-dom'
import Stores from "./component/Stores";
import mack from './images/mack.jpg'
import Lamp from './images/lamp.jpg'
import headphones from './images/headphones.jpg'
import Keyboard from './images/keyboard.jpg'
import kittle from './images/kittle.jpg'
import watch from './images/watch.jpg'
import book from './images/book.jpg'
import bag from './images/bag.jpg'
import { useState } from "react";
const products = [
  {id:1,name:'Macbook', description:'Running shoes.',price: 45.13,amount:1, image:mack},
  {id:2,name:'Lamp', description:'apple macbook.', price: 80.00,amount:1, image:Lamp},
  {id:3,name:'headphones', description:'apple macbook.', price: 33.98, amount:1, image:headphones},
  {id:4,name:'Keyboard', description:'apple macbook.', price: 17.77,amount:1, image:Keyboard},
  {id:5,name:'kittle', description:'apple macbook.', price: 21.50,amount:1, image:kittle},
  {id:6,name:'book', description:'apple macbook.', price: 66.34,amount:1, image:book},
  {id:7,name:'watch', description:'apple macwatch.', price: 12.03,amount:1, image:watch},
  {id:8,name:'bag', description:'apple macbag.', price: 40.56, amount:1, image:bag},
  
]
function App() {
  const [storesitem,setStoreitem] = useState([])
  const [counter,setCounter] = useState(0)
  // functions 
  // todo: addtocart
  const AddtoCart = (item)=>{
    const productItem = storesitem.find(store=>store.id===item.id)
    if(productItem){
     productItem.amount +=1
     setStoreitem([...storesitem])
    }else{
     item.amount =1
    setCounter(counter + 1)
     setStoreitem([...storesitem,item])
    }
   
  }
    // !delete
  const Delete = (item)=>{
     const deleted = storesitem.filter(ele=>ele.id !==item.id)
     setStoreitem(deleted)
     setCounter(counter - 1)
  }
    // todo: increase the amount
   const IncreaseAmount = (item)=>{
       item.amount +=1
       setStoreitem([...storesitem])    
   }

  return (
    <div className="pt-20">
      <Nav counter={counter}/>
      <Routes>
           <Route path="/" element={   <Products AddtoCart={AddtoCart} products={products}/>}/>
           <Route path="/store" element={<Stores IncreaseAmount={IncreaseAmount} Delete={Delete} storesitem={storesitem}/>}/>
      </Routes>
    </div>
  );
}

export default App;
