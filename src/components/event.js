import Market from './market';

const Event = ({id, name, markets}) => {

    return (
        <div>
            {name}
            {markets.map(market => <Market key={market.id} id={market.id} name={market.name} selections={market.selections}/>)}
        </div>
    );
}

export default Event;
