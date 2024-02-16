import styled from "styled-components";
import {} from "../../styles/style";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Title } from "/src/styles/style";
import PeopleImage from "/src/assets/images/team-space/People.png";
import WasteImage from "/src/assets/images/team-space/Waste.png";
import EnterImage from "/src/assets/images/team-space/Enter.png";
import NoncheckedButton from "/src/assets/images/team-space/NoncheckedButton.png";
import CheckedButton from "/src/assets/images/team-space/CheckedButton.png";
import AddProjectImage from "/src/assets/images/team-space/AddProject.png";
import TickBoxImage from "/src/assets/images/team-space/TickBox.png";
import SaturationImage from "/src/assets/images/team-space/Saturation.png";
import ChevronRightImage from "/src/assets/images/team-space/ChevronRight.png";
import ChevronRight2Image from "/src/assets/images/team-space/ChevronRight2.png";

// store
import TeamSpaceStore from "/src/stores/teamSpace/TeamSpaceStore";
import ProjectIdStore from "/src/stores/projectId/ProjectIdStore";

import axios from "axios";
import {
  projectResponseDummy,
  teamspaceResponseDummy,
} from "/src/data/team-space/dummy";

const Team_Name = "PEER:Re";
const Team_Member_Count = "10";

export default function TeamSpace() {
  // localstorage에서 토큰 가져오기

  // 임시 토큰 세팅
  localStorage.setItem(
    "accessToken",
    `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcwOTkxMTQzNCwic29jaWFsSWQiOiJ0aGRkbXMyMDA5QG5hdmVyLmNvbSJ9.Kd3e8Xm2k_SgnyWMf84p7WPd9FzNwBF7VDLSD7h55my8J--xBuYNjKM8mexLg5oPVSHr7sHchssKMRNKpVPx2A`
  );
  const accessToken = localStorage.getItem("accessToken");
  // store 파일의 actions 가져오기 사용자가 선택한 teamspace
  const { setSelectedTSId, setSelectedTSName } = TeamSpaceStore(
    (state) => state
  );
  const { setSelectedPRId, setSelectedPRName } = ProjectIdStore(
    (state) => state
  );
  const selectedTSId = TeamSpaceStore((state) => state.selectedTSId);

  const [teams, setTeams] = useState(teamspaceResponseDummy); // 팀 스페이스 정보 api 저장용 초기 값은 더미 데이터
  console.log("teams : ", teams);
  const [projects, setProjects] = useState(projectResponseDummy); // project 저장용 초기 값은 더미 데이터
  const [selectedTeamIndex, setSelectedTeamIndex] = useState(); // 체크박스 선택
  console.log(selectedTeamIndex);

  const [status, setStatus] = useState(false); // api 상태관리용
  const [latestPJIdx, setLatestPJIdx] = useState(null);

  const navigate = useNavigate();

  // 유저 정보 렌더링 함수
  const getUserInfo = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_SERVER_HOST}/api/teamspace/teamspaces`,
        {
          headers: {
            Authorization: accessToken,
          },
        }
      );
      console.log("팀 스페이스 조회 성공");
      setTeams(response.data.data.teamspaceResponseDtoList);
    } catch (error) {
      console.log(error);
    }
  };

  // 팀 스페이스에 따른 프로젝트 리스트 호출 함수
  const getProjectsInfo = async (index) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_APP_SERVER_HOST
        }/api/teamspace/${index}/projects`,
        {
          headers: {
            Authorization: accessToken,
          },
        }
      );
      setProjects(response.data.data.projectResponseDtoList);
      ShowUndoProject(projects);
      // console.log("프로젝트 조회 성공");
    } catch (error) {
      console.log(error);
    }
  };

  // 팀 스페이스 클릭 후 해당 프로젝트 출력 함수
  const changeTeamSpace = (index) => {
    setSelectedTSId(index);
    setSelectedTSName(teams[index].name); // 선택한 팀 이름 저장
    getProjectsInfo(index); // 원래 id에 1 더해서 호출
  };

  // 시작 시 useEffect
  useEffect(() => {
    getUserInfo(); // 유저 정보 렌더링
    getProjectsInfo(selectedTSId); // 선택 팀 스페이스에 대한 프로젝트 리스트 호출
  }, []);

  // 팀 스페이스 삭제 전 선택 함수, 선택한 index가 배열에 포함되어 있다면 이미지를 변경한다.
  const selectCheckBox = (index) => {
    setSelectedTeamIndex(index); // index로 세팅,
  };

  // 팀 스페이스 삭제 함수, 한 개씩만 삭제한다.
  const deleteTeamSpace = async (index) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_APP_SERVER_HOST}/api/teamspace/${index}`,
        {
          headers: {
            Authorization: accessToken,
          },
        }
      );
      console.log("팀 스페이스 삭제 성공", response.data);
      setStatus(!status);
    } catch (error) {
      console.log(error);
    } finally {
      getUserInfo();
      getProjectsInfo(selectedTSId);
    }
  };

  // 결과 보기로 이동한다. 이동하면서 선택 프로젝트 상태를 변경한다.
  const navigateResult = async (index) => {
    navigate("/result-report");
    setSelectedPRId(index); // 선택한 프로젝트 id를 저장한다.
    setSelectedPRName(projects[index].title); // 선택한 프로젝트 이름을 저장한다.
  };

  // 프로젝트 목록을 반복하면서 상태가 "종료"이면서 "endDay"가 가장 늦은 프로젝트 찾기.
  const ShowUndoProject = async (projectList) => {
    let latestProjectIdx = null;
    let latestEndDay = null;
    for (let i = 0; i < projectList.length; i++) {
      const project = projectList[i];
      if (project.status === "종료" && project.endDay) {
        const endDay = new Date(project.endDay);
        if (!latestEndDay || endDay > latestEndDay) {
          latestProjectIdx = i;
          latestEndDay = endDay;
        }
      }
    }
    setLatestPJIdx(latestProjectIdx);
  };

  return (
    <div>
      <Container>
        <Title style={{ height: "35px" }}>팀 스페이스</Title>
      </Container>

      <Top_Container>
        <Team_List_Container>
          <MyTeam_Title>
            나의 팀
            <WasteImg onClick={() => deleteTeamSpace(selectedTeamIndex)} />
          </MyTeam_Title>
          <ScrollBox>
            {teams.map((team, index) => (
              <Team_Select key={index}>
                {team.role === "Leader" ? (
                  <Check_Box
                    $imageurl={
                      selectedTeamIndex === index
                        ? CheckedButton
                        : NoncheckedButton
                    }
                    onClick={() => selectCheckBox(index)}
                  />
                ) : (
                  <div
                    style={{
                      width: "25px",
                      height: "25px",
                      paddingRight: "15px",
                    }}
                  ></div>
                )}

                <Team_Bar
                  style={{
                    backgroundColor:
                      selectedTSId === index
                        ? "rgba(26,208,121, 0.34)"
                        : "white",
                  }}
                >
                  <Role_Box
                    style={{
                      backgroundColor:
                        team.role === "Leader" ? "#1ad079" : "#07133B",
                    }}
                  >
                    {team.role === "Leader" ? "팀장" : "팀원"}
                  </Role_Box>
                  <Team_Info_Container>
                    <p style={{ width: "150px" }}>{team.name}</p>
                    <p style={{ width: "40px" }}>{team.size}명</p>
                    <p style={{ width: "500px" }}>'{team.profile}'</p>
                  </Team_Info_Container>
                  <EnterImg onClick={() => changeTeamSpace(index)} />
                </Team_Bar>
              </Team_Select>
            ))}
          </ScrollBox>
        </Team_List_Container>

        <Add_NewSpace_Button onClick={() => navigate("/create-team")}>
          <PeopleImg />
          <New_Space_Text>
            새로운
            <br />
            팀 스페이스
            <br />
            생성
          </New_Space_Text>
        </Add_NewSpace_Button>
      </Top_Container>

      <Bottom_Container>
        <Project_Title_Container>
          <Project_Title>
            <p>{Team_Name}</p>
            <p className="member">팀원 {Team_Member_Count}명</p>
          </Project_Title>
          <Add_New_Project_Btn onClick={() => navigate("/create-project")}>
            <AddProjectImg />
            <p>새 프로젝트 생성</p>
          </Add_New_Project_Btn>
        </Project_Title_Container>
        <Project_List_Container>
          {projects.map((project, index) => (
            <Project_Box key={index}>
              <Project_State>
                <TickBoxImg
                  $imageurl={
                    project.status === "종료" ? TickBoxImage : SaturationImage
                  }
                />
                <State_Box
                  style={{
                    backgroundColor:
                      project.status === "종료" ? "#FF9A6C" : "#1AD079",
                  }}
                >
                  {project.status}
                </State_Box>
              </Project_State>
              <Project_Info_Container>
                <p className="projectName">{project.title}</p>
                <p className="period">
                  {project.startDay} ~ {project.endDay}
                </p>
                {project.status === "종료" && index === latestPJIdx ? (
                  <p className="projectStatusDecision">평가철회</p>
                ) : (
                  <p
                    className="projectStatusDecision"
                    style={{ color: "transparent" }}
                  >
                    .
                  </p>
                )}
              </Project_Info_Container>
              {project.status === "종료" ? (
                <Result_Report_Btn onClick={() => navigateResult(index)}>
                  <p>결과 보기</p>
                  <ChevronRightImg imageurl={ChevronRightImage} />
                </Result_Report_Btn>
              ) : (
                <Result_Report_Btn>
                  <p>평가 종료</p>
                  <ChevronRightImg
                    imageurl={ChevronRight2Image}
                    style={{ marginLeft: "7px" }}
                  />
                </Result_Report_Btn>
              )}
            </Project_Box>
          ))}
        </Project_List_Container>
      </Bottom_Container>
    </div>
  );
}

const Top_Container = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 50px;
  text-align: left;
  gap: 30px;
`;

