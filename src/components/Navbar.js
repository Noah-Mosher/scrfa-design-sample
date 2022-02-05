import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import styles from '../styles/Navbar.module.scss';
import MainNav from './MainNav';
import DefaultButton from './DefaultButton';
import Logo from '../assets/RFALogoFinal.png';
import { Button, Col, Input, Row, Typography } from 'antd';
import { AiOutlineSearch } from 'react-icons/ai';



const Navbar = () => {
  const [modalVisible, setModalVisible]= useState(false);
  const [navVisible, setNavVisible] = useState(false);

  const searchToggle = () => {
    setModalVisible(!modalVisible);
  };
  const navToggle = () => {
    setNavVisible(!navVisible);
  };
  
  return ( 
    <div>
      <header className={styles.Navbar_Container}>
        <Row className={styles.NavRow}>
          <Col style={{justifyContent:'start'}}>
            <Row >
              <DefaultButton icon={navVisible ? <AiOutlineClose /> : <AiOutlineMenu />} onClick={navToggle} content={navVisible ? 'CLOSE' : 'MENU'}/> 
              <img className={styles.Nav_Logo} alt='RFA_Logo' src={Logo} />
              <div className={styles.NavText}>
                <h1>SOUTH CAROLINA</h1>
                <h1>REVENUE AND FISCAL AFFAIRS OFFICE</h1>
                <h5>Transforming data into solutions for South Carolina</h5>
              </div>
            </Row>
          </Col>
          <Col style={{justifyContent:'end'}}>
            <Row>
              <div className={styles.Links}>
                <Typography.Link >HOME</Typography.Link>
                <Typography.Link >ABOUT US</Typography.Link>
                <Typography.Link >EVENTS</Typography.Link>
                <Typography.Link> BOARDS & COMMITTEES</Typography.Link>
                <Button icon={<AiOutlineSearch />} style={modalVisible ? {backgroundColor: '#0074c1', color: 'white'} : null}size="large" onClick={searchToggle
                }/>
              </div>
            </Row>
          </Col>
        </Row>
      </header>
      <div>
        {navVisible ? <div className={styles.FullNavContainer}> <MainNav /> </div> : null}
      </div>
      <div>
        {modalVisible ? <div className={styles.SearchContainer}><Input placeholder='Search rfa.sc.gov'/> <Button icon={<AiOutlineSearch />}>Search</Button></div> : null}
      </div>
    </div> );
};

export default Navbar;
