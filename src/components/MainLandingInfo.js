import { Button, Input, Typography } from 'antd';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from '../styles/MainLandingInfo.module.scss';

const MainLandingInfo = ({siteSearchValue,setSiteSearchValue}) => {

  const handleChange = ((e) => {
    setSiteSearchValue(
      e.target.value
    );
  });

  return <div className={styles.MainLandingInfoContainer}>
    <div className={styles.LandingText}>
      <Typography.Text>Providing insightful research, analysis, and resources</Typography.Text>
      <Typography.Text>to facilitate informed policy decisions and</Typography.Text> 
      <Typography.Text>administration of services</Typography.Text>
      <div className={styles.SearchContainer}>
        <Input placeholder='Search rfa.sc.gov' value={siteSearchValue} onSearch={handleChange}></Input>
        <Button type='search' icon={<AiOutlineSearch />}>SEARCH</Button>
      </div>
    </div>

  </div>;
};

export default MainLandingInfo;
