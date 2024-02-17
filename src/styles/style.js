import styled from "styled-components";
import BG from "/src/assets/images/background/background.png";
import BG_2 from "/src/assets/images/background/background_2.png";
import BG_3 from "/src/assets/images/background/background_3.png";
import detailBackground from "/src/assets/images/result-report/reportBox.png";
import detailBackground2 from "/src/assets/images/result-report/reportBox2.png";
import comment1 from "/src/assets/images/result-report/말풍선1.png";
// import comment2 from "/src/assets/images/result-report/말풍선2.png";
// import comment3 from "/src/assets/images/result-report/말풍선3.png";
import profileImg1 from "/src/assets/images/result-report/미모티콘1.png";
// import profileImg2 from "/src/assets/images/result-report/미모티콘2.png";
// import profileImg3 from "/src/assets/images/result-report/미모티콘3.png";
import sendButton from "/src/assets/images/result-report/전송버튼.png";
import KakaoButtonImage from "/src/assets/images/login/kakaologin.svg";
import HomeBgImage from "/src/assets/images/login/background.png";
import HomeLogoImage from "/src/assets/images/login/logo.svg";
import HomeExplain from "/src/assets/images/login/moto.svg";

// 페이지별로 용도 나눠주세요
/**  샘플 페이지 스타일 **/
export const Sample = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGray};
`;

/* 전체(수정 X) */
export const FirstMainWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 100;
`;

export const MainWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const LeftBody = styled.div`
  top: 0;
  left: 0;
  min-width: 240px;
  height: 100%;
  min-height: 100vh;
  background-color: #fff;
  box-shadow: 0px 0px 12.9px 1px rgba(0, 0, 0, 0.2);
  margin: 0;
  z-index: 100;
`;

export const RightBody = styled.div`
  flex-grow: 1; /* 남은 공간을 전부 차지한다. */
  display: flex;
  flex-direction: column;
  /* flex, flex-direction을 해주어야 height도 전체 차지함. */
  height: 100%;
  min-height: 100vh;
  margin: 0;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 80px;
  background-color: #fff;
  margin: 0;
  box-shadow: 0px 0px 12.9px 1px rgba(0, 0, 0, 0.2);
  z-index: 50;
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  margin: 0;
  background: url(${(props) =>
    props.$isbg ? (props.$istsbg ? BG : BG_3) : props.$istsbg ? BG_2 : BG_3});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
`;

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 50px;
  text-align: left;
`;

export const Title = styled.p`
  text-align: left;
  display: flex;
  width: 100%;
  font-size: 40px;
  font-weight: 800;
  margin: 0;
  white-space: nowrap;
  pointer-events: none;
`;

export const Team_Box = styled.div`
  /* 전체 너비는 그대로, 내부 여백만 추가, box-sizing */
  box-sizing: border-box;
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  border: 4px solid rgba(26, 208, 121, 0.5);
  text-align: left;
  padding: 20px 60px 20px 40px;
  gap: 26px;
  background-color: #fff;

  p {
    font-size: 24px;
    font-weight: 700;
    margin: 0;

    pointer-events: none;
  }
`;

export const Gaze_Box = styled.div`
  display: flex;
  font-size: 20px;

  p {
    margin: 0;

    pointer-events: none;
  }
`;

/* team-report > rank */

export const Rank_Box = styled.div`
  position: relative;

  box-sizing: border-box;
  margin-top: 20px;
  background-color: rgba(238, 238, 238, 0.36);
  width: 100%;
  height: 70%;
  border-radius: 18px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

/* rank_box bg가 투명도가 있어 배경색에 묻히는 문제 해결용 컴포넌트 */
export const Rank_Box_Color = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: -1;
`;

export const TitleBar = styled.div`
  display: flex;
  background-color: #fff;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(7, 19, 59, 0.6); /* #07133B의 60% */
  align-items: center;
  text-align: left;

  P {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
    margin-left: 70px;

    pointer-events: none;
  }
`;

export const Line = styled.hr`
  position: absolute;
  height: 100%;
  width: 1px;
  top: -10px;
  left: 50px;
  border: 0;
  background-color: rgba(7, 19, 59, 0.6);
  color: rgba(7, 19, 59, 0.6);
