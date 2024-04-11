import { getMethod, postMethod } from "../../utils/axiosInstance/axiosInstance";
import { getUsers } from "../../utils/axiosInstance/axiosInstance";


export const formatDate = (dateString) => {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
};


const getCurrentDate = () => {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1, // Month is zero-based, so we add 1
    day: now.getDate()
  };
};

const compareDates = (dateString, comparisonType) => {
  const currentDate = getCurrentDate();
  const givenDate = {
    year: parseInt(dateString.substring(0, 4)),
    month: parseInt(dateString.substring(5, 7)),
    day: parseInt(dateString.substring(8, 10))
  };

  const currentDateValue = currentDate.year * 10000 + currentDate.month * 100 + currentDate.day;
  const givenDateValue = givenDate.year * 10000 + givenDate.month * 100 + givenDate.day;

  if (comparisonType === "equal") {
    return currentDateValue === givenDateValue;
  } else if (comparisonType === "greaterThan") {
    return currentDateValue < givenDateValue;
  } else if (comparisonType === "lessThan") {
    return currentDateValue > givenDateValue;
  } else {
    throw new Error("Invalid comparison type");
  }
};

console.log(compareDates("2024-06-03", "greaterThan")); // true
console.log(compareDates("2024-04-11", "equal")); // true




export function workSuccess(value=false){
  return value;
}

export function getParticipantsAction(participantsData) {
  return {
    type: "SET-ALL-PARTICIPANTS",
    payload: participantsData,
  };
}

export function getHostsAction(hostsData) {
  return {
    type: "SET-ALL-HOSTS",
    payload: hostsData,
  };
}

export function getHackathonsAction(hackathonsData) {
  return {
    type: "SET-ALL-HACKATHONS",
    payload: hackathonsData,
  };
}

export function getHackathonsApplicationsAction(hackathonsApplicationsData) {
  return {
    type: "SET-ALL-HACKATHONS-APPLICATIONS",
    payload: hackathonsApplicationsData,
  };
}

export function generalThunkFunction(methodName, data) {
  let result;
  return async function (dispatch) {
    switch (methodName) {
      case "getAllParticipants":
        result = await getUsers(
          "participants",
          "http://localhost:8000/participants"
        );
        console.log(result.data);
        if (result.success) {
          dispatch(getParticipantsAction(result.data));
        }

        break;
      case "getAllHosts":
        result = await getUsers("hosts", "http://localhost:8000/hosts");
        if (result.success) {
          dispatch(getHostsAction(result.data));
        }

        break;
      case "getAllHackathons":
        result = await getUsers("hosts", "http://localhost:8000/hackathons");
        if (result.success) {

console.log(result.data);


const newResult = result.data.map((hackathon) => {
  if (compareDates(hackathon.dates.registrationStart,"equal")) {
    return { ...hackathon, hackathonStatus: "Open" };
  } 
  else if(compareDates(hackathon.dates.registrationStart,"lessThan"))
  return { ...hackathon, hackathonStatus: "UpComing" };
  else if(compareDates(hackathon.dates.registrationEnd,"lessThan"))
  return { ...hackathon, hackathonStatus: "RegistrationClosed" };
  else if(compareDates(hackathon.dates.hackathonStart,"equal")  || (compareDates(hackathon.dates.hackathonStart,"greaterThan")&& compareDates(hackathon.dates.hackathonEnd,"lessThan")) )
  return { ...hackathon, hackathonStatus: "Running" };
  else if(compareDates(hackathon.dates.hackathonEnd,"greaterThan") )
  return { ...hackathon, hackathonStatus: "Closed" };
  else {
    return hackathon; // Return the hackathon object unchanged
  }
});
        console.log(newResult)


          dispatch(getHackathonsAction(newResult));
        }

        break;
      case "getAllHackathonsApplications":
        result = await getUsers(
          "hackathonApplications",
          "http://localhost:8000/hackathonApplications"
        );
        if (result.success) {
          dispatch(getHackathonsApplicationsAction(result.data));
        }

        break;

      case "AddNewHackathon":
        //   "id": "1",
        //   "hackathonStatus": "upcoming",
        //   "hostId": 1,
        //   "name": "Innovate-a-thon",
        //   "tagline": "Unleash Innovation, Create Change",
        //   "description": "Join us for an exciting hackathon where ideas turn into reality. Get ready to innovate, collaborate, and make a difference.",
        //   "prize": {
        //     "1st": "Cash prize",
        //     "2nd": "Gift vouchers"
        //   },
        //   "techstacks": [
        //     "Web development",
        //     "Machine learning"
        //   ],
        //   "dates": {
        //     "registrationStart": "2024-05-01",
        //     "registrationEnd": "2024-05-15",
        //     "hackathonStart": "2024-06-01",
        //     "hackathonEnd": "2024-06-03"
        //   },
        //   "teamSize": {
        //     "max": 4,
        //     "min": 1
        //   },
        //   "mode": "online"
        // },
console.log(data.id);
        const newHackathonDetails = {
          id: data.id,
          hackathonStatus: data.status,
          hostId: "1",
          name: data.name,
          tagline: data.tagline,
          description: data.description,
          prizes: {
            prizePool: data.prizes,
            perks: data.perks,
          },
          techstacks: data.techstacks,
          dates: {
            registrationStart: data.registrationStart,
            registrationEnd: data.registrationEnd,
            hackathonStart: data.hackathonStart,
            hackathonEnd: data.hackathonEnd,
          },
          teamSize: {
            max: data.teamMax,
            min: data.teamMin,
          },

          mode: data.mode,
          location: data.location,
        };
        console.log(newHackathonDetails.id)

        result = await postMethod(
          
          "http://localhost:8000/hackathons", JSON.stringify(newHackathonDetails)
        );
        console.log(result);
        if (result.success) {
          workSuccess(true);
         
        }
        break;

        case "addHackathonApplication":
  
        
        
        const newHackathonApplication = {
          
            id: data.id,
            hackathonId: data.hackathonId,
            hackathonName: data.hackathonId,
            applicationStatus: "pending",
            leaderId: data.leaderId,
            teamDetails:data.teamDetails,
            problemStatementAbstract: data.problemStatementAbstract,
            solutionStatement: "",
            technologyUsed: data.technologyUsed
          
        }
        console.log(newHackathonApplication.id)

        result = await postMethod(
          
          "http://localhost:8000/hackathonApplications", JSON.stringify(newHackathonApplication)
        );
        console.log(result);
        // if (result.success) {
        //   workSuccess(true);
         
        // }
        break;





      // if (result.success === true) dispatch(setRole(result.data, role));

      default:
        break;
    }
  };
}
