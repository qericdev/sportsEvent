import {useState, useEffect} from 'react';
import styles from './../styles/Selection.module.css';

interface SelectionType {
  id : string;
  name: string;
  price: number
  group?: string;
  optionsSelected?: any;
}

const Selection  = ({id, name, price, group, optionsSelected} : SelectionType ) => {

  const [data, setData] = useState<SelectionType>();
  const [isSelected, setIsSelected] = useState(false);
  
    useEffect(() => {
      setData({id, name, price, group});
    },[id, name, price, group])
  /* optionsSelected is a function that send data to the parent market.tsx*/
  /*setIsSelected is a function that allows change the state of the button (turn green if is selected or transparent if it's not selected) */

  return (

    <div className={styles.container}>
      <label className={styles.unselectedLabel}>
        <input type="radio" name={group} value={name}/>
        <i>{name} <br/> {price}</i>
      </label>
    </div>
  );
}

export default Selection;