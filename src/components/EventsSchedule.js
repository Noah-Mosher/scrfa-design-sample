import { Button, Typography } from 'antd';
import React from 'react';
import styles from '../styles/EventsSchedule.module.scss';
import {IoLocationOutline} from 'react-icons/io5';
import {FaRegIdBadge} from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';

const EventsSchedule = () => {
  return <div className={styles.EventsScheduleContainer}>
    <Typography.Title level={3}>Calendar of Events</Typography.Title>
    <div className={styles.headerBorder} />
    <div className={styles.CalendarItemCancelled}>
      <div className={styles.Calendardate}>
        <div className={styles.Month}><Typography.Text>FEB</Typography.Text></div>
        <div className={styles.Day}><Typography.Text>2</Typography.Text></div>
      </div>
      <div className={styles.EventInfo}>
        <Typography.Title level={5}>Board Of Economic Advisors Meeting</Typography.Title>
        <div><IoLocationOutline /> <Typography.Text>Duncan Hall Room 147 C</Typography.Text></div>
        <div><AiOutlineClockCircle /> <Typography.Text>7:00 AM</Typography.Text></div>
        <div><FaRegIdBadge /> <Typography.Text>888-867-5309</Typography.Text> <Typography.Text mark>Cancelled</Typography.Text></div>
      </div>
    </div>
    <div className={styles.CalendarItemToday}>
      <div className={styles.Calendardate}>
        <div className={styles.Month}><Typography.Text>FEB</Typography.Text></div>
        <div className={styles.Day}><Typography.Text>3</Typography.Text></div>
      </div>
      <div className={styles.EventInfo}>
        <Typography.Title level={5}>Governer Town Hall</Typography.Title>
        <div><IoLocationOutline /> <Typography.Text>Capital Building Chamber 2</Typography.Text></div>
        <div><AiOutlineClockCircle /> <Typography.Text>11:00 AM</Typography.Text></div>
        <div><FaRegIdBadge /> <Typography.Text>309-487-1409</Typography.Text> <Typography.Text mark>Today</Typography.Text></div>
      </div>
    </div>
    <div className={styles.CalendarItem}>
      <div className={styles.Calendardate}>
        <div className={styles.Month}><Typography.Text>FEB</Typography.Text></div>
        <div className={styles.Day}><Typography.Text>17</Typography.Text></div>
      </div>
      <div className={styles.EventInfo}>
        <Typography.Title level={5}>New Hire Orientation</Typography.Title>
        <div><IoLocationOutline /> <Typography.Text>Zoom Call</Typography.Text></div>
        <div><AiOutlineClockCircle /> <Typography.Text>3:00 PM</Typography.Text></div>
        <div><FaRegIdBadge /> <Typography.Text>847-521-6659</Typography.Text></div>
      </div>
    </div>
    <div className={styles.CalendarItemUpdated}>
      <div className={styles.Calendardate}>
        <div className={styles.Month}><Typography.Text>FEB</Typography.Text></div>
        <div className={styles.Day}><Typography.Text>21</Typography.Text></div>
      </div>
      <div className={styles.EventInfo}>
        <Typography.Title level={5}>Yoga on the Capital Lawn</Typography.Title>
        <div><IoLocationOutline /> <Typography.Text>East Lawn of Douglas Capital Building</Typography.Text></div>
        <div><AiOutlineClockCircle /> <Typography.Text>6:00 AM</Typography.Text></div>
        <div><FaRegIdBadge /> <Typography.Text>615-344-8812</Typography.Text> <Typography.Text mark>Updated</Typography.Text></div>
      </div>
    </div>
    <div className={styles.CalendarItem}>
      <div className={styles.Calendardate}>
        <div className={styles.Month}><Typography.Text>FEB</Typography.Text></div>
        <div className={styles.Day}><Typography.Text>22</Typography.Text></div>
      </div>
      <div className={styles.EventInfo}>
        <Typography.Title level={5}>Board Of Economic Advisors Meeting</Typography.Title>
        <div><IoLocationOutline /> <Typography.Text>Duncan Hall Room 147 C</Typography.Text></div>
        <div><AiOutlineClockCircle /> <Typography.Text>9:00 AM</Typography.Text></div>
        <div><FaRegIdBadge /> <Typography.Text>888-867-5309</Typography.Text></div>
      </div>
    </div>
    <Button >VIEW ALL EVENTS</Button>
  </div>;
};


export default EventsSchedule;
