import React from 'react';
import styles from './SocialIcons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcons = (props) => (
    <div className={styles.SocialIcons}>
        <a href="https://twitter.com"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
        <a href="https://twitter.com"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
        <a href="https://twitter.com"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
        {/* <a href="https://twitter.com"><FontAwesomeIcon icon={['fab', 'whatsapp']} /></a> */}
    </div>
);

export default SocialIcons;