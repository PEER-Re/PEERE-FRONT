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
  const [noStringArray, setNoStringArray] = useState([]);
  const [yesStringArray, setYesStringArray] = useState([]);
  const [updateTime, setUpdateTime] = useState("");
  const [memberNum, setMemberNum] = useState();

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
      setMemberNum(response.data.data.totalEvaluationNum);

      // 배열 초기화
      const noNumberArray = [];
      const yesNumberArray = [];
      const noStringArray = [];
      const yesStringArray = [];

      for (const key in NoData) {
        if (key.includes("Num")) {
          noNumberArray.push(NoData[key]);
        }
      }

      for (const key in NoData) {
        if (key.includes("bad")) {
          const value = NoData[key];
          if (typeof value === "string" && value !== "") {
            noStringArray.push(value);
          }
        }
      }
      console.log(noStringArray);

      for (const key in YesData) {
        if (key.includes("Num")) {
          yesNumberArray.push(YesData[key]);
        }
      }

      for (const key in YesData) {
        if (key.includes("good")) {
          const value = YesData[key];
          if (typeof value === "string" && value !== "") {
            yesStringArray.push(value);
          }
        }
      }

      setNoNumberArray(noNumberArray);
      setYesNumberArray(yesNumberArray);
      setNoStringArray(noStringArray);
      setYesStringArray(yesStringArray);
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
            comment={`${yesStringArray[0]}`}
            rate={`${yesNumberArray[0]}/${memberNum}`}
            backgroundcolor={getYesBackgroundColor(yesNumberArray[0])}
          />
          <Evaluate
            comment={`${yesStringArray[1]}`}
            rate={`${yesNumberArray[1]}/${memberNum}`}
            backgroundcolor={getYesBackgroundColor(yesNumberArray[1])}
          />
          <Evaluate
            comment={`${yesStringArray[2]}`}
            rate={`${yesNumberArray[2]}/${memberNum}`}
            backgroundcolor={getYesBackgroundColor(yesNumberArray[2])}
          />
          <Evaluate
            comment={`${yesStringArray[3]}`}
            rate={`${yesNumberArray[3]}/${memberNum}`}
            backgroundcolor={getYesBackgroundColor(yesNumberArray[3])}
          />
          <Evaluate
            comment={`${yesStringArray[4]}`}
            rate={`${yesNumberArray[4]}/${memberNum}`}
            backgroundcolor={getYesBackgroundColor(yesNumberArray[4])}
          />
          <Evaluate
            comment={`${yesStringArray[5]}`}
            rate={`${yesNumberArray[5]}/${memberNum}`}
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
            comment={`${noStringArray[0]}`}
            rate={`${noNumberArray[0]}/${memberNum}`}
            backgroundcolor={getBackgroundColor(noNumberArray[0])}
          />
          <Evaluate
            comment={`${noStringArray[1]}`}
            rate={`${noNumberArray[1]}/${memberNum}`}
            backgroundcolor={getBackgroundColor(noNumberArray[1])}
          />
          <Evaluate
            comment={`${noStringArray[2]}`}
            rate={`${noNumberArray[2]}/${memberNum}`}
            backgroundcolor={getBackgroundColor(noNumberArray[2])}
          />
          <Evaluate
            comment={`${noStringArray[3]}`}
            rate={`${noNumberArray[3]}/${memberNum}`}
            backgroundcolor={getBackgroundColor(noNumberArray[3])}
          />
          <Evaluate
            comment={`${noStringArray[4]}`}
            rate={`${noNumberArray[4]}/${memberNum}`}
            backgroundcolor={getBackgroundColor(noNumberArray[4])}
          />
          <Evaluate
            comment={`${noStringArray[5]}`}
            rate={`${noNumberArray[5]}/${memberNum}`}
            backgroundcolor={getBackgroundColor(noNumberArray[5])}
          />
        </FeedBackType>
      </ReportBox>
    </MainContainer>
  );
}

export default PersonalReport;
