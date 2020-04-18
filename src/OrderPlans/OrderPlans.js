import React from 'react';
import styles from './OrderPlans.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Plan from './Plan/Plan';
import marketBg from '../assets/market-bg.jpg';

const OrderPlans = (props) => (
    <div className={styles.OrderPlans}>
        <Container>
            <Row>
                <Col>
                    <Plan title="Card Title" backgroundUrl={marketBg} action="Start Shopping" button="true"
                    overlayColor="rgba(0, 0, 0, 0.9)">
                        Let’s help you shop fresh foodstuffs/groceries from the market or at your favorite supermarket
                    </Plan>
                </Col>
                <Col>
                    <Plan title="In App Purchase" overlayColor="rgba(0, 0, 0, 0.9)">
                        Let’s help you shop fresh foodstuffs/groceries from the market or at your favorite supermarket
                    </Plan>
                </Col>
            </Row>
        </Container>
    </div>
);

export default OrderPlans;