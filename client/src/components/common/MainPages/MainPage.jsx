import React, { useEffect, useState } from "react";
import GroupButtons from "../Search-Sort-Filter/GroupButtons";
import SearchSort from "../Search-Sort-Filter/SearchSort";
import Pagination from "../Pagination/Pagination";
import MainProfilePage from "./MainProfilePage";
import MainListItem from "./MainListItem";
import Card from "../Card";
import RegisterLogin from "../../Login-Register/RegisterLogin";
import AddHackathonForm from "../../layout/HackathonPages/AddHackathonsForm";

function MainPage({ buttonMembers, currentMember, role }) {
  const [userRole, setUserRole] = useState(null);
  const [groupButtonMembers, setGroupButtonMembers] = useState([
    "open",
    "past",
    "upComing",
  ]);
  const [activeButton, setActiveButton] = useState("open");
  const number = Array.from(Array(100).keys())
    .slice(1)
    .map((index) => <Card key={index} tag={activeButton} />);
  const [paginationData, setPaginationData] = useState(number);
  const [searchSortFlag, setSearchSortFlag] = useState(true);
  const [paginationFlag, setPaginationFlag] = useState(true);

  useEffect(() => {
    setUserRole(role);
    setGroupButtonMembers(buttonMembers);
    setActiveButton(currentMember);
  }, [buttonMembers, currentMember, role]);
  useEffect(() => {
    if (
      activeButton === "addNewHackathon" ||
      activeButton === "addNewUser" ||
      activeButton === "ParticipantProfile" ||
      activeButton === "HostProfile"
    ) {
      setSearchSortFlag(false);
      setPaginationFlag(false);
    } else {
      setSearchSortFlag(true);
      setPaginationFlag(true);
    }
  }, [activeButton]);

  console.log(activeButton);
  function pageToLoad(buttonName) {
    switch (buttonName) {
      case "Hosts": //this Host means hosts list at admin side
        const listdata = [
          { title: "Computer Science Engineering", subtitle: 63, mcqs: 20697 },
          { title: "Mechanical Engineering", subtitle: 48, mcqs: 18222 },
          { title: "Mechanical Engineering", subtitle: 48, mcqs: 18222 },
          { title: "Mechanical Engineering", subtitle: 48, mcqs: 18222 },
          { title: "Mechanical Engineering", subtitle: 48, mcqs: 18222 },
          { title: "Mechanical Engineering", subtitle: 48, mcqs: 18222 },
          { title: "Mechanical Engineering", subtitle: 48, mcqs: 18222 },
          { title: "Mechanical Engineering", subtitle: 48, mcqs: 18222 },
          { title: "Mechanical Engineering", subtitle: 48, mcqs: 18222 },
          { title: "Mechanical Engineering", subtitle: 48, mcqs: 18222 },
          // Add other items here...
        ];

        return (
          <>
            <div className="grid  grid-cols-1 lg:grid-cols-2 w-full gap-6 p-5">
              {listdata.map((data) => (
                <>
                  <MainListItem title={data.title} subtitle={data.subtitle} />
                </>
              ))}
            </div>
          </>
        );
        // setPaginationData(newListData);
        break;
      // return (
      //   <>
      //     <MainListItem />
      //   </>
      // );
      case "Participant": //this participant means participants list at admin side
        return (
          <>
            <div>Participants List Page</div>
          </>
        );
      case "HostProfile": //this is host profile page at host side
        return (
          <>
            <MainProfilePage
              name="Host Name"
              role="host"
              tagline="Tagline of host"
              about="about that host content content contentcontent content contentcontent content contentcontent content contentcontent content contentcontent content content"
            />
          </>
        );
      case "ParticipantProfile": //this is participant profile page at participant side
        return (
          <>
            <MainProfilePage
              name="Participant Name"
              role="participant"
              gender="male"
              designation="designation (student or developer)"
              about="about that person content content content"
            />
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
            <AddHackathonForm/>
          </>
        );
      case "addNewUser":
        return (
          <>
            <RegisterLogin login={false} />
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
                data={paginationData}
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
