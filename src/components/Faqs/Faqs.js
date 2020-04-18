import React from 'react';
import styles from './Faqs.module.css';
import { Container } from 'react-bootstrap';
import CustomAccordion from './CustomAccordion/CustomAccordion';

const Faqs = (props) => {
    const questionsAndAnswers = [
        {question: 'How do I make payment?', answer: 'Payment can be made by transfer or through your debit card or clicking on the payment link by Paystack.'},
        {question: 'How do I shop for groceries', answer: 'You can send us your shopping list through any of our channels on social media or through our phone line or the live online support on the website.'},
        {question: 'What is the delivery charge?', answer: 'The delivery charge is not fixed but varies based on location and weight of items purchased. But the delivery charge is included in the service charge.'},
        {question: 'What is the service charge?', answer: 'The service charge covers our operational cost of processing your order and the delivery fee.'}
    ]
    
    return (
        <div className={styles.Faqs}>
            <Container>
                <h2 className="font-weight-bold text-center">FAQs</h2>
                <p className="lead text-center">Let's answer your questions about us</p>
                <CustomAccordion questions={questionsAndAnswers}/>
            </Container>
        </div>
    );
}

export default Faqs;