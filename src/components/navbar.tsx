
import styles from './../styles/Navbar.module.css';

const Navbar = ({changeEventListIsActive} : any) => {

    return (
        <div className={styles.container}>
           <img onClick={() => changeEventListIsActive()} src="./../../images/menu.png"/>
        </div>
    );
}

export default Navbar;