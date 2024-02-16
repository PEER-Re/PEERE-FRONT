import axios from "axios";

const CreateTeamApi = async (teamName, teamIntro) => {
  const postData = {
    name: teamName,
    profile: teamIntro,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcwOTkxMTQzNCwic29jaWFsSWQiOiJ0aGRkbXMyMDA5QG5hdmVyLmNvbSJ9.Kd3e8Xm2k_SgnyWMf84p7WPd9FzNwBF7VDLSD7h55my8J--xBuYNjKM8mexLg5oPVSHr7sHchssKMRNKpVPx2A`,
    },
  };

  try {
    // console.log(config);
    // console.log(postData);
    const response = await axios.post(
      "http://13.124.90.245:8080/api/teamspace",
      postData,
      config
    );

    alert(
      "생성하신 팀의 초대 코드는" + response.data.data.invitationCode + "입니다"
    );
    return response.data.data.teamspaceId;
    // navigate(`/create-project`, { state: { apidata: teamspaceId } });
  } catch (error) {
    console.error("팀 생성 요청 중 오류가 발생했습니다:", error);
  }
};

export default CreateTeamApi;
