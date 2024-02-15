import {
  InputBox,
  InputProfile,
  InputImg,
  InputName,
  InputText,
  VerticalLine2,
  SendButton,
} from "/src/styles/style";

export default function Input() {
  return (
    <InputBox>
          <InputProfile>
            <InputImg />
            <InputName>김준희</InputName>
            <VerticalLine2 />
          </InputProfile>
          <InputText placeholder="입력하세요" />
          <SendButton />
    </InputBox>
  );
}
