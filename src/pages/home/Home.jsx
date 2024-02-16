import { HomeContainer, LogoImg, MotoImg, LoginButton, HomeBg, HomeBox } from '/src/styles/style';
import axios from 'axios';

const Home = () => {

    // kakao login 요청
    /*
    const handleLogin = () => {
        window.location.href = `${
            import.meta.env.VITE_APP_SERVER_HOST
          }/oauth2/authorization/kakao`;
    }; */

    // 토큰 세팅
    localStorage.setItem('accessToken', `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcwOTkxMTQzNCwic29jaWFsSWQiOiJ0aGRkbXMyMDA5QG5hdmVyLmNvbSJ9.Kd3e8Xm2k_SgnyWMf84p7WPd9FzNwBF7VDLSD7h55my8J--xBuYNjKM8mexLg5oPVSHr7sHchssKMRNKpVPx2A`);

    const handleLogin = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_APP_SERVER_HOST}/oauth2/authorization/kakao`);
            console.log(response.data);
        } catch (error) {
            // 오류 처리
            console.error(error);
        }
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
