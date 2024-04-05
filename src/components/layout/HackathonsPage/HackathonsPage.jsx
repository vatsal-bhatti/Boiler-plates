import React, { useState } from 'react'
import GroupButtons from '../../common/GroupButtons'

function HackathonsPage() {
    const buttonMembers=["Upcoming","Open","Past"] ;
    const [activeButton,setActiveButton]  = useState("Open")
  return (
    <>

    <div className=" flex justify-center items-center mt-28   ">
       
    <GroupButtons buttonMembers={buttonMembers} activeButton = {activeButton} setActiveButton={setActiveButton} />
    </div>
      
    </>
  )
}

export default HackathonsPage
