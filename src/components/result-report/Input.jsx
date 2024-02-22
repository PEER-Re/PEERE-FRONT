import {
  InputBox,
  InputProfile,
  InputImg,
  InputName,
  InputText,
  VerticalLine2,
  SendButton,
} from "/src/styles/style";
// store
import ProjectIdStore from "/src/stores/projectId/ProjectIdStore";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Input() {
  const accessToken = localStorage.getItem('accessToken');

  const [content, setContent] = useState("");
  // const [userNameInfo, setuserNameInfo] = useState("");   // 원 데이터
  // const [userProfileImg, setuserProfileImg] = useState("");  // 원 데이터
  const [userNameInfo, setuserNameInfo] = useState("홍길동");   // 임시 더미 데이터 (api 연결 성공시 삭제)
  const [userProfileImg, setuserProfileImg] = useState("/src/assets/images/result-report/미모티콘1.png");  // 임시 더미 데이터 (api 연결 성공시 삭제)

  const selectedPRId = ProjectIdStore((state) => state.selectedPRId); // 프로젝트 id
  const [isSend, setIsSend] = useState(false); // 보냈는지 확인하는 상태관리

  useEffect(() => {
    // 페이지 렌더링 시 GET 요청 보내기
    sendGetRequest();
  }, []);

  useEffect(() => {
    // 페이지 렌더링 외에 입력 시 get 요청
    sendGetRequest();
  }, [isSend]);

  const sendGetRequest = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_SERVER_HOST}/api/user`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
      });

      console.log('get');
      setuserNameInfo(response.data.data.nickname);
      setuserProfileImg(response.data.data.profileImgUrl);
    } catch (error) {
      console.error(error.message);
    }
  };

  const submitContentHandler = async () => {
  
    try {
      const postData = {
        projectId: selectedPRId,
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

      setIsSend(!isSend); // 보낸 상태 반대로 변경
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
