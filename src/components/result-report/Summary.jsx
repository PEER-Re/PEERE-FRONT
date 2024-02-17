import {
  DetailContainer,
  Detail,
  Detail2,
  InnerBox,
  ButtonBox,
  TeamButton,
  FeedbackButton,
  InnerBox1,
  InnerBox2,
  VerticalLine,
  TB,
  TT,
  T,
  FeedbackTitle,
  FeedbackText,
  FT,
} from "/src/styles/style";
import { useState, useEffect } from "react";
import axios from "axios";

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
    <DetailContainer>
      {button === "team" ? (
        <Detail>
          <ButtonBox>
            <TeamButton onClick={() => handleButtonClick("team")}>
              팀 정보
            </TeamButton>
            <FeedbackButton onClick={() => handleButtonClick("feedback")}>
              받은 피드백
            </FeedbackButton>
          </ButtonBox>
          <InnerBox>
            <InnerBox1>
              <TB>
                <TT>팀 이름</TT>
                <T style={{ maxWidth: "20vh" }}>{teamName}</T>
              </TB>
              <TB>
                <TT>팀원 수</TT>
                <T>{memberNum}명</T>
              </TB>
              <TB>
                <TT>프로젝트 명</TT>
                <T style={{ maxWidth: "18vh" }}>{projectName}</T>
              </TB>
            </InnerBox1>
            <VerticalLine />
            <InnerBox2>
              <TB>
                <TT>프로젝트 기간</TT>
                <T>
                  {startDay} ~ {endDay}
                </T>
              </TB>
              <TB>
                <TT>전체 동료평가 참여율</TT>
                <T>{totalParticipateRate}%</T>
              </TB>
              <TB>
                <TT>전체 피드백 개수</TT>
                <T>
                  YES {totalYesFeedbackCount} / NO {totalNoFeedbackCount}
                </T>
              </TB>
            </InnerBox2>
          </InnerBox>
        </Detail>
      ) : (
        <Detail2>
          <ButtonBox>
            <TeamButton onClick={() => handleButtonClick("team")}>
              팀 정보
            </TeamButton>
            <FeedbackButton onClick={() => handleButtonClick("feedback")}>
              받은 피드백
            </FeedbackButton>
          </ButtonBox>
          <InnerBox>
            <InnerBox1 style={{ width: "49.5%", margin: "3vh 0 0 0" }}>
              <FeedbackTitle>
                <span style={{ color: "#1AD079" }}>YES</span> 피드백
              </FeedbackTitle>
              <FeedbackText
                style={{
                  marginLeft: "35px",
                  className: "hide-on-small-screen",
                }}
              >
                <FT>
                  <ul>
                    {yesFeedbackContents.map((content, index) => (
                      <li key={index}>{content}</li>
                    ))}
                  </ul>
                </FT>
              </FeedbackText>
            </InnerBox1>
            <VerticalLine />
            <InnerBox2 style={{ width: "49.5%", marginLeft: "0" }}>
              <FeedbackTitle>
                <span style={{ color: "#FF7D33" }}>NO</span> 피드백
              </FeedbackTitle>
              <FeedbackText style={{ marginLeft: "20px" }}>
                <FT>
                  <ul>
                    {noFeedbackContents.map((content, index) => (
                      <li key={index}>{content}</li>
                    ))}
                  </ul>
                </FT>
              </FeedbackText>
            </InnerBox2>
          </InnerBox>
        </Detail2>
      )}
    </DetailContainer>
  );
}
