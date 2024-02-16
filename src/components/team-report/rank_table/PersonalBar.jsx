import styled from "styled-components";
import PropTypes from 'prop-types';
import ThumbImage from "/src/assets/images/team-report/thumb.svg";
import Thumb_fillImage from "/src/assets/images/team-report/thumb_fill.svg";
import LankGuage from "../gauge/RankGauge";

// 배경색 테마 배열 #eeeeee의 투명도 36% 값
const bgColors = ['#FCEFE9', 'transparent'];

export default function PersonalBar({rank, index, value, selected, onClick, feedbacks}) {

    const getBGColor = (index, selected) => {
        if(index == selected) {
            return 'rgba(26, 208, 121, 0.43)';
        } else {
            return bgColors[index%bgColors.length];
        }
    }

  return (
    <BarWrapper $bg={getBGColor(index, selected)} onClick={onClick}>
        <CountBox>
            {rank}
        </CountBox>
        <Thumb>
            <img src={ThumbImage} alt="thumb_image"/>
        </Thumb>
        <LankGuage value={value}/>
        <ThumbFill>
            <img src={Thumb_fillImage} alt="thumb_fill_image" />
        </ThumbFill>
        <Gap $left="20px">
        {value}개
        </Gap>
        <TagBox>
       <Tag>
        #{feedbacks[0]}
       </Tag>
       <Tag>
        #{feedbacks[1]}
       </Tag>
       <Tag>
        #{feedbacks[2]}
       </Tag>
        </TagBox>
    </BarWrapper>
  )
}

export const BarWrapper = styled.div`
width: 100%;
padding: 12px 0;
min-width: 80%;
display: flex;
align-items: center;
text-align: center;
margin: 0;
background-color: ${(props) => props.$bg || 'transparent'};

cursor: pointer;

font-size: 16px;
font-weight: 350;
color: #07133B;
`

export const Thumb = styled.div`

margin-left: 30px;
margin-right: 10px;

img {
min-width: 31px;
min-height: 28px;
width: 31px;
height: 28px;
background-repeat: no-repeat;
}
`

export const ThumbFill = styled.div`

margin-left: 10px;

img {
min-width: 31px;
min-height: 28px;
width: 31px;
height: 28px;
background-repeat: no-repeat;
}
`

export const Gap = styled.div`
white-space: nowrap;
margin-top: ${(props) => props.$top || '0'};
margin-left: ${(props) => props.$left || '0'};
margin-right: ${(props) => props.$right || '0'};
margin-bottom: ${(props) => props.$bottom || '0'};

pointer-events: none;
`

export const TagBox = styled.div`
display: flex;
width: 45%;
min-width: 45%;
margin-left: 40px;
text-align: left;
`

export const Tag = styled.div`
margin-left: 15px;
white-space: nowrap;

pointer-events: none;
`

export const CountBox = styled.div`
min-width: 50px;
max-width: 50px;

pointer-events: none;
`

PersonalBar.propTypes = {
    rank: PropTypes.number,
    index: PropTypes.number,
    value: PropTypes.number,
    selected: PropTypes.number,
    onClick: PropTypes.func,
    feedbacks: PropTypes.array,
  };