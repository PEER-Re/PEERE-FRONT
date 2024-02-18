import React from "react";
import {
  Person,
  Member,
  How,
  FeedbackContentBox,
  FeedbackContent,
} from "/src/styles/style";
const FeedbackPerson = () => {
  return (
    <Person style={{ padding: "0 0 20px 0", margin: "0" }}>
      <Member
        style={{ padding: "0 310px 0 0", margin: "0", border: "0" }}
      ></Member>
      <How style={{ padding: "0 0 0 100px", margin: "0" }}>
        <FeedbackContentBox
          style={{ backgroundColor: "transparent", padding: "0", margin: "0" }}
        >
          <FeedbackContent>
            <p style={{ fontSize: "30px" }}>
              <span style={{ color: "#1AD079" }}>YES</span> 피드백
            </p>
          </FeedbackContent>
          <FeedbackContent>
            <p style={{ fontSize: "30px", margin: "0" }}>
              <span style={{ color: "#FF7D33" }}>NO</span> 피드백
            </p>
          </FeedbackContent>
        </FeedbackContentBox>
      </How>
    </Person>
  );
};

export default FeedbackPerson;
