// Evaluate.jsx
import styled from "styled-components";
import React from "react";

// 스타일을 정의
const StyledReportContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  width: 90%;
  border-radius: 25px;
  margin-bottom: 15px;
  font-weight: 700;
  align-items: center;
  padding: 10px 0;
`;

const StyledReportComment = styled.div`
  width: 80%;
  text-align: left;
  margin-left: 10%;
  font-size: 20px;
  padding: 5px 0;
  white-space: nowrap;
`;

// Evaluate 컴포넌트
function FeedbackBar({ comment, backgroundcolor }) {
  return (
    <StyledReportContent style={{ backgroundColor: backgroundcolor }}>
      <StyledReportComment>{comment}</StyledReportComment>
    </StyledReportContent>
  );
}

export default FeedbackBar;
