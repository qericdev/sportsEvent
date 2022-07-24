import {useState, useEffect, FC} from 'react';
import styles from './../styles/Betslip.module.css';


const Betslip = ({changeEventListIsActive, selectedName, selectedPrice} : any) => {

    return (
        <div className={styles.container}>
            <img onClick={()=> changeEventListIsActive()} src="./../../images/close.png"/>
            <p>{selectedName}</p>
            <p>{selectedPrice}</p>
        </div>
    );
}

export default Betslip;