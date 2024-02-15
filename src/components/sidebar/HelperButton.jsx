import styled from "styled-components";
import PropTypes from 'prop-types';
import LogOut from "/src/assets/images/sidebar/logout.svg";

export default function HelperButton({ text }) {
  return (
    <ButtonWrapper>
    <ButtonImage src={LogOut} alt="logout-image" />
    {text}
</ButtonWrapper>
  )
}

export const ButtonWrapper = styled.button`
  max-width: 100%;
  display: flex;
  font-size: 14px;
  color: #868686;
  align-items: center;
  margin-left: 10px;
  position: absolue;
  bottom: 0;
`;

export const ButtonImage = styled.img`
  width: 23px;
  height: 23px;
  background-repeat: no-repeat;
  margin-right: 10px;
`;

HelperButton.propTypes = {
    text: PropTypes.string,
  };