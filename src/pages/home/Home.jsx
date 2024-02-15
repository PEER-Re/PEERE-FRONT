import React from 'react';
import axios from 'axios';
import { HomeContainer, LogoImg, MotoImg, LoginButton, HomeBg, HomeBox } from '/src/styles/style';

const Home = () => {

    // kakao login 요청
   /* const handleLogin = () => {
        window.location.href = `${
            import.meta.env.VITE_APP_SERVER_HOST
          }/oauth2/authorization/kakao`;
    }; */

    const handleLogin = async () => {
        try {
          const response = await axios.get(`${
            import.meta.env.VITE_APP_SERVER_HOST
          }/oauth2/authorization/kakao`);
          
          console.log(response.data);

        } catch(error) {
          console.log(error);
        }
    }

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
