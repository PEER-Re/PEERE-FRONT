import styled from "styled-components";
import Profile from "/src/assets/images/header/user_profile.svg";
import LogoImage from "/src/assets/images/header/peerre_logo.svg";

export default function Header() {
  return (
    <Body>
        <LeftBody>
            <UserImage src={Profile} alt= "profile" />
            <TitleTextBox>
                나의 팀
                <p>
                    팀 이름 | 프로젝트명
                </p>
            </TitleTextBox>
        </LeftBody>
        <RightBody>
            <Logo />
        </RightBody>
    </Body>
  )
}

export const Body = styled.div`
position: relative;
display: flex;
align-items: center;
text-align: center;
padding: 20px 30px;
max-height: 100%;
justify-content: space-between;
`;

export const LeftBody = styled.div`
display: flex;
gap: 12px;
`;

export const RightBody = styled.div`
display: flex;
align-items: center;
`;

export const UserImage = styled.img`
width: 40px;
height: 40px;
background-repeat: no-repeat;
`;

export const TitleTextBox = styled.div`
margin-top: -12px;
display: flex;
flex-direction: column;
text-align: left;
line-height: 1.5;
pointer-events: none;

font-size: 13px;
font-weight: 400;

p {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
    white-space: nowrap;
}
`;

export const Logo = styled.div`
width: 145px;
height: 47px;
background: url(${LogoImage});
background-repeat: no-repeat;
margin-left: 40px;
`;




