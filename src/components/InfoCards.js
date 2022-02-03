import { Card, Image, Typography } from 'antd';
import React from 'react';
import styles from '../styles/InfoCards.module.scss';

import data from '../assets/Data-Research-Icon.svg';
import geography from '../assets/Geography-Icon.svg';
import legislative from '../assets/Legislative-Icon.svg';
import programs from '../assets/Programs-Icon.svg';

const InfoCards = () => {
  return <div className={styles.CardsContainer}>
    <Card>
      <div className={styles.ImageHolder}>
        <Image src={data}/>
      </div>
      <Typography.Text>DATA & RESEARCH</Typography.Text>
    </Card>
    <Card>
      <div className={styles.ImageHolder}>
        <Image src={geography}/>
      </div>
      <Typography.Text>GEOPGRAPHY & MAPPING</Typography.Text>
    </Card>
    <Card>
      <div className={styles.ImageHolder}>
        <Image src={programs}/>
      </div>
      <Typography.Text className={styles.CardLabel}>PROGRAMS & SERVICES</Typography.Text>
    </Card>
    <Card>
      <div className={styles.ImageHolder}>
        <Image src={legislative}/>
      </div>
      <Typography.Text>LEGISLATIVE FISCAL IMPACTS</Typography.Text>
    </Card>
  </div>;
};

export default InfoCards;
