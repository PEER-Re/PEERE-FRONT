import React from 'react';
import { HomeContainer, HomeBox, LogoImg, MotoImg, HomeLogo } from '/src/styles/style';

const Home = () => {


    return (
        <>
            <HomeContainer>
                <HomeBox>
                    <HomeLogo>
                        <LogoImg src="src/assets/images/background/logo.svg" />
                        <MotoImg src="src/assets/images/background/moto.svg" />
                    </HomeLogo>
                </HomeBox>
            </HomeContainer>
            <button onClick={handleLogin}>카카오 로그인</button>
        </>
    );
};

export default Home;
