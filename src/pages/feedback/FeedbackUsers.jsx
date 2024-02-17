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
  Assess1,
  Assess2,
  FeedbackLine,
  Button,
  Block,
} from "/src/styles/style";
import axios from "axios";
import ProjectIdStore from "/src/stores/projectId/ProjectIdStore";
import UsersStore from "/src/stores/users/UsersStore";

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
        </TeamName>
      </FeedBackNameBox>
      <FeedbackBox>
        <UsersFeedBackType>
          <FeedbackAnswer>
            <Highlight1>YES</Highlight1> 피드백
          </FeedbackAnswer>
            <Assess1>연락이 잘돼요.</Assess1>
         
            <Assess1>시간약속을 잘지켜요.</Assess1>
         
          
            <Assess1>능력이 뛰어나요.</Assess1>
         
            <Assess1>말을 조리있게 잘해요.</Assess1>
       
          
            <Assess1>빈틈이 없어요.</Assess1>
         
          <Button onClick={(() => PostFeedbacks())}>완료</Button>
        </UsersFeedBackType>
      
        <FeedbackLine />
        
        <UsersFeedBackType>
          <FeedbackAnswer>
            <Highlight2>NO</Highlight2> 피드백
          </FeedbackAnswer>
       
            <Assess2>연락이 안 돼요.</Assess2>
       
         
            <Assess2>시간약속을 안 지켜요.</Assess2>
    
            <Assess2>능력이 뒤떨어져요.</Assess2>
      
       
            <Assess2>말을 조리있게 못해요.</Assess2>
    
            <Assess2>빈틈이 있어요.</Assess2>
      
          <Block/>
        </UsersFeedBackType>
      </FeedbackBox>
    </MainFeedback>
  );
}

export default FeedbackUsers;