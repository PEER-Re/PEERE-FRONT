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
import PersonalBar from "../../components/team-report/rank_table/PersonalBar";
import { useState } from "react";

export default function TeamReport() {
  // 더미 데이터
  // 이름, 개수
  const teamMembers = [
    { name: "김서희", value: 75 },
    { name: "진서희", value: 72 },
    { name: "박서희", value: 70 },
    { name: "최서희", value: 68 },
    { name: "신서희", value: 63 },
    { name: "유서희", value: 55 },
  ];

  const [selected, setSelected] = useState(99);

  const selectBar = (index) => () => {
    setSelected(index);
  };

  return (
    <Container>
      <Title>팀 리포트</Title>
      <Team_Box>
        <p>팀 이름: PEER:Re</p>
        <p>팀원: {teamMembers.map((member) => member.name).join(", ")}</p>
        <Gaze_Box>
          <div>
            <p style={{ margin: "0 20px 0 0", whiteSpace: "nowrap" }}>
              동료평가 참여율
            </p>
          </div>
          <CustomizedProgressBars value={50} />
        </Gaze_Box>
      </Team_Box>
      <Rank_Box>
        <Rank_Box_Color />
        <Line />
        <TitleBar>
          <p>YES 피드백 순위</p>
        </TitleBar>
        {teamMembers.map((member, index) => (
          <PersonalBar
            key={index}
            index={index}
            value={member.value}
            selected={selected}
            onClick={selectBar(index)}
          />
        ))}
      </Rank_Box>
    </Container>
  );
}
