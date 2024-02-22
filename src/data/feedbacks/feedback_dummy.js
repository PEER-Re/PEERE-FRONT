const getRandomImageUrl = () => {
    return `https://picsum.photos/80/80?random=${Math.floor(Math.random() * 1000)}`;
  };

export const feedback_dummy = [
  {
    teamUserNickname: "팀원1",
    teamUserProfileImageUrl:  getRandomImageUrl(),
    teamName: "피어리",
    yesFeedbackList: [
      "연락이 잘 돼요.",
      "말을 조리있게 잘 해요.",
      "빈틈이 없어요",
      "긍정적인 태도를 지녔어요.",
      "매너가 있어요.",
    ],
    noFeedbackList: [
      "연락이 안 돼요",
      "시간약속을 잘 안지켜요",
      "능력이 뒤떨어져요",
      "불친절해요",
      "협동심이 부족해요",
    ],
  },
  {
    teamUserNickname: "팀원2",
    teamUserProfileImageUrl:  getRandomImageUrl(),
    teamName: "피어리",
    yesFeedbackList: [
      "시간약속을 잘 지켜요.",
      "능력이 뛰어나요",
      "말을 조리있게 잘 해요.",
      "긍정적인 태도를 지녔어요.",
    ],
    noFeedbackList: [
      "연락이 안 돼요.",
      "시간약속을 안 지켜요.",
      "능력이 부족해요.",
      "말을 조리있게 못해요.",
    ],
  },
  {
    teamUserNickname: "팀원3",
    teamUserProfileImageUrl:  getRandomImageUrl(),
    teamName: "피어리",
    yesFeedbackList: [
      "연락이 잘 돼요.",
      "최선을 다해요.",
      "긍정적인 태도를 지녔어요.",
      "매너가 있어요.",
    ],
    noFeedbackList: [
      "불친절해요",
      "최선을 다하지 않아요.",
      "부정적인 태로를 지녔어요.",
      "매너가 없어요.",
    ],
  },
  {
    teamUserNickname: "팀원4",
    teamUserProfileImageUrl:  getRandomImageUrl(),
    teamName: "피어리",
    yesFeedbackList: [
      "연락이 잘 돼요.",
      "시간약속을 잘 지켜요.",
      "능력이 뛰어나요",
      "말을 조리있게 잘 해요.",
      "빈틈이 없어요",
    ],
    noFeedbackList: [
      "연락이 안 돼요",
      "시간약속을 잘 안지켜요",
      "능력이 뒤떨어져요",
      "말을 조리있게 못해요",
      "빈틈이 있어요",
      "재미없어요",
    ],
  },
  {
    teamUserNickname: "팀원5",
    teamUserProfileImageUrl:  getRandomImageUrl(),
    teamName: "피어리",
    yesFeedbackList: [
      "친절해요.",
      "최선을 다해요.",
      "긍정적인 태도를 지녔어요.",
      "매너가 있어요.",
    ],
    noFeedbackList: [
      "연락이 안 돼요.",
      "시간약속을 안 지켜요.",
      "능력이 부족해요.",
    ],
  },
  {
    teamUserNickname: "팀원6",
    teamUserProfileImageUrl:  getRandomImageUrl(),
    teamName: "피어리",
    yesFeedbackList: [
      "연락이 잘 돼요.",
      "말을 조리있게 잘 해요.",
      "빈틈이 없어요",
      "친절해요.",
    ],
    noFeedbackList: [
      "빈틈이 있어요",
      "불친절해요",
      "최선을 다하지 않아요.",
      "부정적인 태로를 지녔어요.",
      "매너가 없어요.",
    ],
  },
  {
    teamUserNickname: "팀원7",
    teamUserProfileImageUrl:  getRandomImageUrl(),
    teamName: "피어리",
    yesFeedbackList: [
      "연락이 잘 돼요.",
      "능력이 뛰어나요",
      "빈틈이 없어요",
      "최선을 다해요.",
      "매너가 있어요.",
    ],
    noFeedbackList: [
      "연락이 안 돼요",
      "시간약속을 잘 안지켜요",
      "능력이 뒤떨어져요",
      "말을 조리있게 못해요",
      "빈틈이 있어요",
    ],
  },
];
