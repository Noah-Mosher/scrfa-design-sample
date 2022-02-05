import React from 'react';
import styles from '../styles/EventsPanel.module.scss';
import RecentUpdates from './RecentUpdates';
import EventsSchedule from './EventsSchedule';

const EventsPanel = () => {
  return <div className={styles.EventsContainer}>
    <RecentUpdates />
    <EventsSchedule />
  </div>;
};

export default EventsPanel;
