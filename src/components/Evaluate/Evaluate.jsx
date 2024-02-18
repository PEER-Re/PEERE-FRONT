// Evaluate.jsx
import styled, { css } from "styled-components";
import React from "react";

// 스타일을 정의
const StyledReportContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 12%;
  width: 70%;
  border-radius: 20px;
  margin-left: 15%;
  margin-bottom: 10px;
  font-weight: 700;
  align-items: center;
`;

const StyledReportComment = styled.div`
  width: 80%;
  text-align: left;
  margin-left: 10%;
`;

const StyledCommentRate = styled.div`
  width: 20%;
`;

// Evaluate 컴포넌트
function Evaluate({ comment, rate, backgroundcolor }) {
  return (
    <StyledReportContent style={{ backgroundColor: backgroundcolor }}>
      <StyledReportComment>{comment}</StyledReportComment>
      <StyledCommentRate>{rate}</StyledCommentRate>
    </StyledReportContent>
  );
}

export default Evaluate;
