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

import axios from "axios";

const Team_Name = "PEER:Re";
const Team_Member_Count = "10";

const teamsData = [
  {
    Team_Name: "팀 A",
    Team_Member_Count: 8,
    Team_Intro: "이 팀은 A팀입니다.",
    Team_Position: "팀장",
    Team_Selected: "no",
  },
  {
    Team_Name: "팀 B",
    Team_Member_Count: 6,
    Team_Intro: "이 팀은 B팀입니다.",
    Team_Position: "팀원",
    Team_Selected: "no",
  },
  {
    Team_Name: "팀 C",
    Team_Member_Count: 7,
    Team_Intro: "이 팀은 C팀입니다.",
    Team_Position: "팀원",
    Team_Selected: "no",
  },
  {
    Team_Name: "팀 D",
    Team_Member_Count: 5,
    Team_Intro: "이 팀은 D팀입니다.",
    Team_Position: "팀장",
    Team_Selected: "no",
  },
  {
    Team_Name: "팀 E",
    Team_Member_Count: 9,
    Team_Intro: "이 팀은 E팀입니다.",
    Team_Position: "팀원",
    Team_Selected: "no",
  },
  {
    Team_Name: "팀 F",
    Team_Member_Count: 4,
    Team_Intro: "이 팀은 F팀입니다.",
    Team_Position: "팀장",
    Team_Selected: "no",
  },
];

const projects = [
  {
    name: "1분기 프로젝트 A",
    period: "2023.12.28 ~ 2024.01.10",
    projectState: "종료됨",
  },
  {
    name: "2분기 프로젝트 B",
    period: "2024.04.01 ~ 2024.06.30",
    projectState: "진행중",
  },
  {
    name: "3분기 프로젝트 C",
    period: "2024.07.01 ~ 2024.09.30",
    projectState: "진행중",
  },
  {
    name: "4분기 프로젝트 D",
    period: "2024.10.01 ~ 2024.12.31",
    projectState: "종료됨",
  },
  {
    name: "5분기 프로젝트 E",
    period: "2025.01.01 ~ 2025.03.31",
    projectState: "진행중",
  },
  {
    name: "6분기 프로젝트 F",
    period: "2025.04.01 ~ 2025.06.30",
    projectState: "종료됨",
  },
];

export default function TeamSpace() {

  useEffect(() => {
    const getData = () => {
      axios.get(`${import.meta.env.VITE_APP_SERVER_HOST}/oauth2/authorization/kakao`)
      .then(response => {
          console.log(response.data);
      })
      .catch(error => {
          console.error(error);
      });
  };

  getData();

  }, []);

  const [teams, setTeams] = useState([...teamsData]);
  const [selectedTeamIndex, setSelectedTeamIndex] = useState([]);
  const navigate = useNavigate();

  const handleWasteBtnClick = () => {
    const updatedTeams = teams.filter(
      (team, index) => !selectedTeamIndex.includes(index)
    );
    setSelectedTeamIndex([]);
    setTeams(updatedTeams);
  };

  const handleCheckBtnClick = (index) => {
    const isSelected = selectedTeamIndex.includes(index);

    setSelectedTeamIndex((prevIndex) =>
      isSelected
        ? prevIndex.filter((idx) => idx !== index)
        : [...prevIndex, index]
    );
    const updatedTeams = [...teams];
    updatedTeams[index].Team_Selected = isSelected ? "no" : "yes";
    setTeams(updatedTeams);
  };

  useEffect(() => {
    console.log(selectedTeamIndex);
  }, [selectedTeamIndex]);
  

  return (
    <div>
      <Container>
        <Title style={{ height: "35px" }}>팀 스페이스</Title>
      </Container>

      <Top_Container>
        <Team_List_Container>
          <MyTeam_Title>
            나의 팀
            <WasteImg onClick={() => handleWasteBtnClick()} />
          </MyTeam_Title>
          <ScrollBox>
            {teams.map((team, index) => (
              <Team_Select key={index}>
                {team.Team_Position === "팀장" ? (
                  <Check_Box
                    $imageurl={
                      team.Team_Selected === "yes"
                        ? CheckedButton
                        : NoncheckedButton
                    }
                    onClick={() => handleCheckBtnClick(index)}
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

                <Team_Bar>
                  <Role_Box
                    style={{
                      backgroundColor:
                        team.Team_Position === "팀장" ? "#1ad079" : "#07133B",
                    }}
                  >
                    {team.Team_Position}
                  </Role_Box>
                  <Team_Info_Container>
                    <p>{team.Team_Name}</p>
                    <p>{team.Team_Member_Count}명</p>
                    <p>'{team.Team_Intro}'</p>
                  </Team_Info_Container>
                  <EnterImg />
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
                    project.projectState === "종료됨"
                      ? TickBoxImage
                      : SaturationImage
                  }
                />
                <State_Box
                  style={{
                    backgroundColor:
                      project.projectState === "종료됨" ? "#FF9A6C" : "#1AD079",
                  }}
                >
                  {project.projectState}
                </State_Box>
              </Project_State>
              <Project_Info_Container>
                <p className="projectName">{project.name}</p>
                <p className="period">{project.period}</p>
              </Project_Info_Container>
              <Result_Report_Btn onClick={() => navigate("/result-report")}>
                <p>결과보기</p>
                <ChevronRightImg />
              </Result_Report_Btn>
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
  max-height: 400px; /* 뷰포트의 높이보다 작도록 설정 */
  display: flex;
  text-align: left;
  margin-top: 20px;
  overflow-x: auto;
  padding: 10px 0 10px 5px;
  flex-flow: row nowrap;
  overflow-y: hidden;
`;

const Project_Box = styled.div`
  box-sizing: border-box;
  min-width: 250px;
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
  box-sizing: border-box;
  padding-left: 20px;

  .projectName {
    font-size: 20px;
    font-weight: 600;
    margin: 40px 0 0 0;
  }

  .period {
    font-size: 14px;
    font-weight: 600;
    margin-top: 0;
    padding-bottom: 110px;
  }
`;

const Result_Report_Btn = styled.div`
  box-sizing: border-box;
  width: 90px;
  display: flex;
  align-items: center;
  margin-top: auto;
  align-self: end;
  padding: 5px 5px 8px 5px;
  cursor: pointer;

  p {
    font-size: 15px;
    font-weight: 500;
    margin: 0;
  }
`;

const ChevronRightImg = styled.div`
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  background: url(${ChevronRightImage});
  background-repeat: no-repeat;
  background-position: left center;
  display: flex;
  align-items: center;
  margin: 0 0 0 -7px;
`;
