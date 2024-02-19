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
  cursor: pointer;
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
export default function GoodFeedbackBar({ comment, backgroundcolor, index, data, setData }) {

  const handleClick = () => {
    console.log('클릭');
    const newData = [...data];
    newData[index] = true; // 선택한 index의 값을 true로

    setData(newData); 
  }

  return (
    <StyledReportContent style={{ backgroundColor: backgroundcolor }} onClick={() => handleClick()}>
      <StyledReportComment>{comment}</StyledReportComment>
    </StyledReportContent>
  );
}
