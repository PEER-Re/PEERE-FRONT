import React, { useState, useEffect } from "react";
import axios from "axios";
import { ResultContainer, Title, ContentContainer } from "/src/styles/style";
import Summary from "../../components/result-report/Summary";
import Review from "../../components/result-report/Review";
import Input from "../../components/result-report/Input";

export default function ResultReport() {
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [memberNum, setMemberNum] = useState(0);
  const [teamName, setTeamName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [totalNoFeedbackCount, setTotalNoFeedbackCount] = useState(0);
  const [totalParticipateRate, setTotalParticipateRate] = useState(0);
  const [totalYesFeedbackCount, setTotalYesFeedbackCount] = useState(0);

  useEffect(() => {
    // 페이지 렌더링 시 GET 요청 보내기
    sendGetRequest();
  }, []);

  const sendGetRequest = async () => {
    try {
      const project_id = 8; // 프로젝트 ID

      const response = await axios.get(
        `http://13.124.90.245:8080/api/project/${project_id}/project-info`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcwOTkxMTQzNCwic29jaWFsSWQiOiJ0aGRkbXMyMDA5QG5hdmVyLmNvbSJ9.Kd3e8Xm2k_SgnyWMf84p7WPd9FzNwBF7VDLSD7h55my8J--xBuYNjKM8mexLg5oPVSHr7sHchssKMRNKpVPx2A`,
          },
        }
      );

      const responseData = response.data.data;
      console.log(responseData);
      setStartDay(responseData.startDay);
      setEndDay(responseData.endDay);
      setMemberNum(responseData.size);
      setTeamName(responseData.teamName);
      setProjectName(responseData.projectName);
      setTotalNoFeedbackCount(responseData.totalNoFeedbackCount);
      setTotalParticipateRate(responseData.totalParticipateRate);
      setTotalYesFeedbackCount(responseData.totalYesFeedbackCount);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <ResultContainer>
      <Title
        style={{
          fontSize: "40px",
          height: "5px",
          zIndex: "999",
        }}
      >
        결과 리포트
      </Title>
      <Summary
        startDay={startDay}
        endDay={endDay}
        memberNum={memberNum}
        teamName={teamName}
        projectName={projectName}
        totalNoFeedbackCount={totalNoFeedbackCount}
        totalParticipateRate={totalParticipateRate}
        totalYesFeedbackCount={totalYesFeedbackCount}
      />
      <ContentContainer>
        <Review />
        <Input />
      </ContentContainer>
    </ResultContainer>
  );
}
