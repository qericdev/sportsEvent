import Event from './components/event';
import Navbar from './components/navbar';
import Betslip from './components/betslip';
import {useState, useEffect} from 'react';
import styles from './App.module.css';

interface EventType {
  id: string; 
  name: string; 
  markets: MarketType[]
}

interface MarketType {
  id: string; 
  name: string; 
  selections: SelectionType[]
}

interface SelectionType {
  id : string;
  name: string;
  price: number
}

const App = () => {

  const [data, setData] = useState<EventType[]>([]);
  const [eventListIsActive, SetEventListIsActive] = useState(true);
  const [selectedPrice, setSelectedPrice] = useState<number>();
  const [selectedName, setSelectedName] = useState<string>();

  useEffect(() => {
    fetch('http://www.mocky.io/v2/59f08692310000b4130e9f71')
    .then(res => res.json())
    .then(data => setData(data))
  },[])

  return (
    <div className={styles.container}>
      <div className={eventListIsActive ? styles.selected : styles.unselected}>

        <Navbar changeEventListIsActive={() => SetEventListIsActive(prevEventListIsActive => !prevEventListIsActive)}/>

        {data.filter(event => event.markets.length !== 0).map(event => <Event key={event.id} id={event.id} name={event.name} markets={event.markets} optionsSelected={(name : string, price: number) => {setSelectedPrice(price); setSelectedName(name)}}/>)}

      </div>
    
      <div className={eventListIsActive ? styles.hidden : styles.betslipSelected}>
        <Betslip changeEventListIsActive={() => SetEventListIsActive(prevEventListIsActive => !prevEventListIsActive)} selectedPrice={selectedPrice} selectedName={selectedName}/>
      </div>

    </div>
  );
}

export default App;