`;

/* result-report */

export const ResultContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 80px 0 80px;
  text-align: left;
  overflow: hidden;
`;

/* result-report > Summary */

export const DetailContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-self: flex-end;
  margin: 0 0 30px 0;
`;

export const Detail = styled.div`
  box-sizing: border-box;
  min-width: 40vw;
  min-height: 5vh;
  background: url(${detailBackground});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  display: flex;
  justify-content: end;
  flex-direction: column;
`;

export const Detail2 = styled.div`
  box-sizing: border-box;
  min-width: 40vw;
  min-height: 5vh;
  background: url(${detailBackground2});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  display: flex;
  justify-content: end;
  flex-direction: column;
`;

export const ButtonBox = styled.div`
  box-sizing: border-box;
  width: 87vh;
  height: 2vh;
  display: flex;
  align-self: flex-end;
  justify-content: end;
`;

export const TeamButton = styled.div`
  box-sizing: border-box;
  width: 10vh;
  margin-right: 4.9vh;
  margin-top: 0.5vh;
  text-align: center;
  font-size: 1.8vh;
  font-weight: 400;
`;

export const FeedbackButton = styled.div`
  box-sizing: border-box;
  width: 10vh;
  margin-right: 1.8vh;
  margin-top: 0.5vh;
  text-align: center;
  font-size: 1.8vh;
  font-weight: 400;
`;

export const InnerBox = styled.div`
  box-sizing: border-box;
  width: 87vh;
  height: 25vh;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
`;

export const InnerBox1 = styled.div`
  box-sizing: border-box;
  width: 44%;
  height: 85%;
  display: flex;
  margin: 3vh 2vh 0 4vh;
  flex-direction: column;
`;

export const InnerBox2 = styled.div`
  box-sizing: border-box;
  width: 55%;
  height: 85%;
  margin-top: 3vh;
  margin-left: 2vh;
  flex-direction: column;
`;

export const VerticalLine = styled.div`
  width: 0.3vh;
  height: 70%;
  background-color: rgb(0, 0, 0, 0.7);
  margin: 4vh 0 0 0;
`;

export const TB = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 6vh;
  align-items: center;
  margin-left: 32h;
`;

export const TT = styled.p`
  box-sizing: border-box;
  font-size: 2.5vh;
  font-weight: 600;
  margin: 0 3vh 0 2vh;
  min-width: 8vh;
`;

export const T = styled.p`
  box-sizing: border-box;
  font-size: 2.1vh;
  max-width: 24vh;
  max-height: 5vh;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const FeedbackTitle = styled.div`
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  font-size: 3vh;
  font-weight: 600;
  padding-top: 1vh;
`;

export const FeedbackText = styled.div`
  box-sizing: border-box;
  width: 90%;
  text-align: center;
  font-size: 3vh;
  font-weight: 600;
  display: flex;
  margin-top: -1vh;
  justify-content: end;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const FT = styled.div`
  max-width: 20vh;
  height: 17vh;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  display: flex;
  justify-content: center;

  ul {
    padding-inline-start: 0;
    height: 100%;
  }

  li {
    font-size: 1.7vh;
    font-weight: 400;
    white-space: nowrap;
    padding: 0 20px 15px 0;
  }
`;

/* result-report > Review */

export const ContentContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 55%;
`;

export const ReviewContainer = styled.div`
  box-sizing: border-box;
  height: 85%;
  margin-bottom: 30px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
`;

export const ReviewInnerContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  overflow-y: scroll;
`;

export const ReviewBox = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 30px;
`;

export const ProfileBox = styled.div`
  box-sizing: border-box;
  display: flex;
`;

export const ProfileImage = styled.div`
  box-sizing: border-box;
  width: 70px;
  height: 70px;
  background: url(${profileImg1});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const ProfileText = styled.div`
  box-sizing: border-box;
  width: 150px;
  padding: 0 10px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const ProfileName = styled.div`
  box-sizing: border-box;
  font-size: 22px;
  font-weight: 600;
  padding: 5px 5px 2px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProfileIntroduce = styled.div`
  box-sizing: border-box;
  font-size: 12px;
  font-weight: 400;
  padding-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CommentBox = styled.div`
  box-sizing: border-box;
  /* height: 100px; */
  width: 100%;
  height: 100%;
  background-color: lightgray;
  border-radius: 10px;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-right: 5px;
