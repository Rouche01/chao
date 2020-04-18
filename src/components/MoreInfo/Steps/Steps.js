import React from 'react';
import styles from './Steps.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Step from './Step/Step';

import callIcon from '../../../assets/call-illustration.png';
import deliveryIcon from '../../../assets/delivery-Illustration.png';
import paymentIcon from '../../../assets/payment-illustration.png';

const Steps = (prop) => (
    <div className={styles.Steps}>
        <Container>
            <Row>
                <Col>
                    <Step title="Chat with us" source={callIcon}>
                        We are a cutting edge retail technology company that provides
                    </Step>
                </Col>
                <Col>
                    <Step title="We Shop & Deliver" source={deliveryIcon}>
                        We are a cutting edge retail technology company that provides
                    </Step>
                </Col>
                <Col>
                    <Step title="You Make Payment" source={paymentIcon}>
                        We are a cutting edge retail technology company that provides
                    </Step>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Steps;