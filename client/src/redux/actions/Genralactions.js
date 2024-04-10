import { getMethod, postMethod } from "../../utils/axiosInstance/axiosInstance";
import { getUsers } from "../../utils/axiosInstance/axiosInstance";

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

export function generalThunkFunction(methodName) {
  let result;
  return async function (dispatch) {
    switch (methodName) {
      case "getAllParticipants":
        
        result = await getUsers(
            "participants",
            "http://localhost:8000/participants"
          );
          console.log(result.data)
          if(result.success)
         { dispatch(getParticipantsAction(result.data));}
        
        break;
        case "getAllHosts":
            
              result = await getUsers(
                "hosts",
                "http://localhost:8000/hosts"
              );
              if(result.success)
             { dispatch(getHostsAction(result.data));}
            
            break;
      case "getAllHackathons":
        
          result = await getUsers(
            "hosts",
            "http://localhost:8000/hackathons"
          );
          if(result.success)
         { dispatch(getHackathonsAction(result));}
        
        break;
      case "getAllHackathonsApplications":
        
          result = await getUsers(
            "hackathonApplications",
            "http://localhost:8000/hackathonApplications"
          );
          if(result.success)
         { dispatch(getHackathonsApplicationsAction(result));}
        
        break;
     

      // if (result.success === true) dispatch(setRole(result.data, role));

      default:
        break;
    }
  };
}
