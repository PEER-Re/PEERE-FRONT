import { useState } from "react";
import styled from "styled-components";
import SideBarButtonStyle from "/src/components/sidebar/SideBarButtonStyle";
import HelperButton from "/src/components/sidebar/HelperButton";
import { useNavigate } from "react-router-dom";
import T_L from "/src/assets/images/sidebar/team_logo.svg";
import T_S from "/src/assets/images/sidebar/team_space.svg";
import S_T_S from "/src/assets/images/sidebar/selected_team_space.svg";

import UsersStore from "/src/stores/users/UsersStore";

export default function SideBar(location) {

    const navigate = useNavigate();

    const [selected, setSelected] = useState(99);
    const userName = UsersStore((state) => state.userName); // 사용자 이름
    const userImage = UsersStore((state) => state.userProfileImage); // 사용자 이미지

    const getPath = (index) => {
      switch (index) {
        case 0:
          return "team-report"
        case 1:
          return "personal-report"
        case 2:
          return "feedback"
        case 99:
            return "team-space"
        default: 
          return "/" 
      }
    }

    const getNavigate = (index) => () => {
      navigate(getPath(index));
      setSelected(index);
    }

    const logout = () => {
      // accesstoken 삭제
      localStorage.removeItem("accessToken");
      alert("로그아웃 되었습니다.");
      navigate('/');
    }

  return (
    <Body>
   <BarHeader>
    
    {/* <BarHeaderImage src={userImage} alt="bar-header-image"/> */}
    <BarHeaderImage src={T_L} alt="bar-header-image"/>
    <BarHeaderText>
        {/* <p>{userName}</p> */}
        <p>홍길동</p>
    </BarHeaderText>
    </BarHeader>
    <Hr $top="15px"/>
    <ButtonListBox>
        <ButtonHoverStyle onClick={getNavigate(99)} $index={selected}>
            <HoverButtonImage src = {selected == 99 ? S_T_S : T_S} alt="team-space-button" />
            팀 스페이스
        </ButtonHoverStyle>
        <Hr $top="10px"/>
        <div onClick={getNavigate(0)}>
        <SideBarButtonStyle text="팀 리포트" index={0} selected={selected} location={location}/>
        <Hr $top="10px"/>
        </div>
        <div onClick={getNavigate(1)}>
        <SideBarButtonStyle text="개인 리포트" index={1} selected={selected} location={location}/>
        <Hr $top="10px"/>
        </div>
        <div onClick={getNavigate(2)}>
        <SideBarButtonStyle text="피드백 관리" index={2} selected={selected} location={location}/>
        <Hr $top="10px"/>
        </div>
    </ButtonListBox>
    <HelperBox>
    <Hr $bottom="20px"/>
            <div onClick={() => logout()}>
            <HelperButton text="로그아웃" index={1}/>
            </div>
        </HelperBox>
       </Body>
  )
}

export const Body = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding: 20px;

height: 100%;
box-sizing: border-box;
`;

export const BarHeader = styled.div`
  display: flex;
  width: 90%;
  margin-top: 24px;
`;

export const BarHeaderImage = styled.img`
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
`;

export const BarHeaderText = styled.div`
left: 0;
display: flex;
flex-direction: column;
text-align: left;
padding: 0 10px;
line-height: 1.5;
pointer-events: none;

p {
    font-size: 20px;
    font-weight: 800;
    margin: 0;
    padding: 0;
  }

  font-size: 12px;
  color: #07133B;
`;


export const ButtonListBox= styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ButtonHoverStyle = styled.button`
margin: 50px 10px 0px 10px;
padding: 15px 0;
width: 100%;
display: flex;
align-items: center;
font-size: 20px;
font-weight: 800;
color: ${(props) => props.$index == 99 ? '#07133B' : '#868686'};
`;

export const HoverButtonImage = styled.img`
  width: 35px;
  height: 35px;
  background-repeat: no-repeat;
  margin-right: 20px;
  margin-left: 5px;
`;

export const Hr = styled.hr`
  width: 95%;
  height: 1px;
  border: 0;
  background-color: #bdbdbd;
  margin-top: ${(props) => props.$top || "0"};
  margin-bottom: ${(props) => props.$bottom || "0"};
`;

export const HelperBox= styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: 40px;
`;
