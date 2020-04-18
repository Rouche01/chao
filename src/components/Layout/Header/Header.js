import React from 'react';
import styles from './Header.module.css';
import Button from 'react-bootstrap/Button';
import logo from "../../../assets/chao-logo.png";

const Header = (props) => (
    <div className={styles.Header}>
        {/* <h4>Chao!</h4> */}
        <img className={styles.Logo} src={logo} alt="Chao! logo" />
        <div>
            <Button className={styles.Button} size="lg" variant="success">Start Shopping</Button>
        </div>
    </div>
);

export default Header;