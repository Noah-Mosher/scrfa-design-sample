import { Collapse, Typography } from 'antd';
import React from 'react';
import styles from '../styles/MainNav.module.scss';
const {Panel} = Collapse;

const MainNav = () => {
  return <div className={styles.MainNavContainer}>
    <div className={styles.MainNavSider}>
      <div className={styles.SiderItems}>
        <div className={styles.SiderItem}>
          <Typography.Link>Home</Typography.Link>
        </div>
        <div className={styles.SiderItem}>
          <Typography.Link>News & Events</Typography.Link>
        </div>
        <div className={styles.SiderItem}>
          <Typography.Link>About Us</Typography.Link>
        </div>
        <div className={styles.SiderItem}>
          <Typography.Link>Contact Us</Typography.Link>
        </div>
        <div className={styles.SiderItemLast}>
          <Typography.Link>Boards & Committees</Typography.Link>
        </div>
      </div>
      <div className={styles.MobileNavDrawers}>
        <Collapse accordion>
          <Panel header="DATA & RESEARCH" key="1111">
            <h5>Economy</h5>
            <h5>State Finances</h5>
            <h5>Education</h5>
            <h5>Healthcare</h5>
            <h5>Local Government</h5>
            <h5>Population and Demographics</h5>
            <h5>State Register Calculations</h5>
            <h5>Presentations</h5>
          </Panel>
          <Panel header="LEGISLATIVE FISCAL IMPACTS" key="1122">
            <h5>Current General Assembly Session</h5>
            <h5>Previous General Assembly Session</h5>
            <h5>Forms</h5>
          </Panel>
          <Panel header="GEOGRAPHY & MAPPING" key="1133">
            <h5>Transportation Carrier Network (Uber)</h5>
            <h5>SC Real Time Network</h5>
            <h5>SC State GIS</h5>
            <h5>Maps</h5>
            <h5>Interactive Mapping</h5>
            <h5>Statewide Aerial Imagery</h5>
          </Panel>
          <Panel header="PROGRAMS & SERVICES" key="1144">
            <h5>Prescint Demographics and Redistricting</h5>
            <h5>State 911 Program</h5>
            <h5>Data Services and Online Solutions</h5>
            <h5>Geodetic Survey</h5>
            <h5>Fiscal Analysis</h5>
            <h5>2020 Census</h5>
          </Panel>
        </Collapse>
      </div>
    </div>
    <div className={styles.MainNavColumn}>
      <h3>DATA & RESEARCH</h3>
      <div className={styles.HeaderBreak} />
      <h5>Economy</h5>
      <h5>State Finances</h5>
      <h5>Education</h5>
      <h5>Healthcare</h5>
      <h5>Local Government</h5>
      <h5>Population and Demographics</h5>
      <h5>State Register Calculations</h5>
      <h5>Presentations</h5>
      <h3>LEGISLATIVE FISCAL IMPACTS</h3>
      <div className={styles.HeaderBreak} />
      <h5>Current General Assembly Session</h5>
      <h5>Previous General Assembly Session</h5>
      <h5>Forms</h5>
    </div>
    <div className={styles.MainNavColumn}>
      <h3>GEOGRAPHY & MAPPING</h3>
      <div className={styles.HeaderBreak} />
      <h5>Transportation Carrier Network (Uber)</h5>
      <h5>SC Real Time Network</h5>
      <h5>SC State GIS</h5>
      <h5>Maps</h5>
      <h5>Interactive Mapping</h5>
      <h5>Statewide Aerial Imagery</h5>
    </div>
    <div className={styles.MainNavColumn}>
      <h3>PROGRAMS & SERVICES</h3>
      <div className={styles.HeaderBreak} />
      <h5>Prescint Demographics and Redistricting</h5>
      <h5>State 911 Program</h5>
      <h5>Data Services and Online Solutions</h5>
      <h5>Geodetic Survey</h5>
      <h5>Fiscal Analysis</h5>
      <h5>2020 Census</h5>
    </div>
  </div>;
};

export default MainNav;
