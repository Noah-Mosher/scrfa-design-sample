import { Col, Typography } from 'antd';
import React from 'react';
import styles from '../styles/PopularLinksAndServPanel.module.scss';

const PopularLinksAndServPanel = () => {
  return <div className={styles.LinksContainer}>
    <Typography.Title level={2}>POPULAR SERVICES AND LINKS</Typography.Title>
    <div className={styles.pageBreak} />
    <div className={styles.links}>
      <Col span={8}>
        <Typography.Link>Overview and History of the South Carolina State Budget</Typography.Link>
        <Typography.Link>State Employer Contribution Trends 2022</Typography.Link>
        <Typography.Link>Executive Budget Office Requests</Typography.Link>
      </Col>
      <Col span={8}>
        <Typography.Link>Overview and History of the South Carolina State Budget</Typography.Link>
        <Typography.Link>Employer Revenue Disclosures F.Y 2021</Typography.Link>
        <Typography.Link>New Web Developer Roles in South Carolina</Typography.Link>
      </Col>
      <Col span={8}>
        <Typography.Link>Myrtle Beach Tourism Sales Tax Exemption Form</Typography.Link>
        <Typography.Link>Appropriation Bills and Acts</Typography.Link>
        <Typography.Link>S.C Elects Portland Web Works for All Future State Sponsored Applications</Typography.Link>
      </Col>
    </div>
  </div>;
};

export default PopularLinksAndServPanel;
