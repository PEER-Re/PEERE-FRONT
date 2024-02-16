import { ResultContainer, Title, ContentContainer } from "/src/styles/style";
import Summary from "../../components/result-report/Summary";
import Review from "../../components/result-report/Review";
import Input from "../../components/result-report/Input";

export default function ResultReport() {
  return (
    <ResultContainer>
      <Title
        style={{
          fontSize: "40px",
          height: "5px",
          zIndex: "999",
        }}
      >
        결과 리포트
      </Title>
      <Summary />
      <ContentContainer>
        <Review />
        <Input />
      </ContentContainer>
    </ResultContainer>
  );
}
