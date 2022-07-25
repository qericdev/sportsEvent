import styles from './../styles/Betslip.module.css';

const Betslip = ({changeEventListIsActive, selectedName, selectedPrice} : any) => {

    return (
        <div className={styles.container}>
            <img alt="Close Button"onClick={()=> changeEventListIsActive()} src="./../../images/close.png"/>
            
            <p>{selectedName}</p>
            <p>{selectedPrice}</p>
            <button>Delete</button>
        </div>
    );
}

export default Betslip;