import React from "react";
import MainPage from "../../common/MainPages/MainPage";

function AdminMainPage() {
  const groupButtonMembers = [
    "Hackathons",
    "Hosts",
    "Participant",
    "addNewHackathon",
    "addNewUser",
  ];

  return (
    <>
      <MainPage
        role="Admin"
        buttonMembers={groupButtonMembers}
        currentMember={groupButtonMembers[0]}
      />
    </>
  );
}

export default AdminMainPage;
