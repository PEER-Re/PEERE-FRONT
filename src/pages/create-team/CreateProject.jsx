import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CreateProjectApi from "../../api/createproject/CreateProjectApi";
import ProjectIdStore from "/src/stores/projectId/ProjectIdStore.js";
import TeamSpaceStore from "../../stores/teamSpace/TeamSpaceStore";

import {
  TeamContainer,
  CreateDetail,
  CreateLogo,
  LogoContainer,
  CreateTitle,
  CreateName,
  NameLabel,
  NameInput,
  CreateTeamProject,
  ProjectLabel,
  ProjectBox,
  CreateProjectProfile,
  CreateProjectName,
  CreateOkay,
} from "/src/styles/style";

function CreateProject() {
  const navigate = useNavigate();
  const selectedTeamId = TeamSpaceStore((state) => state.selectedTSId); // 팀 아이디 store에서 받아오기
  const { setSelectedPRName, setSelectedPRId } = ProjectIdStore((state) => state);

  const [projectName, setProjectName] = useState("");

  const handleResultBoxClick = async () => {
    try {
      const projectId = await CreateProjectApi(selectedTeamId, projectName);
      console.log(selectedTeamId, '번 팀의', projectId, '번 프로젝트가 생성 되었습니다.');
      setSelectedPRName(projectName);
      setSelectedPRId(projectId);
      navigate(`/team-space`);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <TeamContainer>
      <CreateDetail>
        <CreateTitle>프로젝트 생성</CreateTitle>
        {/*  */}
        <CreateName>
          <NameLabel>프로젝트 이름</NameLabel>
          <NameInput
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </CreateName>
        {/*  */}
        <CreateTeamProject>
          <ProjectLabel>팀장</ProjectLabel>
          <ProjectBox>
            <CreateProjectProfile src="src/assets/images/team-create/leaderprof.png" />
            <CreateProjectName>김민영</CreateProjectName>
          </ProjectBox>
        </CreateTeamProject>
        {/*  */}
        <CreateOkay onClick={handleResultBoxClick}>완료</CreateOkay>
      </CreateDetail>
      <LogoContainer>
        <CreateLogo src="src/assets/images/team-create/team-create-logo.png" />
      </LogoContainer>
    </TeamContainer>
  );
}

export default CreateProject;
