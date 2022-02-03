import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import styles from '../styles/Navbar.module.scss';
import DefaultButton from './DefaultButton';
import Logo from '../assets/RFALogoFinal.png';
import { Col, Row, Typography } from 'antd';

const Navbar = () => {
  return ( 
    <div>
      <header className={styles.Navbar_Container}>
        <Row className={styles.NavRow}>
          <Col style={{justifyContent:'start'}}>
            <Row >
              <DefaultButton icon={<AiOutlineMenu />}> </DefaultButton>
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
              </div>
            </Row>
          </Col>
        </Row>
      </header>
    </div> );
};

export default Navbar;
