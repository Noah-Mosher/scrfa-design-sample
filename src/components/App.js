import React, { useState } from 'react';
import '../styles/App.less';
import styles from '../styles/App.module.scss';
import Navbar from './Navbar';
import MainLandingInfo from './MainLandingInfo';
import InfoCards from './InfoCards';
import PopularLinksAndServPanel from './PopularLinksAndServPanel';
import EventsPanel from './EventsPanel';
import FooterNav from './FooterNav';
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
