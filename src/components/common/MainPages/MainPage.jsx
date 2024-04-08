import React, { useEffect, useState } from "react";
import GroupButtons from "../Search-Sort-Filter/GroupButtons";
import SearchSort from "../Search-Sort-Filter/SearchSort";
import Pagination from "../Pagination/Pagination";
import MainProfilePage from "./MainProfilePage";
import Card from "../Card";

function MainPage({ buttonMembers, currentMember, role }) {
  const [userRole, setUserRole] = useState(null);
  const [groupButtonMembers, setGroupButtonMembers] = useState([
    "open",
    "past",
    "upComing",
  ]);
  const [activeButton, setActiveButton] = useState("open");
  const [searchSortFlag, setSearchSortFlag] = useState(true);
  const [paginationFlag, setPaginationFlag] = useState(true);

  useEffect(() => {
    setUserRole(role);
    setGroupButtonMembers(buttonMembers);
    setActiveButton(currentMember);
  }, [buttonMembers, currentMember, role]);
  useEffect(() => {
    if (activeButton === "addNewHackathon" || activeButton === "addNewUser"||activeButton === "ParticipantProfile"||activeButton === "HostProfile") {
      setSearchSortFlag(false);
      setPaginationFlag(false);
    } else {
      setSearchSortFlag(true);
      setPaginationFlag(true);
    }
  }, [activeButton]);

  const number = Array.from(Array(100).keys())
    .slice(1)
    .map((index) => <Card key={index} tag={activeButton} />);

  console.log(activeButton);
  function pageToLoad(buttonName) {
    switch (buttonName) {
      case "Hosts"://this Host means hosts list at admin side
        return (
          <>
            <div>Host List Page</div>
          </>
        );
      case "Participant"://this participant means participants list at admin side
        return (
          <>
            <div>Participants List Page</div>
          </>
        );
        case "HostProfile"://this is host profile page at host side
            return (
              <>
                <MainProfilePage name="Host Name" designation="Tagline of host" about="about that host content content contentcontent content contentcontent content contentcontent content contentcontent content contentcontent content content"/>
              </>
            );
        case "ParticipantProfile"://this is participant profile page at participant side
            return (
              <>
                <MainProfilePage name="Participant Name" designation="designation (student or developer )" about="about that peroson content content content"/>
              </>
            );

        
      case "participated":
        return (
          <>
            <div>Participant participated Hackathons list</div>
          </>
        );
      case "applied":
        return (
          <>
            <div>Participant applied Hackathons list</div>
          </>
        );
      case "addNewHackathon":
        return (
          <>
            <div>add New Hackathon Form</div>
          </>
        );
      case "addNewUser":
        return (
          <>
            <div>add New User Form</div>
          </>
        );

      default:
        return null;
    }
  }

  return (
    <>
      <div>
        <div className=" flex justify-center items-center my-10   ">
          <GroupButtons
            groupButtonMembers={groupButtonMembers}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
        </div>

        {/* {(userRole === "Admin" || userRole === "Host" || userRole === "ParticipantDashboard") && pageToLoad(activeButton)} */}

        {searchSortFlag ? <SearchSort /> : null}

        {pageToLoad(activeButton)}

        {paginationFlag ? (
          <>
            <div className=" my-10">
              <Pagination
                data={number}
                recordsPerPage={10}
                className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-fit p-5 "
              />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default MainPage;
