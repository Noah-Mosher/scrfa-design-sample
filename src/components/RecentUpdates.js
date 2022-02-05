import { Button, Typography } from 'antd';
import React from 'react';
import styles from '../styles/RecentUpdates.module.scss';

const RecentUpdates = () => {
  return <div className={styles.RecentUpdatesContainer}>

    <Typography.Title level={3}>Recent Updates</Typography.Title>
    <div className={styles.headerBorder} />
    <div className={styles.UpdateRow}>
      <Typography.Link>Local Government Finance</Typography.Link>
      <Typography.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra.</Typography.Text>
      <div className={styles.PublishedRow}>
        <Typography.Text strong>Published: </Typography.Text>
        <Typography.Text>Feb. 4th 2022</Typography.Text>
        <Typography.Text mark>Updated</Typography.Text>
      </div>
    </div>
    <div className={styles.UpdateRow}>
      <Typography.Link>Local Government Finance</Typography.Link>
      <Typography.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra.</Typography.Text>
      <div className={styles.PublishedRow}>
        <Typography.Text strong>Published: </Typography.Text>
        <Typography.Text>Feb. 4th 2022</Typography.Text>
        <Typography.Text mark>Updated</Typography.Text>
      </div>
    </div>
    <div className={styles.UpdateRow}>
      <Typography.Link>Local Government Finance</Typography.Link>
      <Typography.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra.</Typography.Text>
      <div className={styles.PublishedRow}>
        <Typography.Text strong>Published: </Typography.Text>
        <Typography.Text>Feb. 4th 2022</Typography.Text>
        <Typography.Text mark>Updated</Typography.Text>
      </div>
    </div>
    <div className={styles.UpdateRow}>
      <Typography.Link>Local Government Finance</Typography.Link>
      <Typography.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra.</Typography.Text>
      <div className={styles.PublishedRow}>
        <Typography.Text strong>Published: </Typography.Text>
        <Typography.Text>Feb. 4th 2022</Typography.Text>
        <Typography.Text mark>Updated</Typography.Text>
      </div>
    </div>
    <div className={styles.UpdateRow}>
      <Typography.Link>Local Government Finance</Typography.Link>
      <Typography.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra.</Typography.Text>
      <div className={styles.PublishedRow}>
        <Typography.Text strong>Published: </Typography.Text>
        <Typography.Text>Feb. 4th 2022</Typography.Text>
        <Typography.Text mark>Updated</Typography.Text>
      </div>
    </div>
    <div className={styles.UpdateRow}>
      <Typography.Link>Local Government Finance</Typography.Link>
      <Typography.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra.</Typography.Text>
      <div className={styles.PublishedRow}>
        <Typography.Text strong>Published: </Typography.Text>
        <Typography.Text>Feb. 4th 2022</Typography.Text>
        <Typography.Text mark>Updated</Typography.Text>
      </div>
    </div>
    <Button >VIEW MORE</Button>
  
  </div>;
};

export default RecentUpdates;
