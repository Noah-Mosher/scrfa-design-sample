import React, { useState } from 'react';
import './App.less';
import styles from './App.module.scss';
import Navbar from './components/Navbar';
import MainLandingInfo from './components/MainLandingInfo';
import InfoCards from './components/InfoCards';
import PopularLinksAndServPanel from './components/PopularLinksAndServPanel';

function App() {
  const [siteSearchValue, setSiteSearchValue] = useState('');
  return (
    <>
      <div className={styles.Container}>
        <Navbar />
        <MainLandingInfo siteSearchValue={siteSearchValue} setSiteSearchValue={setSiteSearchValue}/>
        <InfoCards />
        <PopularLinksAndServPanel />
      </div>
    </>
  );
}

export default App;