`;

export const CommentText = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 30%;
  overflow-y: scroll;
  line-height: 1.4rem;
`;

/* result-report > Input */

export const InputBox = styled.div`
  /* border: 1px solid blue; */
  box-sizing: border-box;
  width: 100%;
  height: 13%;
  display: flex;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  padding: 0 20px;
  gap: 10px;
`;

export const InputProfile = styled.div`
  /* border: 1px solid red; */
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const InputImg = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  // background: url(${profileImg1});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  margin-right: 30px;
`;
export const InputName = styled.div`
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;
export const InputText = styled.input`
  /* border: 1px solid green; */
  box-sizing: border-box;
  width: 100%;
  height: 60%;
  font-size: 1.2vw;
  &::placeholder {
    color: rgba(1, 1, 1, 0.3);
    font-size: 2vh;
  }
  margin-left: 10px;
`;

export const VerticalLine2 = styled.div`
  /* border: 1px solid blue; */
  width: 30px;
  height: 20px;
  padding: 5px 0;
  border-right: 1px solid black;
`;

export const SendButton = styled.div`
  /* border: 1px solid red; */
  box-sizing: border-box;
  width: 38px;
  height: 38px;
  background: url(${sendButton});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  align-self: center;
`;

//personal-report

export const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
`;

export const HeaderBox = styled.div`
  // border: 1px solid black;
  color: black;
  margin-left: 4%;
  margin-top: 1.5%;
  margin-bottom: 0.5%;
  font-size: xx-large;
  font-weight: 700;
  display: flex;
  flex-direction: row;
`;

export const SelfBox = styled.div`
  color: black;
  margin-left: 4%;
  font-size: xx-large;
  font-weight: 700;
  background-color: white;
  border-radius: 10px;
  height: 15%;
  margin-right: 4%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
`;

export const ReportBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-left: 4%;
  margin-right: 4%;
  margin-top: 2%;
  background-color: white;
  border-radius: 10px;
  justify-content: space-evenly;
  margin-bottom: 2%;
  padding-bottom: 1%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const FeedBackType = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
`;

export const ReportName = styled.div`
  margin-top: 5%;
  margin-bottom: 3%;
  font-size: x-large;
  font-weight: 700;
  color: ${({ color }) => color};
`;

export const Evaluate = styled.div`
  margin-bottom: 12%;
`;

export const ContentLine = styled.div`
  // height: 50%;
  width: 1%;
  border-right: 1.5px solid #07133b80;
  margin-top: 7%;

  margin-bottom: 1%;
`;

export const Highlight1 = styled.span`
  color: #1ad079;
`;

export const Highlight2 = styled.span`
  color: #ff7d33;
`;

export const UpdateBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 4%;
  border-radius: 7px;
  background: #fff;
  height: 60%;
  margin-top: 1%;
  // padding: 1%;

  white-space: nowrap;
`;
export const UpdateImg = styled.img`
  margin: auto 0 auto 3%;
  height: 60%;
`;

export const UpdateTime = styled.div`
  font-size: medium;
  font-weight: 600;
  margin: auto 20px;
`;

export const ProfImg = styled.img`
  background: lightgray 50% / cover no-repeat;
  border-radius: 50%;
  height: 75px;
  width: 75px;
  margin: auto 4%;
`;

export const ProfName = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5%;
  margin-bottom: 2%;
`;

export const MyName = styled.div`
  font-size: x-large;
  font-weight: 900;
`;
export const MyRole = styled.div`
  font-size: medium;
  margin-top: 6%;
  font-weight: 550;
`;
export const IntroSelf = styled.div`
  margin: auto 0 auto 4%;
  font-size: large;
  font-weight: 900;
`;
/* team creating page */
export const TeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;
export const CreateDetail = styled.div`
  width: 70%;
  border-radius: 0 50px 0 0; /* 오른쪽 상단 코너에만 반지름 적용 */
  background: #fff;
  box-shadow: 0px 4px 27px 3px rgba(149, 149, 149, 0.21);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CreateLogo = styled.img`
  float: right;
`;

