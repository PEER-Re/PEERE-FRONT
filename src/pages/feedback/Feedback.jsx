import React, { useEffect, useState } from "react";
import {
  MainCheck,
  FeedbackTextBox,
  MyFeedbackBox,
  YesNoBox,
  TextFeedback1,
  TextFeedback2,
  Yes,
  No,
  Person,
  Who,
  TeamProfImg,
  Team,
  MemberName,
  How,
  FeedbackList1,
  FeedbackList2,
  FeedbackLLine,

} from "/src/styles/style";

import axios from "axios";
import ProjectIdStore from "/src/stores/projectId/ProjectIdStore";

function FeedbackUsers() {

  const accessToken = localStorage.getItem('accessToken');
  const selectedPRId = ProjectIdStore((state) => state.selectedPRId); // 프로젝트 id

  const [feedbacks, setFeedbacks] = useState();

  useEffect(() => {
    const getFeedbacks = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_SERVER_HOST}/api/projects/${selectedPRId}/feedback`, {
          headers: {
            'Authorization': accessToken,
          }
        });
        console.log('피드백 조회 성공', response.data);
        setFeedbacks(response.data.data.sendFeedbackList);
      } catch(error) {
        console.log(error);
      }
  }

  getFeedbacks();
  }, [])
  // 피드백 get


  return (
    <MainCheck>
      <FeedbackTextBox>
        피드백관리
      </FeedbackTextBox>
      {/* <FeedbackDesign src="src/assets/images/background/Union.svg"/>  */}
      <MyFeedbackBox>
        <YesNoBox>
          <div style = {{ width: '1000px'}}> </div>
          <TextFeedback1><Yes>YES</Yes> 피드백 </TextFeedback1>
          <TextFeedback2><No>NO</No> 피드백 </TextFeedback2>
       </YesNoBox>
       <Person>
            <TeamProfImg src="src/assets/images/profile/profile.png" />
          <Who>  
            <MemberName>김준희</MemberName>
            <Team>피어리 마케팅 A팀</Team>
          </Who>

          <FeedbackLLine></FeedbackLLine>
          
         <How>
            <FeedbackList1>
              ∙연락이 잘 돼요.
              
            </FeedbackList1>
            <FeedbackList2>
              ∙연락이 안 돼요.
              </FeedbackList2>
          </How>
          
       </Person>
      </MyFeedbackBox>
    </MainCheck>
  );
}

export default FeedbackUsers;