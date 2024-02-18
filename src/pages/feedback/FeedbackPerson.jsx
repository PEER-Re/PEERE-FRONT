import React from "react";
import {
  Person,
  Member,
  TeamProfImg,
  TeamPerson,
  MemberName,
  MemberTeam,
  How,
  FeedbackContentBox,
  FeedbackContent,
} from "/src/styles/style";
const FeedbackPerson = () => {
  return (
    <Person>
      <Member>
        <TeamProfImg src="src/assets/images/profile/profile.png" />
        <TeamPerson>
          <MemberName>김준희</MemberName>
          <MemberTeam>피어리마케팅 A팀</MemberTeam>
        </TeamPerson>
      </Member>
      <How>
        <FeedbackContentBox>
          <FeedbackContent>
            <p>• 피드백내용 이것저것</p>

          </FeedbackContent>
          <FeedbackContent>
            <p>• 피드백내용 이것저것</p>
            <p>• 피드백내용 이것저것</p>
            <p>• 피드백내용 이것저것</p>
            <p>• 피드백내용 이것저것</p>
          </FeedbackContent>
        </FeedbackContentBox>
      </How>
    </Person>
  );
};

export default FeedbackPerson;
