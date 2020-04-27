import React from 'react';
import styles from './Plan.module.css';
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const Plan = (props) => {

    const cardImage = {
        backgroundImage: 'url(' + props.backgroundUrl + ')'
    }

    const cardOverlay = {
        backgroundColor: props.overlayColor
    };

    return (
        <div className={['mb-3', styles.Plan].join(' ')} style={cardImage}>
            <div className={[styles.PlanOverlay]} style={cardOverlay}>
                <div className={styles.InnerContent}>
                    <h4>{props.title}</h4>
                    <p>{props.children}</p>
                    {props.button ? <Button className={styles.Button}>{props.action}</Button> : null}
                </div>
            </div>
        </div>
    );
}

export default Plan;