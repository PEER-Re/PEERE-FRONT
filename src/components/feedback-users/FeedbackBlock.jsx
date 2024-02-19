import React, {useState} from "react";
import {
  ReportBox2,
  ContentLine,
  Highlight1,
  Highlight2,
  FeedBackType2,
  ReportName,
  FeedbackData,
  SaveFeedbackBtn,
} from "/src/styles/style";
import GoodFeedbackBar from "./GoodFeedbackBar";
import BadFeedbackBar from "./BadFeedBackBar";

import ProjectIdStore from "/src/stores/projectId/ProjectIdStore";
import FeedbacksStore from "/src/stores/feedback/FeedbackStore";

import axios from "axios";

export default function FeedbackBlock({ yesData, noData, selectedUser }){

  const selectedPRId = ProjectIdStore((state) => state.selectedPRId); // 프로젝트 id

  // 선택 데이터 저장
  const [data, setData] = useState([null, null, null, null, null, null]);
  const accessToken = localStorage.getItem("accessToken");

  console.log('선택 data : ', data);

    // 피드백 전송 (null 값 처리 X)
    const SendUserFeedback = async () => {
      const newData = {
        'communication': data[0],
        'punctual': data[1],
        'competent': data[2],
        'articulate': data[3],
        'thorough': data[4],
        'engaging': data[5], 
      };

      console.log(newData);
    
      try {
        // console.log(config);
        // console.log(postData);
        const response = await axios.post(
          `${import.meta.env.VITE_APP_SERVER_HOST}/api/projects/${selectedPRId}/users/${selectedUser}/feedback`,
          newData,
          {
          headers: {
            "Content-Type": "application/json",
            Authorization: accessToken,
            },
          },
        );
    
        console.log('성공 : ', response.data);
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <ReportBox2>
      <div style={{ display: "flex" }}>
        <FeedBackType2>
          <ReportName>
            <Highlight1>YES</Highlight1> 피드백
          </ReportName>
          <FeedbackData>
            {yesData.map((item, index) => (
              <GoodFeedbackBar
                key={index}
                comment={item.comment}
                backgroundcolor={data[index] == true ? "#1AD079" : "#F4F4F4"}
                index={index}
                data={data}
                setData={setData}
              />
            ))}
          </FeedbackData>
        </FeedBackType2>
  
        <ContentLine />
  
        <FeedBackType2>
          <ReportName>
            <Highlight2>NO</Highlight2> 피드백
          </ReportName>
          <FeedbackData>
            {noData.map((item, index) => (
              <BadFeedbackBar
                key={index}
                comment={item.comment}
                backgroundcolor= {data[index] == false ? "#FFA471" : "#F4F4F4"}
                index={index}
                data={data}
                setData={setData}
              />
            ))}
          </FeedbackData>
        </FeedBackType2>
      </div>
      <SaveFeedbackBtn onClick={() => SendUserFeedback()}>완료</SaveFeedbackBtn>
    </ReportBox2>
    );
}
