import React, { useState } from 'react';
import './App.less';
import styles from './App.module.scss';
import Navbar from './components/Navbar';
import MainLandingInfo from './components/MainLandingInfo';
import InfoCards from './components/InfoCards';
import PopularLinksAndServPanel from './components/PopularLinksAndServPanel';
import EventsPanel from './components/EventsPanel';
import FooterNav from './components/FooterNav';
import { Button, Typography } from 'antd';
import { IoChevronUpCircleOutline } from 'react-icons/io5';
import Layout, { Content, Footer} from 'antd/lib/layout/layout';


function App() {
  const [siteSearchValue, setSiteSearchValue] = useState('');
  return (
    <>
      <div className={styles.Container}>
        <Layout>
          <Navbar />
          <Content>
            <MainLandingInfo siteSearchValue={siteSearchValue} setSiteSearchValue={setSiteSearchValue}/>
            <InfoCards />
            <PopularLinksAndServPanel />
            <EventsPanel />
            <div className={styles.BackToTop}>
              <Typography.Link href='#'>Back to Top</Typography.Link>
              <Button href='#' shape={'circle'}><IoChevronUpCircleOutline /> </Button>
            </div>
          </Content>
          <Footer>
            <FooterNav />
          </Footer>
        </Layout>
      </div>
    </>
  );
}

export default App;