const Bottom_Container = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  text-align: left;
  margin-top: 10px;
`;

const Add_NewSpace_Button = styled.div`
  box-sizing: border-box;
  width: 10%;
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
`;

const PeopleImg = styled.div`
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  background: url(${PeopleImage});
  background-repeat: no-repeat;
`;

const New_Space_Text = styled.div`
  box-sizing: border-box;
  min-width: 100px;
  font-size: 15px;
  text-align: center;
  padding: 20px 0 20px 20px;
`;

const Team_List_Container = styled.div`
  /* border: 1px solid red; */
  box-sizing: border-box;
  width: 100%;
  height: 210px;
  display: flex;
  flex-direction: column;
  text-align: left;
  overflow-y: scroll;
`;

const MyTeam_Title = styled.div`
  box-sizing: border-box;
  min-width: 100px;
  border-bottom: 1px solid gray;
  text-align: left;
  padding: 0 0 0 10px;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px 45px;
  white-space: nowrap;
`;

const WasteImg = styled.div`
  box-sizing: border-box;
  width: 28px;
  height: 28px;
  margin: 0 0 10px 15px;
  background: url(${WasteImage});
  background-repeat: no-repeat;
  cursor: pointer;
`;

const ScrollBox = styled.div`
  overflow-y: scroll;
