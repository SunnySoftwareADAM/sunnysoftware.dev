import type { FunctionComponent } from 'react';
import React, { useCallback, useContext, useState } from 'react';
// import WorkCalendarModal from '../WorkCalendarModal/WorkCalendarModal';
import AuthContext from '../../context/AuthContext';
import logger from '../../../server/logger';
import TimeDropdown from '../TimeDropdown/TimeDropdown';
import styles from './WorkCalendar.scss';

const HoursCalendarWeek: FunctionComponent = () => {
  const { username } = useContext(AuthContext) ?? { username: 'loading' };
  const [currentDate, setCurrentDate] = useState(new Date());
  const [clickedDate, setClickedDate] = useState('');

  const getDaysInWeek = (): Date[] => {
    const days: Date[] = [];
    for (let i = 0; i < 7; i++) {
      const first = currentDate.getDate() - currentDate.getDay() + i;
      const day
      = new Date(currentDate.setDate(first));
      days.push(day);
    }
    return days;
  };

  const daysInWeek = getDaysInWeek();

  const changeToPrevWeek = useCallback((): void => {
    setCurrentDate((currDate: Date): Date => {
      const Year = currDate.getFullYear();
      const Month = currDate.getMonth();
      const Day = currDate.getDate();
      return new Date(Year, Month, Day - 7);
    });
  }, []);

  const changeToNextWeek = useCallback((): void => {
    setCurrentDate((currDate: Date): Date => {
      const Year = currDate.getFullYear();
      const Month = currDate.getMonth();
      const Day = currDate.getDate();
      return new Date(Year, Month, Day + 7);
    });
  }, []);

  const handleDateClick
   = useCallback((e: React.MouseEvent<HTMLDivElement>): void => {
     e.preventDefault();
     const { target } = e;
     if (target instanceof HTMLDivElement) {
       const dayString: string = target.innerText;
       setClickedDate(dayString);
     } else if (target instanceof Object) {
       logger.info('selected dropdown, WIP');
     } else {
       logger.info('type error in handleDateClick');
     }
   }, []);

  //  const convertStringToUnix = (hour: string,
  //   minute: string, meridiem: string): number => {

  // }

  // const toTimeStamp = (strDate) => {
  //   const dt = Date.parse(strDate);
  //   return dt / 1000;
  // }

  // console.log(toTimeStamp('02/02/2022 23:31:30'));

  const displayWeek = (): React.ReactElement[] => {
    const dayObjects: React.ReactElement[] = [];
    for (let i = 0; i < 7; i++) {
      const rawDate = daysInWeek[i];
      const day: string = rawDate.toString().slice(0, 10);
      dayObjects.push((
        <div
          key={`day-${i}`}
          className={styles.box}
          onClick={handleDateClick}
        >
          {day}
          <TimeDropdown />
        </div>
      ));
    }
    return dayObjects;
  };

  return (
    <div>
      <h3>
        Work hours for
        {' '}
        {username}
        {' '}
      </h3>

      <div className={styles.week}>
        <div className={styles.weekHeader}>
          <button type="button" onClick={changeToPrevWeek}> BACK </button>
          <h2>
            Week of
            {' '}
            {' '}
            {daysInWeek[0].toLocaleString('default', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            {' '}
            {' '}
            to
            {' '}
            {' '}
            {daysInWeek[6].toLocaleString('default', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </h2>
          <button type="button" onClick={changeToNextWeek}> NEXT </button>
        </div>
        {/* <div className={styles.headerDays}>
          <div>Su</div>
          <div>Mo</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>Sa</div>
        </div> */}
        <div className={styles.body}>
          {displayWeek()}
          {' '}
        </div>

        <div className={styles.boxSelected}>
          Selected Date:
          {' '}
          <p>{clickedDate}</p>
        </div>

      </div>
      {/* <div>
        <WorkCalendarModal
          clickedDate={clickedDate}
        />
      </div> */}
    </div>
  );
};

export default HoursCalendarWeek;