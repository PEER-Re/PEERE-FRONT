import { Route, Routes } from "react-router-dom";
import TestPage from "/src/pages/test/TestPage.jsx";
import {
  ContentWrapper,
  HeaderWrapper,
  LeftBody,
  MainWrapper,
  RightBody,
} from "/src/styles/style.js";
import SideBar from "/src/components/sidebar/SideBar";
import Header from "/src/components/header/header";
import TeamReport from "/src/pages/team-report/TeamReport";
import ResultReport from "/src/pages/result-report/ResultReport";
import PersonalReport from "./pages/personal-report/PersonalReport";
import CreateTeam from "./pages/create-team/CreateTeam";
import CreateProject from "./pages/create-team/CreateProject";

import Feedback from "./pages/feedback/Feedback";
import FeedbackUsers from "./pages/feedback/FeedbackUsers";
import Home from "./pages/home/Home";

import { FirstMainWrapper } from "./styles/style";


// route 설정 해주세요
// 경로 "/"는 추후 각자 설정해주세요.
function App() {

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
        <SideBar />
      </LeftBody>
      <RightBody>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <ContentWrapper $isbg={isSpecifixBg()} $istsbg={teamSpaceBg()}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/test" element={<TestPage />} />
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






//--------------------------------------------------------------------------------------------











// import { Route, Routes } from "react-router-dom";
// import TestPage from "/src/pages/test/TestPage.jsx";
// import {
//   ContentWrapper,
//   HeaderWrapper,
//   LeftBody,
//   MainWrapper,
//   RightBody,
// } from "/src/styles/style.js";
// import SideBar from "/src/components/sidebar/SideBar";
// import Header from "/src/components/header/header";
// import TeamReport from "/src/pages/team-report/TeamReport";
// import ResultReport from "/src/pages/result-report/ResultReport";
// import PersonalReport from "./pages/personal-report/PersonalReport";
// import Feedback from "./pages/feedback/Feedback";
// import FeedbackUsers from "./pages/feedback/FeedbackUsers";
// import Home from "./pages/home/Home";

// // route 설정 해주세요
// // 경로 "/"는 추후 각자 설정해주세요.
// function App() {
//   return (
//     <MainWrapper>
//       <ContentWrapper>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//       </Routes>
//       </ContentWrapper>
//       </MainWrapper>
//   );
// }
// export default App;