import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Counter from './components/Country/Counter';



function App() {
  return (
    <div className="App">
      
      <Counter />
      
     
    </div>
  );
}

function GetCountry(){
  const [countrys,setCountry]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>setCountry(data))
  },[])
  return (<div>
    {countrys.map(country=><Countries name={country.name} comment={country.body}></Countries>)}
    <h1>hello</h1>
  </div> )
}
function Countries(props){
    return(<div>
        <h6>name:{props.name}</h6>
        <p>Comment:{props.comment}</p>
        <img  src="" alt="" srcset="" />
    </div>)
}

export default App;
