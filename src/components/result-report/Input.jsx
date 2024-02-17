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
  const [content, setContent] = useState("");
  const [userNameInfo, setuserNameInfo] = useState("");
  const [userProfileImg, setuserProfileImg] = useState("");

  useEffect(() => {
    // 페이지 렌더링 시 GET 요청 보내기
    sendGetRequest();
  }, []);

  const sendGetRequest = async () => {
    try {
      const response = await axios.get(`http://13.124.90.245:8080/api/user`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcwOTkxMTQzNCwic29jaWFsSWQiOiJ0aGRkbXMyMDA5QG5hdmVyLmNvbSJ9.Kd3e8Xm2k_SgnyWMf84p7WPd9FzNwBF7VDLSD7h55my8J--xBuYNjKM8mexLg5oPVSHr7sHchssKMRNKpVPx2A`,
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
          Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcwOTkxMTQzNCwic29jaWFsSWQiOiJ0aGRkbXMyMDA5QG5hdmVyLmNvbSJ9.Kd3e8Xm2k_SgnyWMf84p7WPd9FzNwBF7VDLSD7h55my8J--xBuYNjKM8mexLg5oPVSHr7sHchssKMRNKpVPx2A`,
        },
      };

      const response = await axios.post(
        "http://13.124.90.245:8080/api/project/comment",
        postData,
        config
      );

      console.log(response);
      alert("후기 달기 성공. 새로고침 후 내역을 확인하세요.");
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
