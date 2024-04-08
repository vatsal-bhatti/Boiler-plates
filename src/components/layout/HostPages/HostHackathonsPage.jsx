import React from 'react'
import MainPage from '../../common/MainPage/MainPage'

function HostHackathonsPage() {
    const groupButtonMembers = ["HostProfile","open","past","upComing","addNewHackathon"];



    return (
      <>
       <MainPage role="Host" buttonMembers={groupButtonMembers} currentMember={groupButtonMembers[0]} /> 
      </>
    )
}

export default HostHackathonsPage
