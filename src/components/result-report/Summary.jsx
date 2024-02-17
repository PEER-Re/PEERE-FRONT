import {
  SummaryContainer,
  BtnBox,
  Btn,
  SummaryBox,
  FeedbackContainer,
  Table,
  Team_Table,
  VerticalLine,
} from "/src/styles/style";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Summary({
  startDay,
  endDay,
  memberNum,
  teamName,
  totalNoFeedbackCount,
  totalParticipateRate,
  totalYesFeedbackCount,
  projectName,
}) {
  const [button, setButton] = useState("team");
  const [yesFeedbackContents, setYesFeedbackContents] = useState([]);
  const [noFeedbackContents, setNoFeedbackContents] = useState([]);

  const handleButtonClick = (btn) => {
    setButton(btn);
  };

  useEffect(() => {}, [button]);
  useEffect(() => {
    // 페이지 렌더링 시 GET 요청 보내기
    sendGetRequest();
  }, []);

  const sendGetRequest = async () => {
    try {
      const project_id = 8; // 프로젝트 ID

      const response = await axios.get(
        `http://13.124.90.245:8080/api/project/${project_id}/my-feedback`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcwOTkxMTQzNCwic29jaWFsSWQiOiJ0aGRkbXMyMDA5QG5hdmVyLmNvbSJ9.Kd3e8Xm2k_SgnyWMf84p7WPd9FzNwBF7VDLSD7h55my8J--xBuYNjKM8mexLg5oPVSHr7sHchssKMRNKpVPx2A`,
          },
        }
      );

      const responseData = response.data.data;
      // YesData와 NoData 배열을 상태로 설정
      setYesFeedbackContents(
        responseData.MyYesFeedback.map((item) => item.yesFeedbackContent)
      );
      setNoFeedbackContents(
        responseData.MyNoFeedback.map((item) => item.NofeedbackContent)
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      {button === "team" ? (
        <SummaryContainer>
          <BtnBox>
            <Btn
              style={{
                background:
                  "linear-gradient(130deg, transparent 20px, #1AD079 0), linear-gradient(130deg, transparent 20px, #DFDFDF 0)",
              }}
              onClick={() => handleButtonClick("team")}
            >
              팀 정보
            </Btn>
            <Btn
              style={{
                background:
                  "linear-gradient(130deg, transparent 20px, #DFDFDF 0), linear-gradient(130deg, transparent 20px, #DFDFDF 0)",
              }}
              onClick={() => handleButtonClick("feedback")}
            >
              받은 피드백
            </Btn>
          </BtnBox>
          <SummaryBox>
            <FeedbackContainer style={{ flexDirection: "row" }}>
              <Team_Table style={{ paddingRight: "15px" }}>
                <tr>
                  <td>
                    <div>
                      <p className="title">팀 이름</p>
                      <p className="res">{teamName}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <p className="title">팀원 수</p>
                      <p className="res">{memberNum}명</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <p className="title">프로젝트 명</p>
                      <p className="res">{projectName}</p>
                    </div>
                  </td>
                </tr>
              </Team_Table>
              <VerticalLine />
              <Team_Table style={{ paddingLeft: "15px" }}>
                <tr>
                  <td>
                    <div>
                      <p className="title">프로젝트 기간</p>
                      <p className="res">
                        {startDay} ~ {endDay}
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <p className="title">전체 동료평가 참여율</p>
                      <p className="res">{Math.floor(totalParticipateRate)}%</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <p className="title">전체 피드백 개수</p>
                      <p className="res">
                        YES {totalYesFeedbackCount} / NO {totalNoFeedbackCount}
                      </p>
                    </div>
                  </td>
                </tr>
              </Team_Table>
            </FeedbackContainer>
          </SummaryBox>
        </SummaryContainer>
      ) : (
        <SummaryContainer>
          <BtnBox>
            <Btn
              style={{
                background:
                  "linear-gradient(130deg, transparent 20px,#DFDFDF 0), linear-gradient(130deg, transparent 20px, #DFDFDF 0)",
              }}
              onClick={() => handleButtonClick("team")}
            >
              팀 정보
            </Btn>
            <Btn
              style={{
                background:
                  "linear-gradient(130deg, transparent 20px, #1AD079 0), linear-gradient(130deg, transparent 20px, #DFDFDF 0)",
              }}
              onClick={() => handleButtonClick("feedback")}
            >
              받은 피드백
            </Btn>
          </BtnBox>
          <SummaryBox>
            <FeedbackContainer>
              <p className="feedback-title">
                <span style={{ color: "#1AD079" }}>YES</span> 피드백
              </p>
              <Table style={{ paddingRight: "15px" }}>
                {yesFeedbackContents
                  .reduce((acc, cell, index) => {
                    if (index % 2 === 0) {
                      acc.push([cell]);
                    } else {
                      acc[Math.floor(index / 2)].push(cell);
                    }
                    return acc;
                  }, [])
                  .map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>• {cell}</td>
                      ))}
                    </tr>
                  ))}
              </Table>
            </FeedbackContainer>
            <VerticalLine />
            <FeedbackContainer>
              <p className="feedback-title">
                <span style={{ color: "#FF7D33" }}>NO</span> 피드백
              </p>
              <Table style={{ paddingLeft: "15px" }}>
                {noFeedbackContents
                  .reduce((acc, cell, index) => {
                    if (index % 2 === 0) {
                      acc.push([cell]);
                    } else {
                      acc[Math.floor(index / 2)].push(cell);
                    }
                    return acc;
                  }, [])
                  .map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>• {cell}</td>
                      ))}
                    </tr>
                  ))}
              </Table>
            </FeedbackContainer>
          </SummaryBox>
        </SummaryContainer>
      )}
    </>
  );
}
