import React from 'react'
import MainPage from '../../common/MainPage/MainPage';

function ParticipantProfile() {
    const groupButtonMembers = ["ParticipantProfile","Applications","ParticipatedHacathons"];



    return (
      <>
       <MainPage role="Host" buttonMembers={groupButtonMembers} currentMember={groupButtonMembers[0]} /> 
      </>
    )
}

export default ParticipantProfile
