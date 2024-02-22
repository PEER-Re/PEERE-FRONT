import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import TestPage from "/src/pages/test/TestPage.jsx";
import {
  ContentWrapper,
  HeaderWrapper,
  LeftBody,
  MainWrapper,
  RightBody,
} from "/src/styles/style.js";
import SideBar from "/src/components/sidebar/SideBar";
import Header from "/src/components/header/Header";
import TeamSpace from "./pages/team-space/TeamSpace";
import TeamReport from "/src/pages/team-report/TeamReport";
import ResultReport from "/src/pages/result-report/ResultReport";
import PersonalReport from "./pages/personal-report/PersonalReport";
import CreateTeam from "./pages/create-team/CreateTeam";
import CreateProject from "./pages/create-team/CreateProject";
import Feedback from "./pages/feedback/Feedback";
import FeedbackUsers from "./pages/feedback-users/FeedbackUsers";
import Home from "./pages/home/Home";

import TeamSpaceStore from "/src/stores/teamSpace/TeamSpaceStore";
import ProjectIdStore from "/src/stores/projectId/ProjectIdStore";


// route 설정 해주세요
// 경로 "/"는 추후 각자 설정해주세요.
function App() {
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    // 경로 변경 시 배경 이미지 변경
    showLogin();
    isSpecifixBg();
    teamSpaceBg();

    const accessToken = localStorage.getItem('accessToken'); // 토큰 가져오기
/*
    // 로그인 확인 처리
    if(location.pathname !== "/") { // 첫 페이지가 아니라면
      if (accessToken && accessToken !== "undefined" && accessToken !== undefined) {
        // 토큰이 있다면 아무 일 없다.
      } else {
        // 없다면 첫 페이지로 이동 
        alert("로그인이 필요합니다.");
        navigate("/"); 
      }
    } else {
      // 첫 페이지라면
      if (accessToken && accessToken !== "undefined" && accessToken !== undefined) {
        navigate("/team-space")// 토큰이 있다면 팀 스페이스로 이동
      } else {
        // 없다면 아무 일 없다.
      }
    }
    */

  }, [location]); 

  // 로그인 페이지 사이드바 숨김 함수
  const showLogin = () => {
    // 나중에 로그인 페이지 경로로 변경해주세요.
    const showOnRoute = ["/"];
    return !showOnRoute.includes(location.pathname);
  };

  // 팀 스페이스 생성 배경색 지정
  const isSpecifixBg = () => {
    // 나중에 팀 스페이스 생성 페이지로 변경해주세요.
    const specifixBgRoute = ["/create-team", "/create-project"];
    return !specifixBgRoute.includes(location.pathname);
  };

  // 팀 스페이스 생성 배경색 지정
  const teamSpaceBg = () => {
    // 나중에 팀 스페이스 생성 페이지로 변경해주세요.
    const teamSpaceBg = ["/team-space"];
    return !teamSpaceBg.includes(location.pathname);
  };

  // 아래에 로그인 페이지 구현
  // 단, 아래는 예시 스타일이기 때문에 FirstMainWrapper 스타일은 적절하게 변경해주세요.
  if(!showLogin()) {
    return (
  <Home />
    )
  }

  return (
    <MainWrapper>
      <LeftBody>
        <SideBar location={location} />
      </LeftBody>
      <RightBody>
        <HeaderWrapper>
          <Header location={location} />
        </HeaderWrapper>
        <ContentWrapper $isbg={isSpecifixBg()} $istsbg={teamSpaceBg()}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/test" element={<TestPage />} />
            <Route path="/team-space" element={<TeamSpace/>} />
            <Route path="/team-report" element={<TeamReport />} />
            <Route path="/personal-report" element={<PersonalReport />} />
            <Route path="/result-report" element={<ResultReport />} />
            <Route path="/create-team" element={<CreateTeam />} />
            <Route path="/create-project" element={<CreateProject />} />
            <Route path="/feedback" element = {<Feedback />} />
            <Route path="/feedback/users" element = {<FeedbackUsers />} />
          </Routes>
        </ContentWrapper>
      </RightBody>
    </MainWrapper>
  );
}

export default App;
