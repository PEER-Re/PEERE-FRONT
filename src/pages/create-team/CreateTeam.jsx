import React from "react";
import {
  TeamContainer,
  CreateDetail,
  CreateLogo,
  LogoContainer,
  CreateTitle,
  CreateName,
  NameLabel,
  NameBox,
  CreateIntro,
  IntroLabel,
  IntroBox,
  CreateLeader,
  LeaderLabel,
  LeaderBox,
  CreateLeaderProfile,
  CreateLeaderName,
  CreateOkay,
} from "/src/styles/style";

function CreateTeam() {
  return (
    <TeamContainer>
      <CreateDetail>
        <CreateTitle>팀 스페이스 생성</CreateTitle>
        {/*  */}
        <CreateName>
          <NameLabel>팀 이름</NameLabel>
          <NameBox></NameBox>
        </CreateName>
        {/*  */}
        <CreateIntro>
          <IntroLabel>팀 이름</IntroLabel>
          <IntroBox></IntroBox>
        </CreateIntro>
        {/*  */}
        <CreateLeader>
          <LeaderLabel>팀장</LeaderLabel>
          <LeaderBox>
            <CreateLeaderProfile src="src/assets/images/team-create/leaderprof.png" />
            <CreateLeaderName>BBB</CreateLeaderName>
          </LeaderBox>
        </CreateLeader>
        {/*  */}
        <CreateOkay>완료</CreateOkay>
      </CreateDetail>
      <LogoContainer>
        <CreateLogo src="src/assets/images/team-create/team-create-logo.png" />
      </LogoContainer>
    </TeamContainer>
  );
}

export default CreateTeam;
