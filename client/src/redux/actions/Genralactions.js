import { getMethod, postMethod } from "../../utils/axiosInstance/axiosInstance";
import { getUsers } from "../../utils/axiosInstance/axiosInstance";



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
          dispatch(getHackathonsAction(result.data));
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

      // if (result.success === true) dispatch(setRole(result.data, role));

      default:
        break;
    }
  };
}
