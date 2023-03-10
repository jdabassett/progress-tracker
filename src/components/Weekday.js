

import React from 'react';
import styled from 'styled-components'
import ProgressBar from './ProgressBar.js'


const Section = styled.div`
  background-color: ${({isToday})=>isToday?"lightgrey":"#fff"};
  border: solid 3px gray;
  margin: 4px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: left;
  font-size: 40px;
`

const WeekdayTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  border-right: solid 3px lightgrey;
  color:blue;
`

const WeekendTitle = styled(WeekdayTitle)`
  color: black;
  border-radius: 7px 0 0 7px;
`


function Weekday({day,progress,index,today}) {
  const isToday = index===today;

  return (
    <Section isToday={isToday}>
            {String(day).toLowerCase() !== 's'?
              <WeekdayTitle >{day}</WeekdayTitle>:
              <WeekendTitle >{day}</WeekendTitle>}
            <ProgressBar progress={progress}/>
    </Section>
  
  );
}

export default Weekday;