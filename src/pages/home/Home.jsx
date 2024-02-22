import { HomeContainer, LogoImg, MotoImg, LoginButton, HomeBg, HomeBox } from '/src/styles/style';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Home = () => {

    // kakao login 요청
    /*
    const handleLogin = () => {
        window.location.href = `${
            import.meta.env.VITE_APP_SERVER_HOST
          }/oauth2/authorization/kakao`;
    }; */

    // 토큰 세팅

    const handleLogin = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_APP_SERVER_HOST}/oauth2/authorization/kakao`);
            console.log(response.data);
        } catch (error) {
            // 오류 처리
            console.error(error);
        }
    };

    const navigate = useNavigate();

    return (
            <HomeContainer>
                <HomeBg>
                    <HomeBox>
                        <LogoImg />
                        <MotoImg />
                    {/* <LoginButton onClick={handleLogin} /> */}
                    <LoginButton onClick={() => navigate("/team-space")}/>
                    </HomeBox>
                    </HomeBg>
            </HomeContainer>
    );
};

export default Home;
