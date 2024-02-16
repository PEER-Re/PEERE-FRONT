import { HomeContainer, LogoImg, MotoImg, LoginButton, HomeBg, HomeBox } from '/src/styles/style';
import axios from 'axios';

const Home = () => {

   /* // kakao login 요청
    const handleLogin = () => {
        window.location.href = `${
            import.meta.env.VITE_APP_SERVER_HOST
          }/oauth2/authorization/kakao`;
    }; */
    const handleLogin = () => {
      axios.get(`${import.meta.env.VITE_APP_SERVER_HOST}/oauth2/authorization/kakao`)
      .then(response => {
          console.log(response.data);
      })
      .catch(error => {
          console.error(error);
      });
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
