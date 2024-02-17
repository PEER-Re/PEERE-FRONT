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

  return (
    <ReviewContainer>
      <ReviewInnerContainer>
        {nicknames.map((nickname, index) => (
          <ReviewBox key={index}>
            <ProfileBox>
              <ProfileImage src={profileImgUrls[index]} />
              <ProfileText>
                <ProfileName>{nickname}</ProfileName>
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
              <CommentText>{contents[index]}</CommentText>
            </CommentBox>
          </ReviewBox>
        ))}
      </ReviewInnerContainer>
    </ReviewContainer>
  );
}
