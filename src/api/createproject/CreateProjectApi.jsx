import axios from "axios";

const CreateProjectApi = async (teamspaceId, projectName) => {
  const postData = {
    teamId: teamspaceId,
    title: projectName,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcwOTkxMTQzNCwic29jaWFsSWQiOiJ0aGRkbXMyMDA5QG5hdmVyLmNvbSJ9.Kd3e8Xm2k_SgnyWMf84p7WPd9FzNwBF7VDLSD7h55my8J--xBuYNjKM8mexLg5oPVSHr7sHchssKMRNKpVPx2A`,
    },
  };

  try {
    console.log(postData);
    const response = await axios.post(
      `${import.meta.env.VITE_APP_SERVER_HOST}/api/project`,
      postData,
      config
    );
    console.log(response.data.data.projectId);
    // addProjectId(response.data.data.projectId);
    // navigate(`/team-report`);
    return response.data.data.projectId;
  } catch (error) {
    console.error("팀 생성 요청 중 오류가 발생했습니다:", error);
  }
};

export default CreateProjectApi;
