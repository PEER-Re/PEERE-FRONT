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
import CustomizedProgressBars from "/src/components/team-report/gauge/BorderLinearProgress";
import PersonalBar from "/src/components/team-report/rank_table/PersonalBar";
import { useState, useEffect } from "react";
import getTeamInfo from "/src/api/team-report/getTeamInfo";
import { dummy } from "/src/data/team-report/dummy";

export default function TeamReport() {

  // 임시 더미 데이터
  const [data, setData] = useState(dummy.data);
  console.log(data);

  // 프로젝트 id
  const [projectid, setProjectId] = useState(10);
  const accessToken = localStorage.getItem("accessToken");
  
/*  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getTeamInfo(accessToken, projectid);
        console.log(response);
        setData(response);
      } catch(error) {
        console.log(error);
      }
  }

  getData();
  }, []);
  */

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