import { useState } from 'react';
import './App.css'
import FormContainer from "./components/FormContainer";
import CounterContainer from "./components/CounterContainer";
import Newyear from "./assets/fireworks.jpg";

function App() {
  const [titulo, setTitulo] = useState()
  const [data, setData] = useState()
  const [image, setImage] = useState(Newyear)
  const [color, setColor] = useState()
  const [form, setForm] = useState('')


  return (
    <div className="App" style={{backgroundImage: `url(${image})`}}>
      {form && <CounterContainer titulo={titulo} data={data} color={color} setForm={setForm}/>}
      {form === '' && <FormContainer setTitulo={setTitulo} setData={setData} setImage={setImage} setColor={setColor} setForm={setForm}/>}     
    </div>
  );
}

export default App;