export const LogoContainer = styled.div`
  width: 30%;
`;

export const CreateTitle = styled.div`
  font-weight: 700;
  font-size: 30px;
  padding-bottom: 5%;
`;

export const CreateName = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 5%;
  width: 70%;
`;
export const NameLabel = styled.div`
  font-weight: 700;
  padding-right: 40px;
  font-size: large;
  white-space: nowrap;
`;

export const NameInput = styled.input`
  width: 60%;
  border-radius: 16px;
  background: rgba(217, 217, 217, 0.36);
  min-width: 100px;
  padding: 2% 6%;
`;

export const CreateIntro = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 5%;
  width: 70%;
`;
export const IntroLabel = styled.div`
  font-weight: 700;
  padding-right: 40px;
  font-size: large;
  white-space: nowrap;
`;

export const IntroInput = styled.input`
  width: 60%;
  border-radius: 16px;
  background: rgba(217, 217, 217, 0.36);
  min-width: 100px;
  padding-bottom: 15%;
  padding-top: 2%;
  padding-left: 3%;
  padding-right: 6%;
`;

export const CreateLeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  padding-top: 30px;
  width: 70%;
`;
export const LeaderLabel = styled.div`
  font-weight: 700;
  font-size: large;
  padding-right: 10%;
  white-space: nowrap;
`;

export const LeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 470px;
  padding-right: 8%;
`;
export const CreateLeaderProfile = styled.img``;

export const CreateLeaderName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  font-size: large;
  font-weight: 700;
`;
export const CreateOkay = styled.div`
  width: 135px;
  height: 40px;
  border-radius: 16px;
  border: 1px solid #ccc;
  background: #1ad079;
  box-shadow: 0px 9px 11.3px -1px rgba(126, 126, 126, 0.12);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: large;
  font-weight: 700;
`;

export const CreateTeamProject = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-left: 60px;
  width: 70%;
  padding-bottom: 10%;
`;
export const ProjectLabel = styled.div`
  font-weight: 700;
  font-size: large;
  padding-right: 40px;
  white-space: nowrap;
`;

export const ProjectBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 470px;
  padding-left: 20px;
  white-space: nowrap;
`;
export const CreateProjectProfile = styled.img``;

export const CreateProjectName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  font-size: large;
  font-weight: 700;
`;

//

/*FeedbackUsers*/

export const MainFeedback = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
`;
export const FeedbackUsersTextBox = styled.div`
  pointer-events: none;
  color: black;
  margin-left: 4%;
  margin-top: 1%;
  font-size: xx-large;
  font-weight: 700;
  display: flex;
  flex-direction: row;
`;

export const FeedBackNameBox = styled.div`
  pointer-events: none;
  color: black;
  margin-left: 4%;
  margin-top: 1%;
  background-color: white;
  border-radius: 10px;
  height: 15%;
  width: 300px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  font-size: xx-large;
  align-items: center;
  padding-left: 1%;
  white-space: nowrap;
`;

export const Name = styled.div`
  pointer-events: none;
  font-size: x-large;
  font-weight: 900;
`;
export const Role = styled.div`
  pointer-events: none;
  font-size: medium;
  margin-top: 6%;
  font-weight: 550;
`;
export const UserTeamProfImg = styled.img`
  pointer-events: none;
  background: lightgray 50% / cover no-repeat;
  border-radius: 50%;
  height: 82%;
  margin-left: 3%;
  margin-right: 1%;
`;

export const Assess1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 11%;
  margin-bottom: 2%;
  font-weight: 700;
  height: 12%;
  width: 70%;
  border-radius: 20px;
  background-color: #f4f4f4;
  &:active {
    background-color: #1ad079b2;
  }
`;
export const Assess2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 11%;
  margin-bottom: 2%;
  font-weight: 700;
  height: 12%;
  width: 70%;
  border-radius: 20px;
  background-color: #f4f4f4;
  &:active {
    background-color: #ffa471;
  }
