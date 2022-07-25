import Selection from './market';
import { useState, useEffect } from 'react';

const Market = ({id, name, selections}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(prevData => [...prevData, ...selections])
    },[selections])

  return (
    <div>
        {name}
        {data.map(selection=> <Selection key={data.id} id={data.id} name={data.name} price={data.price}/>)}
    </div>
  );
}

export default Market;