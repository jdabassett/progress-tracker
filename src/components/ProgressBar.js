import React from 'react'
import styled from 'styled-components'


const handlerColor = (progress) => {
  switch (true) {
    case (progress>=80):
      return '#2cba00'
    case (progress>=60):
      return '#a3ff00'
    case (progress>=40):
      return '#fff400'
    case (progress>=20):
      return '#ffa700'
    case (progress>0):
      return '#ff0000'
    default:
      return '000000'
  }
}

const Bar = styled.div`
  height:50px;
  width:${({progress})=> progress*250/100}px;
  border-radius: 0px 7px 7px 0px;
  outline:3px solid gray;
  background-color:${({progress})=>handlerColor(progress)}
  `
export default function ProgressBar({progress}) {

  return (
    <Bar progress={progress}></Bar>
  )
}