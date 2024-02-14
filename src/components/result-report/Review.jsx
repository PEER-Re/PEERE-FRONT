import {
  ReviewContainer,
  ReviewInnerContainer,
  ReviewBox,
  ProfileBox,
  CommentBox,
  CommentText,
  ProfileImage,
  ProfileText,
  ProfileName,
  ProfileIntroduce,
} from "/src/styles/style";

export default function Review() {
  const reviewData = [
    {
      reviewName: "제갈채은",
      reviewTeam: "마케팅 팀",
      reviewComment:
        "팀원들과의 원활한 협업으로 프로젝트를 성공적으로 이끌어냈습니다.",
    },
    {
      reviewName: "이영희",
      reviewTeam: "제품 개발 팀",
      reviewComment:
        "우리 팀은 동료들 간의 서로 존중하고 신뢰하는 분위기를 만들기 위해 항상 노력했습니다. 이러한 분위기 덕분에 문제가 생겼을 때 서로 도와가며 빠르게 해결할 수 있었습니다. 감사합니다! 저희 팀은 항상 뛰어난 기술과 창의적인 아이디어를 통해 프로젝트를 완수했습니다. 문제가 발생했을 때도 유연하게 대처하고, 팀원들 간의 원활한 커뮤니케이션으로 함께 문제를 해결할 수 있었습니다. 덕분에 매우 효율적인 팀워크를 경험했습니다. 저희 팀은 항상 뛰어난 기술과 창의적인 아이디어를 통해 프로젝트를 완수했습니다. 문제가 발생했을 때도 유연하게 대처하고, 팀원들 간의 원활한 커뮤니케이션으로 함께 문제를 해결할 수 있었습니다. 덕분에 매우 효율적인 팀워크를 경험했습니다. 저희 팀은 항상 뛰어난 기술과 창의적인 아이디어를 통해 프로젝트를 완수했습니다. 문제가 발생했을 때도 유연하게 대처하고, 팀원들 간의 원활한 커뮤니케이션으로 함께 문제를 해결할 수 있었습니다. 덕분에 매우 효율적인 팀워크를 경험했습니다.",
    },
    {
      reviewName: "박철수",
      reviewTeam: "엔지니어링 팀",
      reviewComment:
        "저희 팀은 항상 뛰어난 기술과 창의적인 아이디어를 통해 프로젝트를 완수했습니다. 문제가 발생했을 때도 유연하게 대처하고, 팀원들 간의 원활한 커뮤니케이션으로 함께 문제를 해결할 수 있었습니다. 덕분에 매우 효율적인 팀워크를 경험했습니다.",
    },
    {
      reviewName: "김영희",
      reviewTeam: "디자인 팀",
      reviewComment:
        "우리 팀은 끊임없는 탐구와 실험을 통해 새로운 아이디어를 만들어냈습니다. 혁신적인 디자인과 창의적인 발상 덕분에 고객들의 호응이 매우 높았습니다. 팀원들의 헌신적인 노력에 감사드립니다.",
    },
    {
      reviewName: "최철호",
      reviewTeam: "영업 팀",
      reviewComment:
        "우리 팀은 항상 결과 중심적으로 일해왔습니다. 목표를 달성하기 위해 열정적으로 노력하고, 팀원들 간의 긍정적인 분위기가 프로젝트 성과에 큰 영향을 미쳤습니다. 앞으로도 더 많은 성과를 이루기 위해 함께 노력하겠습니다.",
    },
  ];

  return (
    <ReviewContainer>
      <ReviewInnerContainer>
        {reviewData.map((review, index) => (
          <ReviewBox key={index}>
            <ProfileBox>
              <ProfileImage />
              <ProfileText>
                <ProfileName>{review.reviewName}</ProfileName>
                <ProfileIntroduce>{review.reviewTeam}</ProfileIntroduce>
              </ProfileText>
            </ProfileBox>
            <CommentBox>
              <CommentText>{review.reviewComment}</CommentText>
            </CommentBox>
          </ReviewBox>
        ))}
      </ReviewInnerContainer>
    </ReviewContainer>
  );
}
