import React, { Component } from 'react';
import styles from './CustomAccordion.module.css';
import { Card, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

class CustomAccordion extends Component {
    state = {
        accordionToggle: false
    }

    onAccordionToggle = () => {
        console.log('toggle working');
        this.setState({
            accordionToggle: !this.state.accordionToggle
        }, () => console.log(this.state.accordionToggle))
    }

    render () {
        const accordionList = this.props.questions.map((accordion, idx) => {
            return <Card className={styles.Card}>
                <Accordion.Toggle onClick={this.onAccordionToggle} className={styles.Question} as={Card.Header}
                eventKey = {idx}>
                    <div className={styles.IconContainer}>
                        <FontAwesomeIcon className={styles.Icon} icon={faAngleRight} />
                    </div>
                    {accordion.question}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey = {idx}>
                    <Card.Body>{accordion.answer}</Card.Body>
                </Accordion.Collapse>
            </Card>
        })

        return (
            <Accordion className={styles.Accordion}>
                {accordionList}
            </Accordion>
        );
    }
} 

export default CustomAccordion;