import React from "react";
import PropTypes from 'prop-types';
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

const FeedbackPerson = ({ name, image_url, no_feedbacks, yes_feedbacks }) => {
  return (
    <Person>
      <Member>
        <TeamProfImg src={image_url} />
        <TeamPerson>
          <MemberName>{name}</MemberName>
        </TeamPerson>
      </Member>
      <How>
        <FeedbackContentBox>
          <FeedbackContent>
          {yes_feedbacks.map((feedback, index) => (
              <p key={index}>• {feedback}</p>
            ))}
          </FeedbackContent>
          <FeedbackContent>
          {no_feedbacks.map((feedback, index) => (
              <p key={index}>• {feedback}</p>
            ))}
          </FeedbackContent>
        </FeedbackContentBox>
      </How>
    </Person>
  );
};

FeedbackPerson.propTypes = {
  name: PropTypes.string,
  image_url: PropTypes.string,
  no_feedbacks: PropTypes.arrayOf(PropTypes.string),
  yes_feedbacks: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackPerson;
