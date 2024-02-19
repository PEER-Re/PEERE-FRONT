import axios from "axios";

const CreateTeamApi = async (teamName, teamIntro, accessToken) => {
  const postData = {
    name: teamName,
    profile: teamIntro,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
  };

  try {
    // console.log(config);
    // console.log(postData);
    const response = await axios.post(
      `${import.meta.env.VITE_APP_SERVER_HOST}/api/teamspace`,
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
