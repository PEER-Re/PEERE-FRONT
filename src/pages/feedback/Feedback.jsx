import React, { useEffect, useState } from "react";
import {
  MainCheck,
  FeedbackTextBox,
  MyFeedbackBox,
  Minwidth,
  YesNoBox,
  TextFeedback1,
  TextFeedback2,
  Yes,
  No,

} from "/src/styles/style";

import axios from "axios";
import ProjectIdStore from "/src/stores/projectId/ProjectIdStore";
import FeedbackPerson from "../feedback/FeedbackPerson.jsx";
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
      <MyFeedbackBox>
      
       <YesNoBox>
       <Minwidth> </Minwidth>
          <TextFeedback1><Yes>YES</Yes> 피드백 </TextFeedback1>
          <TextFeedback2><No>NO</No> 피드백 </TextFeedback2>
       </YesNoBox>

       <FeedbackPerson/>
       <FeedbackPerson/>
       <FeedbackPerson/>

      </MyFeedbackBox>
    </MainCheck>
  );
}

export default FeedbackUsers;