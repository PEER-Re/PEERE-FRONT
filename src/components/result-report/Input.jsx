import {
  InputBox,
  InputProfile,
  InputImg,
  InputName,
  InputText,
  VerticalLine2,
  SendButton,
} from "/src/styles/style";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Input() {
  const accessToken = localStorage.getItem('accessToken');

  const [content, setContent] = useState("");
  const [userNameInfo, setuserNameInfo] = useState("");
  const [userProfileImg, setuserProfileImg] = useState("");

  useEffect(() => {
    // 페이지 렌더링 시 GET 요청 보내기
    sendGetRequest();
  }, []);

  const sendGetRequest = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_SERVER_HOST}/api/user`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
      });

      setuserNameInfo(response.data.data.nickname);
      setuserProfileImg(response.data.data.profileImgUrl);
    } catch (error) {
      console.error(error.message);
    }
  };

  const submitContentHandler = async () => {
    try {
      const postData = {
        projectId: 8,
        content: content,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
      };

      const response = await axios.post(
        `${import.meta.env.VITE_APP_SERVER_HOST}/api/project/comment`,
        postData,
        config
      );

      console.log(response.data);
    } catch (error) {
      console.error("후기를 생성하는 도중 오류가 발생했습니다:", error);
    }
  };

  return (
    <InputBox>
      <InputProfile>
        <InputImg src={userProfileImg} />
        <InputName>{userNameInfo}</InputName>
        <VerticalLine2 />
      </InputProfile>
      <InputText
        placeholder="입력하세요"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <SendButton onClick={submitContentHandler} />
    </InputBox>
  );
}
