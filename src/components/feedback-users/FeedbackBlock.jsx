import React from "react";
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
import FeedbackBar from "/src/components/feedback-users/FeedbackBar.jsx";

const FeedbackBlock = ({ yesData, noData }) => (
  <ReportBox2>
    <div style={{ display: "flex" }}>
      <FeedBackType2>
        <ReportName>
          <Highlight1>YES</Highlight1> 피드백
        </ReportName>
        <FeedbackData>
          {yesData.map((item, index) => (
            <FeedbackBar
              key={index}
              comment={item.comment}
              backgroundcolor="#F4F4F4"
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
            <FeedbackBar
              key={index}
              comment={item.comment}
              backgroundcolor="#F4F4F4"
            />
          ))}
        </FeedbackData>
      </FeedBackType2>
    </div>
    <SaveFeedbackBtn>완료</SaveFeedbackBtn>
  </ReportBox2>
);

export default FeedbackBlock;
