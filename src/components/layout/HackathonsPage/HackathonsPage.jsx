import React from 'react'
import MainPage from '../../common/MainPage/MainPage'

function HackathonsPage() {
const groupButtonMembers = ["open","past","upComing"];



  return (
    <>
     <MainPage buttonMembers={groupButtonMembers} currentMember={groupButtonMembers[0]} /> 
    </>
  )
}

export default HackathonsPage
