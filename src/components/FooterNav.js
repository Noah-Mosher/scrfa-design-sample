import { Typography } from 'antd';
import React from 'react';
import styles from '../styles/FooterNav.module.scss';
import crest from '../assets/Group262.png';

const FooterNav = () => {
  return <div className={styles.FooterContainer}>
    <div className={styles.FooterTitle}>
      <Typography.Title level={4}>South Carolina</Typography.Title>
      <Typography.Title level={4}>Revenue and Fiscal Affairs Office</Typography.Title>
      <img className={styles.Crest} src={crest} alt='scrfaCrest' />
    </div>
    <div className={styles.FooterLinks}>
      <Typography.Link>Privacy Statement</Typography.Link>
      <Typography.Link>FOIA</Typography.Link>
      <Typography.Link>Disclosures and Reporting</Typography.Link>
      <Typography.Link>Report Fraud</Typography.Link>
      <Typography.Link>Accessibility</Typography.Link>
      <Typography.Link>Contact Us</Typography.Link>
    </div>
    <div className={styles.FooterInfo}>
      <div className={styles.InfoItem}>
        <Typography.Title level={4}>MAIN OFFICE</Typography.Title>
        <Typography.Text>1000 Assembly St, Rembert Dennis Building, Suite 421</Typography.Text>
        <Typography.Text>Columbia, SC 29201</Typography.Text>
      </div>
      <div className={styles.InfoItem}>
        <Typography.Title level={4}>GEODETIC SURVEY SECTION</Typography.Title>
        <Typography.Text>5 Geology Rd</Typography.Text>
        <Typography.Text>Columbia, SC 29212</Typography.Text>
      </div>
      <div className={styles.InfoItem}>
        <Typography.Title level={4}>HEALTH AND DEMOGRAPHICS DIVISION</Typography.Title>
        <Typography.Text>1000 Assembly St, Rembert Dennis Building, Suite 420</Typography.Text>
        <Typography.Text>Columbia, SC 29201</Typography.Text>
      </div>
    </div>
  </div>;
};

export default FooterNav;
