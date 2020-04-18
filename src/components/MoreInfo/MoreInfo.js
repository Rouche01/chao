import React from 'react';
import styles from './MoreInfo.module.css';
import { Container} from 'react-bootstrap';
import Steps from './Steps/Steps';


const MoreInfo = (props) => (
    <div className={styles.MoreInfo}>
        <Container>
            {/* <h3>4 interactive courses in 1 app that teaches you</h3>
            <p>We are a cutting edge retail technology company that provides you all the tools to build, We are a cutting edge retail technology company that provides you all the tools to build.We are a cutting edge retail technology company that provides you all the tools to build.</p> */}
            <h2>Make your order in 3 quick and easy steps</h2>
            <Steps />
        </Container>
    </div>
)

export default MoreInfo;