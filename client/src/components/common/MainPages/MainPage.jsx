import React, { useEffect, useState } from "react";
import GroupButtons from "../Search-Sort-Filter/GroupButtons";
import SearchSort from "../Search-Sort-Filter/SearchSort";
import Pagination from "../Pagination/Pagination";
import MainProfilePage from "./MainProfilePage";
import MainListItem from "./MainListItem";
import Card from "../Card";
import RegisterLogin from "../../Login-Register/RegisterLogin";
import AddHackathonForm from "../../layout/HackathonPages/AddHackathonsForm";
import { useSelector, useDispatch } from "react-redux";
import { generalThunkFunction } from "../../../redux/actions/Genralactions";
import AdminMainPage from "../../layout/AdminPages/AdminMainPage";
function MainPage({
  buttonMembers,
  currentMember,
  role,
  // paginationDataProp,
  pageName,
}) {
  console.log(pageName);
  // console.log(paginationDataProp);
  const generalState = useSelector((state) => state.generalReducer);
  const dispatch = useDispatch();
  const [hackathons, setHackathons] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [hosts, setHosts] = useState([]);
  const [hackathonsApplications, setHackathonsApplications] = useState([]);
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
  const [paginationData, setPaginationData] = useState([]);
  const [searchSortFlag, setSearchSortFlag] = useState(true);
  const [paginationFlag, setPaginationFlag] = useState(true);
  const [addHackathonFlag, setAddHackathonFlag] = useState(false);
  const [addUserFlag, setAddUserFlag] = useState(false);
  useEffect(() => {
    dispatch(generalThunkFunction("getAllHackathons"));
    dispatch(generalThunkFunction("getAllParticipants"));
    dispatch(generalThunkFunction("getAllHosts"));
    dispatch(generalThunkFunction("getAllHackathonsApplications"));
  }, []);

  useEffect(() => {
    setHackathons(generalState.hackathons);
    setParticipants(generalState.participants);
    setHosts(generalState.hosts);
    setHackathonsApplications(generalState.hackathonsApplications);
  }, [generalState]);
  console.log(generalState);

  useEffect(() => {
    setUserRole(role);
    setGroupButtonMembers(buttonMembers);
    setActiveButton(currentMember);
  }, [buttonMembers, currentMember, role]);

  useEffect(() => {
    let newPaginationData;

    if (
      pageName === "HackathonsPage" &&
      (activeButton === "OPEN" ||
        activeButton === "CLOSED" ||
        activeButton === "UPCOMING") &&
      hackathons
    ) {
      newPaginationData = hackathons.filter((data) => {
        if (
          data.hackathonStatus &&
          typeof data.hackathonStatus === "string" &&
          data.hackathonStatus.toUpperCase() === activeButton.toUpperCase()
        ) {
          return data;
        }
      });
      setPaginationData(newPaginationData); // Update paginationData with filtered data
    } else if (pageName === "AdminMainPage" && activeButton === "HACKATHONS") {
      setPaginationData(hackathons); // Set paginationData to HACKATHONS data
    } else if (pageName === "AdminMainPage" && activeButton === "HOSTS") {
      setPaginationData(hosts); // Set paginationData to HOSTS data
    } else if (
      pageName === "AdminMainPage" &&
      activeButton === "PARTICIPANTS"
    ) {
      setPaginationData(participants); // Set paginationData to PARTICIPANTS data
    } else if (
      pageName === "ParticipantMainPage" &&
      activeButton === "APPLIED HACKATHONS"
    ) {
      let participantAppliedHacathons = ["1", "2", "4"];

      const newAppliedHackthons = hackathons.filter(
        (hackathon) =>
          participantAppliedHacathons.includes(hackathon.id) &&
          hackathon.hackathonStatus.toUpperCase() === "OPEN"
      );

      console.log(newAppliedHackthons);

      setPaginationData(newAppliedHackthons);
    } else if (
      pageName === "ParticipantMainPage" &&
      activeButton === "PAST HACKATHONS"
    ) {
      let participantPastHackathons = ["1", "2"];

      const newPastHackthons = hackathons.filter(
        (hackathon) =>
        participantPastHackathons.includes(hackathon.id) &&
          hackathon.hackathonStatus.toUpperCase() === "CLOSED"
      );

      console.log(newPastHackthons);

      setPaginationData(newPastHackthons);
    }
  }, [activeButton, hackathons, hosts, participants, pageName]);

  console.log(activeButton);

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

        {searchSortFlag ? <SearchSort /> : null}

        {/* {pageToLoad(activeButton)} */}
        {/* <AddHackathonForm /> */}

        {paginationFlag ? (
          <>
            <div className=" my-10">
              <Pagination
                pageName={pageName}
                activeButton={activeButton}
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
