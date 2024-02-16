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

export default function Summary() {
  const [button, setButton] = useState("team");

  const handleButtonClick = (btn) => {
    setButton(btn);
  };

  useEffect(() => {}, [button]);
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
                <T style={{ maxWidth: "20vh" }}>PEER:RE</T>
              </TB>
              <TB>
                <TT>팀원 수</TT>
                <T>10명</T>
              </TB>
              <TB>
                <TT>프로젝트 명</TT>
                <T style={{ maxWidth: "18vh" }}>1분기 프로젝트</T>
              </TB>
            </InnerBox1>
            <VerticalLine />
            <InnerBox2>
              <TB>
                <TT>프로젝트 기간</TT>
                <T>2023.12.28 ~ 2024.01.11</T>
              </TB>
              <TB>
                <TT>전체 동료평가 참여율</TT>
                <T>66%</T>
              </TB>
              <TB>
                <TT>전체 피드백 개수</TT>
                <T>YES 26 / NO 20</T>
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
              <FeedbackText style={{marginLeft: "35px", className: "hide-on-small-screen"}}>
                <FT>
                  <ul>
                    <li>• 연락이 잘 돼요.</li>
                    <li>• 시간 약속을 잘 지켜요.</li>
                    <li>• 능력이 뛰어나요.</li>
                  </ul>
                </FT>
                <FT>
                  <ul>
                    <li>• 말을 조리있게 잘해요.</li>
                    <li>• 빈틈이 없어요.</li>
                    <li>• 재미있어요.</li>
                  </ul>
                </FT>
              </FeedbackText>
            </InnerBox1>
            <VerticalLine />
            <InnerBox2 style={{ width: "49.5%", marginLeft: "0" }}>
              <FeedbackTitle >
                <span style={{ color: "#FF7D33" }}>NO</span> 피드백
              </FeedbackTitle>
              <FeedbackText style={{marginLeft: "20px"}}>
                <FT>
                  <ul>
                    <li>• 연락이 안 돼요.</li>
                    <li>• 시간 약속을 안 지켜요.</li>
                    <li>• 능력이 뒤떨어져요.</li>
                  </ul>
                </FT>
                <FT>
                  <ul>
                    <li>• 말을 조리있게 못해요.</li>
                    <li>• 빈틈이 있어요.</li>
                    <li>• 재미없어요.</li>
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
