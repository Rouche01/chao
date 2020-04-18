import React from 'react';
import styles from './Hero.module.css';
import Container from 'react-bootstrap/Container'

const Hero = (props) => (
    <div className={styles.Hero}>
        <div className={styles.BackgroundImage}></div>
        <Container>
            <h1>Welcome to safe and easy grocery shopping</h1>
            <p className="lead">We are a cutting edge retail technology company that provides you all the tools to build, We are a cutting edge retail technology company that provides you all the tools to build.</p>
        </Container>
    </div>
);

export default Hero;