`;

const Team_Select = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  margin-bottom: 15px;
  align-items: center;
`;

const Check_Box = styled.div`
  box-sizing: border-box;
  width: 25px;
  height: 25px;
  background-image: url(${(props) => props.$imageurl});
  background-repeat: no-repeat;
  background-position: left center;
  background-size: contain;
  display: flex;
  align-items: center;
  padding-right: 38px;
  cursor: pointer; /* 클릭 가능하도록 커서 설정 */
`;

const Team_Bar = styled.div`
  /* border: 1px solid red; */
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  text-align: left;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  background-color: white;
  margin-right: 5px;
`;

const Role_Box = styled.div`
  box-sizing: border-box;
  height: 40px;
  width: 10%;
  min-width: 50px;
  max-width: 80px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  text-align: center;
  font-size: 19px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Team_Info_Container = styled.div`
  box-sizing: border-box;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  gap: 40px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  white-space: nowrap;

  p {
    /* border: 1px solid red; */
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const EnterImg = styled.div`
  box-sizing: border-box;
  width: 25px;
  height: 25px;
  background: url(${EnterImage});
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: auto;
  padding-right: 35px;
  cursor: pointer;
`;

const Project_Title_Container = styled.div`
  box-sizing: border-box;
  width: 77vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin-top: 15px;
`;

const Project_Title = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 26px;
  font-weight: 700;
  gap: 15px;
  padding-top: 20px;

  .member {
    font-size: 16px;
    margin-top: 18px;
  }
`;

const Add_New_Project_Btn = styled.div`
  box-sizing: border-box;
  min-width: 200px;
  font-size: 15px;
  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border-radius: 7px;
  background-color: #fff;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
`;

const AddProjectImg = styled.div`
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  background: url(${AddProjectImage});
  background-repeat: no-repeat;
  background-position: left center;
  display: flex;
  align-items: center;
`;

const Project_List_Container = styled.div`
  box-sizing: border-box;
  width: 77vw;
  height: calc(100vh - 500px); /* 뷰포트의 높이보다 작도록 설정 */
  max-height: 500px; /* 뷰포트의 높이보다 작도록 설정 */
  display: flex;
  text-align: left;
  margin-top: 20px;
  overflow-x: auto;
  padding: 10px 0 10px 5px;
  flex-flow: row nowrap;
`;

const Project_Box = styled.div`
  /* border: 1px solid red; */
  box-sizing: border-box;
  min-width: 250px;
  min-height: 210px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  flex-basis: calc(
    25% - 40px
  ); /* 한 줄에 3개씩 표시되도록 각 아이템의 기본 크기를 조정*/
  flex-shrink: 0;
  margin-bottom: 20px; /* 요소들 사이의 간격을 설정*/
`;

const Project_State = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: right;
  padding-top: 10px;
`;

const TickBoxImg = styled.div`
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  background-image: url(${(props) => props.$imageurl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: flex;
  align-items: center;
`;

const State_Box = styled.div`
  box-sizing: border-box;
  display: flex;
  border-radius: 10px;
  padding: 5px 20px;
  margin-right: 10px;
  font-weight: 600;
  font-size: 12px;
`;

const Project_Info_Container = styled.div`
  /* border: 1px solid blue; */
  box-sizing: border-box;
  padding-left: 20px;

  .projectName {
    font-size: 20px;
    font-weight: 600;
    margin: 40px 0 0 0;
  }

  .period {
    /* border: 1px solid red; */
    font-size: 14px;
    font-weight: 600;
    margin-top: 0;
  }

  .projectStatusDecision {
    /* border: 1px solid red; */
    box-sizing: border-box;
    font-size: 15px;
    font-weight: 700;
    margin-top: -7px;
    width: 40%;
    line-height: 20px;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

const Result_Report_Btn = styled.div`
  /* border: 1px solid red; */
  box-sizing: border-box;
  width: 110px;
  display: flex;
  align-items: center;
  margin-top: auto;
  align-self: end;
  justify-content: end;
  padding: 5px 5px 8px 5px;
  cursor: pointer;

  p {
    font-size: 15px;
    font-weight: 500;
    margin: 0;
  }
`;

const ChevronRightImg = styled.div`
  /* border: 1px solid red; */
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  background-image: url(${(props) => props.imageurl});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
`;
