import Selection from './selection';
import {useState, useEffect, FC} from 'react';
import styles from './../styles/Market.module.css';

interface MarketType {
  id: string; 
  name: string; 
  selections: SelectionType[];
  optionsSelected?: any
}

interface SelectionType {
  id : string;
  name: string;
  price: number;
  
}

const Market : FC<MarketType> = ({id, name, selections, optionsSelected}) => {
 
  const [data, setData] = useState<SelectionType[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<number>();
  const [selectedName, setSelectedName] = useState<string>();
  
    useEffect(() => {
      setData(selections);
    },[selections])

    useEffect(() => {
      optionsSelected(selectedName, selectedPrice); 
    },[selectedPrice, selectedName])

  return (
    <div className={styles.container}>
      <p>{name}</p>
      <div>{data.map((selection : SelectionType) => <Selection key={selection.id} id={selection.id} name={selection.name} price={selection.price} optionsSelected={(name : string, price: number) => {setSelectedPrice(price); setSelectedName(name)}}/>)}</div>
    </div>
  );
}

export default Market;