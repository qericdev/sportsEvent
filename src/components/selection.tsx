import {useState, useEffect, FC} from 'react';
import styles from './../styles/Selection.module.css';

interface SelectionType {
  id : string;
  name: string;
  price: number
  optionsSelected?: any;
}

const Selection  = ({id, name, price, optionsSelected} : SelectionType ) => {

  const [data, setData] = useState<SelectionType>();
  const [isSelected, setIsSelected] = useState(false);
  
    useEffect(() => {
      setData({id, name, price});
    },[id, name, price])

  return (
    <div onClick={() => {optionsSelected(name, price); setIsSelected(prevIsSelected =>!prevIsSelected)}} className={isSelected ? styles.containerSelected : styles.container}>
        <div>{name}</div>
        <div>{price}</div>
    </div>
  );
}

export default Selection;