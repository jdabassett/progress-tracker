
import './App.css';
import React from 'react';
import styled from 'styled-components'
import Weekday from './components/Weekday.js'




const Title = styled.h1`
  text-align: center;
  color: purple;
`

function App() {

  const date = new Date()


  const [weekArray] = React.useState([{day:"M",progress:100},{day:"T",progress:80},{day:"W",progress:60},{day:"T",progress:40},{day:"F",progress:30},{day:"S",progress:20},{day:"S",progress:10}])

  const weekElements = weekArray.map((day,index) => (
          <Weekday key={index} day={day.day} progress={day.progress} index={index+1} today={date.getDay()}/>
  ))

  return (
    <>
        <Title>Progress Tracker</Title>
        <div>
          {weekElements}
        </div>
      </>
  
  );
}

export default App;
