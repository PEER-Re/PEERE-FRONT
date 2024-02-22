const getRandomImageUrl = () => {
    return `https://picsum.photos/80/80?random=${Math.floor(Math.random() * 1000)}`;
  };

export const nickname = [
  "홍길동",
  "고길동",
  "장길동",
  "강길동",
  "김길동",
  "이길동",
];

export const profileImgUrl = [
    getRandomImageUrl(),
    getRandomImageUrl(),
    getRandomImageUrl(),
    getRandomImageUrl(),
    getRandomImageUrl(),
    getRandomImageUrl()
];
export const content = [
  "다들 수고하셨습니다.",
  "좋은 팀을 만났던 것 같아 기쁩니다.",
  "고생 많으셨어요.",
  "다들 수고하셨습니다.",
  "좋은 팀을 만났던 것 같아 기쁩니다.",
  "고생 많으셨어요.",
];
