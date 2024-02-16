import axios from "axios";

const getTeamInfo = async (accessToken, projectId ) => {
    try {
      const response = await axios.get(`http://13.124.90.245:8080/api/projects/${projectId}/team-report`, {
        headers: {
          'Authorization': accessToken,
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      return response.data;
    } catch(error) {
      console.log(error);
    }
}

export default getTeamInfo;