`;

export const FeedbackLine = styled.div`
  pointer-events: none;
  width: 1%;
  height: 69%;
  border-right: 1.5px solid #07133b80;
  margin-top: 5%;
`;
export const Button = styled.div`
  cursor: pointer;
  background-color: #e6e6e6b8;
  border-radius: 16px;
  box-shadow: 0px 4px 6.099999904632568px -1px #00000033;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13%;
  height: 11.5%;
  margin-left: 95%;
  margin-bottom: 2%;
  &:active {
    background-color: #868686;
  }
`;
export const Block = styled.div`
  width: 13%;
  height: 11.5%;
`;

export const FeedbackBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-left: 4%;
  margin-right: 4%;
  margin-top: 1%;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 10px;
  justify-content: space-evenly;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const UsersFeedBackType = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
`;

export const TeamName = styled.div`
  pointer-events: none;
  display: flex;
  flex-direction: column;
  margin-top: 2.5%;
  margin-bottom: 2%;
`;

export const FeedbackAnswer = styled.div`
  pointer-events: none;
  margin-top: 1.5%;
  margin-bottom: 5%;
  font-size: x-large;
  font-weight: 700;
  color: ${({ color }) => color};
`;
/*Feedback*/

export const MainCheck = styled.div`
  pointer-events: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
  margin: 0;
`;
export const MyFeedbackBox = styled.div`
  height: 100%;
  flex-direction: row;
  margin-left: 4%;
  margin-right: 4%;
  margin-top: 1%;
  margin-bottom: 2%;
  background-color: white;
  border-radius: 10px;
  justify-content: end;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
export const FeedbackTextBox = styled.div`
  color: black;
  margin-left: 4%;
  margin-top: 3%;
  margin-bottom: 3%;
  font-size: xx-large;
  font-weight: 700;
  display: flex;
`;
// export const FeedbackDesign = styled.img`
// position: absolute;

//`
export const YesNoBox = styled.div`
  display: flex;
  height: 10%;
  padding-top: 2%;
  flex-direction: row;
  justify-content: end;
  white-space: nowrap;
`;
export const Yes = styled.span`
  color: #1ad079;
`;

export const No = styled.span`
  color: #ff7d33;
`;
export const TextFeedback1 = styled.span`
  font-weight: 700;
  font-size: x-large;
  margin-right: 15%;
`;
export const TextFeedback2 = styled.span`
  font-weight: 700;
  font-size: x-large;
  padding-right: 13%;
`;
export const Person = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin: 0;
`;
export const TeamProfImg = styled.img`
  background: lightgray 50% / cover no-repeat;
  border-radius: 50%;
  height: 82%;
  margin-left: 3%;
  margin-right: 1%;
`;
export const Who = styled.div`
  margin-right: 1%;
  margin-left: 1%;
`;
export const FeedbackLLine = styled.div`
  width: 0.08%;
  height: 300px;
  margin-left: 5%;
  margin-top: 3%;
  background-color: #07133b80;
  opacity: 0.5;
`;
export const Team = styled.div``;
export const MemberName = styled.div`
  font-weight: 700;
  font-size: x-large;
  margin-bottom: 8%;
`;
export const How = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #e4e4e454;
  width: 550px;
  height: 120px;
  border-radius: 21px;
  margin-left: 15%;
  font-weight: 700;
`;
export const FeedbackList1 = styled.span`
posiroom' lwfrSWWWW
padding-right: 5%;
`;
export const FeedbackList2 = styled.span``;

/*Home*/
export const HomeContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeBg = styled.div`
  background-image: url(${HomeBgImage});
  width: 100%;
  height: 100%;
  min-height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 10;

  box-sizing: border-box;
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomeBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 27px;
`;

export const LogoImg = styled.div`
  background: url(${HomeLogoImage});
  width: 523px;
  height: 200px;
  background-repeat: no-repeat;
`;
export const MotoImg = styled.div`
  margin-top: 20px;
  background: url(${HomeExplain});
  width: 600px;
  height: 40px;
  background-repeat: no-repeat;
`;

export const LoginButton = styled.div`
  margin-top: 50px;
  background: url(${KakaoButtonImage});
  width: 373px;
  height: 88px;
  background-repeat: no-repeat;
`;
