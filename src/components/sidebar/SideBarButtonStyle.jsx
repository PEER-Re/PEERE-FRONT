import styled from "styled-components";
import PropTypes from 'prop-types';
import T_R from "/src/assets/images/sidebar/team_report.svg";
import P_R from "/src/assets/images/sidebar/person_report.svg";
import Feed from "/src/assets/images/sidebar/feedback.svg";
import S_T_R from "/src/assets/images/sidebar/selected_team_report.svg";
import S_P_R from "/src/assets/images/sidebar/selected_personal_report.svg";
import S_Feed from "/src/assets/images/sidebar/selected_feedback.svg";
import Selected from "/src/assets/images/sidebar/arrow.svg";
import NotSelected from "/src/assets/images/sidebar/prev_arrow.svg";

export default function SideBarButtonStyle({text, index, selected}) {

  return (
    <ButtonWrapper $index={index} $selected={selected}>
      <SelectedButton $index={index} $selected={selected} src= {selected == index ? Selected : NotSelected} alt="selected-button"/>
        <ButtonImage src= {getUrl(index, selected)} alt="button-image"/>
        {text}
    </ButtonWrapper>
  )
}

export const ButtonWrapper = styled.button`
  margin: 0 10px;
  padding: 15px 0;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 800;
  color: ${(props) => props.$selected == props.$index ? '#07133B' : '#868686'};
`;

export const ButtonImage = styled.img`
  width: 36px;
  height: 36px;
  background-repeat: no-repeat;
  /* 3번째 이미지만 여백이 달라서 발생하는 문제 해결 css */
  margin-left: ${(props) => props.$index == 0 ? "-4px" : "0px"};
  margin-right: ${(props) => props.$index == 0 ? "24px" : "20px"};
`;

export const SelectedButton = styled.img`
  width: 15px;
  height: 22px;
  background-repeat: no-repeat;
  margin-right: 15px;
`;

// 이미지 URL을 반환하는 함수
const getUrl = (index, selected) => {
  if(index == selected) {
    switch (index) {
      case 0:
        return S_T_R; 
      case 1:
        return S_P_R;
      case 2:
        return S_Feed;
      default:
        return S_T_R;
    }
  } else {
    switch (index) {
      case 0:
        return T_R; 
      case 1:
        return P_R;
      case 2:
        return Feed;
      default:
        return T_R;
    }
  }
};

SideBarButtonStyle.propTypes = {
    text: PropTypes.string,
    index: PropTypes.number,
    selected: PropTypes.number,
  };