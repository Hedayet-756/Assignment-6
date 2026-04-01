
import './App.css'
import Navbar from './Components/navbar'
import Banner from './Components/Banner'
import Advertise from './Components/Advertise'
import DigitalTools from './Components/DigitalTools'
import { useEffect, useState } from 'react'




// const fetchProduct = async()=> {
//   const res = await fetch("./data.json");
//   return res.json();
// }

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {fetch('/data.json').then(res => res.json()).then(data => setProducts(data))
  .catch(err => console.log("Data load error:", err));},[]);

  const [prices, setPrices] = useState(0);


  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Advertise></Advertise>
    <div className='m-10'>
      <DigitalTools products={products} setProducts={setProducts} prices={prices} setPrices={setPrices} ></DigitalTools>
    </div>

    
    </>
  )
}

export default App
