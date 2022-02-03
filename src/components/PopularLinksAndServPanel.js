import { Typography } from 'antd';
import React from 'react';
import styles from '../styles/PopularLinksAndServPanel.module.scss';

const PopularLinksAndServPanel = () => {
  return <div className={styles.LinksContainer}>
    <Typography.Title level={2}>POPULAR SERVICES AND LINKS</Typography.Title>
    <div className={styles.pageBreak} />
    <div className={styles.links}>
      <Typography.Link>Overview and History of the South Carolina State Budget</Typography.Link>
    </div>
  </div>;
};

export default PopularLinksAndServPanel;
