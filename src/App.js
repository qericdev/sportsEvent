import Event from './components/event';
import {useState, useEffect} from 'react';
import './App.css';


const App = () => {

  const [data, setData] = useState([]);
 
  useEffect(() => {
    fetch('http://www.mocky.io/v2/59f08692310000b4130e9f71')
    .then(res => res.json())
    .then(data => setData(data))
  },[])

  return (
    <div className="App">
      {data.filter(event => event.markets.length !== 0).map(event => <Event key={event.id} id={event.id} name={event.name} markets={event.markets}/>)}
    </div>
  );
}

export default App;
