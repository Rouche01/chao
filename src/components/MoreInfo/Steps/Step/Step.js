import React from 'react';
import styles from './Step.module.css';

const Step = (props) => (
    <div className={styles.Step}>
        <img src={props.source} alt="Step One" />
        <h4>{props.title}</h4>
        <p>{props.children}</p>
    </div>
);

export default Step;