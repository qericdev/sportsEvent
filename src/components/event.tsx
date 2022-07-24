import Market from './market';
import {useState, useEffect, FC} from 'react';
import styles from './../styles/Event.module.css';

interface EventType {
    id: string; 
    name: string; 
    markets: MarketType[],
    optionsSelected?:any
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

const Event : FC<EventType> = ({id, name, markets, optionsSelected}) => {
    const [data, setData] = useState<MarketType[]>([]);
    const [selectedPrice, setSelectedPrice] = useState<number>();
    const [selectedName, setSelectedName] = useState<string>();

    useEffect(() => {
        setData(markets);
    },[markets])

    useEffect(() => {
        optionsSelected(selectedName, selectedPrice); 
    },[selectedPrice, selectedName])

    return (
        <div className={styles.container}>
            <p>{name}</p>
            {data.map(market => <Market key={market.id} id={market.id} name={market.name} selections={market.selections} optionsSelected={(name : string, price: number) => {setSelectedPrice(price); setSelectedName(name)}}/>)}
        </div>
    );
}

export default Event;
