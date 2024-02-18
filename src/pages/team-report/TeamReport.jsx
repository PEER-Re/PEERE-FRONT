import {
  Container,
  Title,
  Team_Box,
  Gaze_Box,
  Rank_Box,
  TitleBar,
  Rank_Box_Color,
  Line,
} from "/src/styles/style";
import axios from "axios";
import CustomizedProgressBars from "/src/components/team-report/gauge/BorderLinearProgress";
import PersonalBar from "/src/components/team-report/rank_table/PersonalBar";
import { useState, useEffect } from "react";
import { dummy } from "/src/data/team-report/dummy";
// store
import ProjectIdStore from "/src/stores/projectId/ProjectIdStore";

export default function TeamReport() {

   // localstorage에서 토큰 가져오기
   const accessToken = localStorage.getItem('accessToken');

   // 선택한 팀 스페이스 아이디 가져오기
  const selectedPRId = ProjectIdStore((state) => state.selectedPRId);

  const [data, setData] = useState(dummy.data); // 더미데이터로 초기 세팅
  console.log(data);
  
useEffect(() => {
  const getTeamInfo = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_SERVER_HOST}/api/projects/${selectedPRId}/team-report`, {
        headers: {
          'Authorization': accessToken,
        }
      });
      console.log('성공 : ',response.data.data);
      setData(response.data.data);
    } catch(error) {
      console.log(error);
    }
}

  getTeamInfo();
  }, []);
  

  const [selected, setSelected] = useState(99);

  const selectBar = (index) => () => {
    setSelected(index);
  };

  // {teamMembers.map((member) => member.name).join(", ")}
  return (
    <Container>
      <Title>팀 리포트</Title>
     <Team_Box>
        <p>팀 이름: {data.teamInfo.teamName} </p>
        <p>팀원: {data.teamInfo.teamUserNames.map((member) => member).join(", ")}</p>
        <Gaze_Box>
          <div>
            <p style={{ margin: "0 20px 0 0", whiteSpace: "nowrap" }}>
              동료평가 참여율
            </p>
          </div>
          <CustomizedProgressBars value={data.teamInfo.evaluationProgress} />
        </Gaze_Box>
      </Team_Box>
      <Rank_Box>
        <Rank_Box_Color />
        <Line />
        <TitleBar>
          <p>YES 피드백 순위</p>
        </TitleBar>
        {data.teamFeedbackInfoList
          .slice() // 복사본 생성
          .sort((a, b) => a.rank - b.rank) // 오름 차순 정렬
          .map((member, index) => (
            <PersonalBar
              key={index} 
              rank={member.rank}
              index={index}
              value={member.yesFeedbackNum}
              selected={selected}
              onClick={selectBar(index)}
              feedbacks={member.goodFeedbackContent}
            />
        ))}
          </Rank_Box> 
    </Container>
  );
}