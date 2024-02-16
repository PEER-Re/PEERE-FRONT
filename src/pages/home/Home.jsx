import { HomeContainer, LogoImg, MotoImg, LoginButton, HomeBg, HomeBox } from '/src/styles/style';
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {

    const { search } = useLocation();
    console.log('search : ', search);
    const code = new URL(window.location.href).searchParams.get("code");
    console.log('code : ', code);
  
    useEffect(() => {
      console.log('경로 : 시작');
  
      const confirmLogin = async () => {
        const params = new URLSearchParams(search);
        const code = params.get("code");
        if (code) {
          console.log('code : ', code);
          return code;
        }
      };
  
      const code = confirmLogin();
  }, []);

    // kakao login 요청
    const handleLogin = () => {
        window.location.href = `${
            import.meta.env.VITE_APP_SERVER_HOST
          }/oauth2/authorization/kakao`;
    };

    return (
            <HomeContainer>
                <HomeBg>
                    <HomeBox>
                        <LogoImg />
                        <MotoImg />
                    <LoginButton onClick={handleLogin} />
                    </HomeBox>
                    </HomeBg>
            </HomeContainer>
    );
};

export default Home;
