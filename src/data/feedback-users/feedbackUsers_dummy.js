const getRandomImageUrl = () => {
  return `https://picsum.photos/80/80?random=${Math.floor(Math.random() * 1000)}`;
};

export const yesData_dummy = [
    { comment: "연락이 잘 돼요." },
    { comment: "시간약속을 잘 지켜요." },
    { comment: "능력이 뛰어나요" },
    { comment: "말을 조리있게 잘 해요." },
    { comment: "빈틈이 없어요" },
    { comment: "친절해요." },
    { comment: "최선을 다해요." },
    { comment: "긍정적인 태도를 지녔어요." },
    { comment: "매너가 있어요." },
  ];
  
export const noData_dummy = [
    { comment: "연락이 안 돼요." },
    { comment: "시간약속을 안 지켜요." },
    { comment: "능력이 부족해요." },
    { comment: "말을 조리있게 못해요." },
    { comment: "빈틈이 있어요" },
    { comment: "불친절해요" },
    { comment: "최선을 다하지 않아요." },
    { comment: "부정적인 태로를 지녔어요." },
    { comment: "매너가 없어요." },
  ];