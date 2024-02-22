import {
  ReviewContainer,
  ReviewInnerContainer,
  ReviewBox,
  ProfileBox,
  CommentBox,
  CommentText,
  ProfileImage,
  ProfileText,
  ProfileName,
} from "/src/styles/style";
import React, { useState, useEffect } from "react";
import axios from "axios";

import ProjectIdStore from "/src/stores/projectId/ProjectIdStore";

export default function Review() {
  const [nicknames, setnicknames] = useState([]);
  const [profileImgUrls, setprofileImgUrls] = useState([]);
  const [contents, setcontents] = useState([]);

  const selectedPRId = ProjectIdStore((state) => state.selectedPRId); // 프로젝트 id

  useEffect(() => {
    // 페이지 렌더링 시 GET 요청 보내기
    sendGetRequest();
  }, []);

  const sendGetRequest = async () => {
    try {

      const response = await axios.get(
        `${import.meta.env.VITE_APP_SERVER_HOST}/api/project/${selectedPRId}/comments`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcwOTkxMTQzNCwic29jaWFsSWQiOiJ0aGRkbXMyMDA5QG5hdmVyLmNvbSJ9.Kd3e8Xm2k_SgnyWMf84p7WPd9FzNwBF7VDLSD7h55my8J--xBuYNjKM8mexLg5oPVSHr7sHchssKMRNKpVPx2A`,
          },
        }
      );

      const userInfo = response.data.data.commentList;
      console.log(response.data.data);
      setnicknames(userInfo.map((comment) => comment.nickname));
      setprofileImgUrls(userInfo.map((comment) => comment.profileImgUrl));
      setcontents(userInfo.map((comment) => comment.content));
    } catch (error) {
      console.error(error.message);
    }

  };
  const reviewData = [
    {
      reviewName: "김송은",
      reviewTeam: "마케팅 팀 hfkdfdkfhdjfhdfhjdhfjhdfjhdjfhjfhdjhfjhd",
      img: '/src/assets/images/user/songeun.jpeg',
      reviewComment:
        "팀원들과의 원활한 협업으로 프로젝트를 성공적으로 이끌어냈습니다.",
    },
    {
      reviewName: "류시아",
      reviewTeam: "제품 개발 팀",
      img: '/src/assets/images/user/untitiled.jpeg',
      reviewComment:
        "우리 팀은 동료들 간의 서로 존중하고 신뢰하는 분위기를 만들기 위해 항상 노력했습니다. 이러한 분위기 덕분에 문제가 생겼을 때 서로 도와가며 빠르게 해결할 수 있었습니다. 감사합니다!",
    },
    {
      reviewName: "송하연",
      reviewTeam: "엔지니어링 팀",
      img: '/src/assets/images/user/untitiled.jpeg',
      reviewComment:
        "저희 팀은 항상 뛰어난 기술과 창의적인 아이디어를 통해 프로젝트를 완수했습니다. 문제가 발생했을 때도 유연하게 대처하고, 팀원들 간의 원활한 커뮤니케이션으로 함께 문제를 해결할 수 있었습니다. 덕분에 매우 효율적인 팀워크를 경험했습니다.",
    },
    {
      reviewName: "윤덕우",
      reviewTeam: "디자인 팀",
      img: '/src/assets/images/user/ducwu.jpeg',
      reviewComment:
        "우리 팀은 끊임없는 탐구와 실험을 통해 새로운 아이디어를 만들어냈습니다. 혁신적인 디자인과 창의적인 발상 덕분에 고객들의 호응이 매우 높았습니다. 팀원들의 헌신적인 노력에 감사드립니다.",
    },
    {
      reviewName: "김민영",
      reviewTeam: "이승익",
      img: '/src/assets/images/user/minyoung.jpeg',
      reviewComment:
        "팀원들 간의 긍정적인 분위기가 프로젝트 성과에 큰 영향을 미쳤습니다. 앞으로도 더 많은 성과를 이루기 위해 함께 노력하겠습니다.",
    },
    {
      reviewName: "김준희",
      reviewTeam: "이승익",
      img: '/src/assets/images/user/junhi.jpeg',
      reviewComment:
        "우리 팀은 항상 결과 중심적으로 일해왔습니다. 목표를 달성하기 위해 열정적으로 노력하겠습니다.",
    },
    {
      reviewName: "이채은",
      reviewTeam: "이승익",
      img: '/src/assets/images/user/cheaeun.jpeg',
      reviewComment:
        "문제가 발생했을 때도 유연하게 대처하고, 팀원들 간의 원활한 커뮤니케이션으로 함께 문제를 해결할 수 있었습니다. 덕분에 매우 효율적인 팀워크를 경험했습니다. ",
    },
    {
      reviewName: "정은지",
      reviewTeam: "이승익",
      img: '/src/assets/images/user/eunji.jpeg',
      reviewComment:
        "문제가 발생했을 때도 유연하게 대처하고, 팀원들 간의 원활한 커뮤니케이션으로 함께 문제를 해결할 수 있었습니다. ",
    },
    {
      reviewName: "정예진",
      reviewTeam: "엔지니어링 팀",
      img: '/src/assets/images/user/untitiled.jpeg',
      reviewComment:
        "문제가 발생했을 때도 유연하게 대처하고, 팀원들 간의 원활한 커뮤니케이션으로 함께 문제를 해결할 수 있었습니다. 덕분에 매우 효율적인 팀워크를 경험했습니다.",
    },
  ];


  return (
    <ReviewContainer>
      <ReviewInnerContainer>
        {reviewData.map((data, index) => (
          <ReviewBox key={index}>
            <ProfileBox>
              <ProfileImage src={data.img} />
              <ProfileText>
                <ProfileName>{data.reviewName}</ProfileName>
              </ProfileText>
            </ProfileBox>
            <CommentBox
              style={{
                backgroundColor:
                  index % 3 === 0
                    ? "rgba(255, 202, 202, 0.3)"
                    : index % 3 === 1
                    ? "rgba(254, 255, 202, 0.3)"
                    : "rgba(202, 214, 255, 0.3)",
              }}
            >
              <CommentText>{reviewData[index].reviewComment}</CommentText>
            </CommentBox>
          </ReviewBox>
        ))}
      </ReviewInnerContainer>
    </ReviewContainer>
  );
}
