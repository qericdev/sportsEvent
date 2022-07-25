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
  group?: string;
}

const Market : FC<MarketType> = ({id, name, selections, optionsSelected}) => {
 
  const [data, setData] = useState<SelectionType[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<number>();
  const [selectedName, setSelectedName] = useState<string>();
  const [isSelected, setIsSelected] = useState<boolean>();
  const [selectedData, setSelectedData] = useState<object[]>([]);
  
    useEffect(() => {
      setData(selections);
    },[selections])

    useEffect(() => {
      //Adding Data
      if(isSelected)
      {
        const tempSelectedData = {name: selectedName, price: selectedPrice, isSelected: isSelected};
        setSelectedData((prevSelectedData)=> [...prevSelectedData, tempSelectedData]);
      }
      else
      {
      //Removing Data
        const tempSelectedData = selectedData.filter((data:any) => data.selectedName === selectedName);
        if(tempSelectedData)
        {
          setSelectedData(selectedData.filter((data:any) => data.selectedName !== selectedName));
        }
      }
      
      optionsSelected(selectedName, selectedPrice); 
    },[selectedPrice, selectedName, isSelected])

  return (
    <div className={styles.container}>
      <p>{name}</p>
      <div>{data.map((selection : SelectionType) => <Selection key={selection.id} id={selection.id} name={selection.name} price={selection.price} group={name} optionsSelected={(name : string, price: number, isSelected: boolean) => {setSelectedPrice(price); setSelectedName(name); setIsSelected(isSelected)}}/>)}</div>
    </div>
  );
}

export default Market;