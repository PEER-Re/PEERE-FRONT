import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MainContainer,
  HeaderBox,
  SelfBox,
  ReportBox,
  ReportName,
  FeedBackType,
  ContentLine,
  Highlight1,
  Highlight2,
  UpdateBox,
  UpdateImg,
  UpdateTime,
  ProfImg,
  ProfName,
  MyName,
  MyRole,
  IntroSelf,
} from "/src/styles/style";
import Evaluate from "/src/components/Evaluate/Evaluate.jsx";

import ProjectIdStore from "/src/stores/projectId/ProjectIdStore";

function PersonalReport() {
  const accessToken = localStorage.getItem("accessToken");

  const [profileNameApi, setProfileNameApi] = useState("");
  const [profileImgApi, setProfileImgApi] = useState("");
  const [teamName, setTeamName] = useState("");
  const [noNumberArray, setNoNumberArray] = useState([]);
  const [yesNumberArray, setYesNumberArray] = useState([]);
  const [updateTime, setUpdateTime] = useState("");

  const selectedPRId = ProjectIdStore((state) => state.selectedPRId); // 프로젝트 id

  useEffect(() => {
    // 페이지 렌더링 시 GET 요청 보내기
    sendGetRequest();
    setUpdateTime(getCurrentTime());
  }, []);

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }`;
  };

  const sendGetRequest = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_APP_SERVER_HOST
        }/api/projects/${selectedPRId}/my-report`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: accessToken,
          },
        }
      );

      console.log(response);
      const userInfo = response.data.data.userInfo;
      setProfileNameApi(userInfo.nickname);
      setProfileImgApi(userInfo.profileImageUrl);
      setTeamName(userInfo.teamName);
      const NoData = response.data.data.noFeedbackInfo;
      const YesData = response.data.data.yesFeedbackInfo;

      // 배열 초기화
      const noNumberArray = [];
      const yesNumberArray = [];

      for (const key in NoData) {
        if (key.includes("Num")) {
          noNumberArray.push(NoData[key]);
        }
      }

      for (const key in YesData) {
        if (key.includes("Num")) {
          yesNumberArray.push(YesData[key]);
        }
      }

      setNoNumberArray(noNumberArray);
      setYesNumberArray(yesNumberArray);
    } catch (error) {
      console.error(error.message);
    }
  };

  function getBackgroundColor(value) {
    switch (value) {
      case 0:
        return "rgba(217, 217, 217, 0.30)";
      case 1:
        return "rgba(255, 125, 51, 0.15)";
      case 2:
        return "rgba(255, 125, 51, 0.25)";
      case 3:
        return "rgba(255, 125, 51, 0.40)";
      case 4:
        return "rgba(255, 125, 51, 0.55)";
      case 5:
        return "rgba(255, 125, 51, 0.75)";
      case 6:
        return "rgba(255, 125, 51, 0.92)";
      default:
        return "rgba(0, 0, 0, 0)"; // 기본값 설정
    }
  }
  function getYesBackgroundColor(value) {
    switch (value) {
      case 0:
        return "rgba(217, 217, 217, 0.30)";
      case 1:
        return "rgba(26, 208, 121, 0.15)";
      case 2:
        return "rgba(26, 208, 121, 0.25)";
      case 3:
        return "rgba(26, 208, 121, 0.40)";
      case 4:
        return "rgba(26, 208, 121, 0.55)";
      case 5:
        return "rgba(26, 208, 121, 0.75)";
      case 6:
        return "rgba(26, 208, 121, 0.92)";
      default:
        return "rgba(0, 0, 0, 0)"; // 기본값 설정
    }
  }

  return (
    <MainContainer>
      <HeaderBox>
        개인리포트
        <UpdateBox>
          <UpdateImg src="src/assets/images/updatetime/Time.png" />
          <UpdateTime>최종 업데이트 : {updateTime}</UpdateTime>
        </UpdateBox>
      </HeaderBox>
      {/* */}
      <SelfBox>
        <IntroSelf>나</IntroSelf>
        <ProfImg src={profileImgApi} />
        <ProfName>
          <MyName>{profileNameApi}</MyName>
        </ProfName>
      </SelfBox>
      <ReportBox>
        <FeedBackType>
          <ReportName>
            <Highlight1>YES</Highlight1> 피드백
          </ReportName>
          <Evaluate
            comment="말을 조리있게 잘해요."
            rate={`${yesNumberArray[0]}/6`}
            backgroundcolor={getYesBackgroundColor(yesNumberArray[0])}
          />
          <Evaluate
            comment="연락이 잘돼요."
            rate={`${yesNumberArray[1]}/6`}
            backgroundcolor={getYesBackgroundColor(yesNumberArray[1])}
          />
          <Evaluate
            comment="능력이 뛰어나요."
            rate={`${yesNumberArray[2]}/6`}
            backgroundcolor={getYesBackgroundColor(yesNumberArray[2])}
          />
          <Evaluate
            comment="재미있어요."
            rate={`${yesNumberArray[3]}/6`}
            backgroundcolor={getYesBackgroundColor(yesNumberArray[3])}
          />
          <Evaluate
            comment="시간약속을 잘 지켜요."
            rate={`${yesNumberArray[4]}/6`}
            backgroundcolor={getYesBackgroundColor(yesNumberArray[4])}
          />
          <Evaluate
            comment="빈틈이 없어요."
            rate={`${yesNumberArray[5]}/6`}
            backgroundcolor={getYesBackgroundColor(yesNumberArray[5])}
          />
        </FeedBackType>

        <ContentLine />

        <FeedBackType>
          <ReportName>
            {" "}
            <Highlight2>NO</Highlight2> 피드백
          </ReportName>
          <Evaluate
            comment="말을 조리있게 못해요."
            rate={`${noNumberArray[0]}/6`}
            backgroundcolor={getBackgroundColor(noNumberArray[0])}
          />
          <Evaluate
            comment="연락이 안돼요."
            rate={`${noNumberArray[1]}/6`}
            backgroundcolor={getBackgroundColor(noNumberArray[1])}
          />
          <Evaluate
            comment="능력이 뒤떨어져요."
            rate={`${noNumberArray[2]}/6`}
            backgroundcolor={getBackgroundColor(noNumberArray[2])}
          />
          <Evaluate
            comment="재미없어요."
            rate={`${noNumberArray[3]}/6`}
            backgroundcolor={getBackgroundColor(noNumberArray[3])}
          />
          <Evaluate
            comment="시간약속을 잘 안지켜요."
            rate={`${noNumberArray[4]}/6`}
            backgroundcolor={getBackgroundColor(noNumberArray[4])}
          />
          <Evaluate
            comment="빈틈이 있어요."
            rate={`${noNumberArray[5]}/6`}
            backgroundcolor={getBackgroundColor(noNumberArray[5])}
          />
        </FeedBackType>
      </ReportBox>
    </MainContainer>
  );
}

export default PersonalReport;
