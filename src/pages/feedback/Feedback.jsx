import { useEffect, useState } from "react";
import {
  MainCheck,
  FeedbackTextBox,
  MyFeedbackBox,
  IndexContainer,
  BtnBox,
  IndexBtn,
  IndexBox,
  InnerContainer,
  FeedbackPersonBox,
} from "/src/styles/style";

import { feedback_dummy } from "/src/data/feedbacks/feedback_dummy";

import axios from "axios";
import ProjectIdStore from "/src/stores/projectId/ProjectIdStore";
import FeedbackPerson from "/src/components/feedback/FeedbackPerson.jsx";
import FeedbackTitle from "/src/components/feedback/FeedbackTitle.jsx";


function Feedback() {

  const accessToken = localStorage.getItem("accessToken");
  const selectedPRId = ProjectIdStore((state) => state.selectedPRId); // 프로젝트 id

  const [feedbacks, setFeedbacks] = useState(feedback_dummy);

  useEffect(() => {
    const getFeedbacks = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_APP_SERVER_HOST
          }/api/projects/${selectedPRId}/feedback`,
          {
            headers: {
              Authorization: accessToken,
            },
          }
        );
        console.log("피드백 조회 성공", response.data);
        setFeedbacks(response.data.data.sentFeedbackList);
      } catch (error) {
        console.log(error);
      }
    };

    getFeedbacks();
  }, []);
  // 피드백 get
  return (
    <MainCheck>
      <FeedbackTextBox>피드백관리</FeedbackTextBox>
      <MyFeedbackBox>
        <IndexContainer>
          <BtnBox>
            <IndexBtn>보낸 피드백</IndexBtn>
          </BtnBox>
          <IndexBox>
            <InnerContainer>
              <FeedbackTitle />
              <FeedbackPersonBox>
              {feedbacks.map((data, index) => (
        <FeedbackPerson key={index} name={data.teamUserNickname} image_url={data.teamUserProfileImageUrl} no_feedbacks={data.noFeedbackList} yes_feedbacks={data.yesFeedbackList}/>
      ))}
              </FeedbackPersonBox>
            </InnerContainer>
          </IndexBox>
        </IndexContainer>
      </MyFeedbackBox>
    </MainCheck>
  );
}

export default Feedback;
