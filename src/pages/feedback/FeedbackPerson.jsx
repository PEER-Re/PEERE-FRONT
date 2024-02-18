import React from 'react'
import {
  Person,
  Member,
  TeamProfImg,
  TeamPerson,
  MemberName,
  MemberTeam,
  FeedbackPersonLine,
  How,
  FeedbackList1,
  FeedbackList2,
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
        <FeedbackPersonLine/>
      </Member>

 
      <FeedbackPersonLine/>

     
     <How>

      <FeedbackList1>
        ∙연락이 잘 돼요.
      </FeedbackList1>
      <FeedbackList2>
        ∙연락이 안 돼요.
        </FeedbackList2>
    </How>
    </Person>
  )
}

export default FeedbackPerson;