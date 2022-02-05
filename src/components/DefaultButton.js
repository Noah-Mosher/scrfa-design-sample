
import React from 'react';
import styles from '../styles/Buttons.module.scss';

const DefaultButton = ({icon, content, onClick}) => {
  return (
    <div className={styles.NavButtonContainer}>
      <button className={styles.DefaultButton}type='primary' onClick={onClick}>
        {icon}
        <h5 style={{fontSize: '15px', color:'White'}} >{content}</h5>
      </button>
    </div>
  );
};

export default DefaultButton;