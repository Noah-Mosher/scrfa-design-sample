
import React from 'react';
import styles from '../styles/Buttons.module.scss';

const DefaultButton = ({icon, content}) => {
  return (
    <div className={styles.NavButtonContainer}>
      <button className={styles.DefaultButton}type='primary'>
        {icon}
        <h5 style={{fontSize: '15px', color:'White'}}>Menu</h5>
      </button>
    </div>
  );
};

export default DefaultButton;