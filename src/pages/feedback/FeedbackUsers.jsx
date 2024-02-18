import React, { useState } from "react";
import {
  MainFeedback,
  FeedbackUsersTextBox,
  FeedBackNameBox,
  FeedbackBox,
  FeedbackAnswer,
  UsersFeedBackType,
  Highlight1,
  Highlight2,
  UserTeamProfImg,
  TeamName,
  Name,
  Role,
  OtherMember,
  OtherMemberName,
  OtherMemberName1,
  FeedbackLine,
  Button,
  Block,
} from "/src/styles/style";
import axios from "axios";
import ProjectIdStore from "/src/stores/projectId/ProjectIdStore";
import UsersStore from "/src/stores/users/UsersStore";
import YesFeedbackList from "./YesFeedbackList";
import NoFeedbackList from "../feedback/NoFeedbackList";

function FeedbackUsers() {

  const accessToken = localStorage.getItem('accessToken');
  const selectedPRId = ProjectIdStore((state) => state.selectedPRId); // 프로젝트 id

  const userName = UsersStore((state) => state.userName); // 사용자 이름
  const userImage = UsersStore((state) => state.userProfileImage); // 사용자 이미지
  const teamUsers = UsersStore((state) => state.teamUsers); // 팀 내 유저 리스트

  // 유저 선택 리스트에서,  teamUsers 배열의 index대로 유저 리스트를 표시한 후, 
  // 개별 유저 선택 시 selectUser에 선택한 유저의 id를 저장하면 됩니다. teamUsers[선택인덱스] 로 저장해주시면 됩니다.

  const selectUser = useState(teamUsers[0]); // 팀 유저의 0번째 사용자의 id를 초기 값으로 부여한다.

// 피드백 전송 api
    const PostFeedbacks = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_SERVER_HOST}/api/projects/${selectedPRId}/users/${selectUser}/feedback`, {
          headers: {
            'Authorization': accessToken,
          }
        });
        console.log('피드백 전송 성공', response.data);
      } catch(error) {
        console.log(error);
      }
  }

  return (
    <MainFeedback>
      <FeedbackUsersTextBox>
        피드백관리
      </FeedbackUsersTextBox>

        <FeedBackNameBox>
          <UserTeamProfImg src={userImage}/>
           <TeamName>
            <Name>{userName}</Name>
            <Role>피어리마케팅A팀</Role>
           </TeamName>
        </FeedBackNameBox>

        <OtherMember>

              <OtherMemberName1> </OtherMemberName1>
              <OtherMemberName>{userName}</OtherMemberName>
              <OtherMemberName>{userName}</OtherMemberName>
              <OtherMemberName>{userName}</OtherMemberName>
              <OtherMemberName>{userName}</OtherMemberName>
              <OtherMemberName>{userName}</OtherMemberName>
              <OtherMemberName>{userName}</OtherMemberName>
              <OtherMemberName>{userName}</OtherMemberName>
          </OtherMember>


      <FeedbackBox>
        <UsersFeedBackType>
          <FeedbackAnswer>
            <Highlight1>YES</Highlight1> 피드백
          </FeedbackAnswer>

          <YesFeedbackList/>

          <Button onClick={(() => PostFeedbacks())}>완료</Button>
        </UsersFeedBackType>
      
        <FeedbackLine />
        
        <UsersFeedBackType>
          <FeedbackAnswer>
            <Highlight2>NO</Highlight2> 피드백
          </FeedbackAnswer>
       
          <NoFeedbackList/>
        <Block/>
        </UsersFeedBackType>
      </FeedbackBox>
    </MainFeedback>
  );
}

export default FeedbackUsers;