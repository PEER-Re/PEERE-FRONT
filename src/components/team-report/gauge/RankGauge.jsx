import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

// 게이지 샘플
const BorderLinearProgress = styled(LinearProgress)(() => ({
  // css 적용
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#07133B',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#1AD079',
  },
}));

export default function LankGuage({value}) {
  return (
    // materuial와 styled 중복 import가 안되어서 style={{}} 사용함.
    <div style={{ 
      display: 'flex', 
      width: '100%', 
      minWidth: '20%',
      alignItems: 'center', 
      gap: '20px', 
      }}>
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={value} />
    </Box>
          </div>
  );
}

// Typography fontsize가 안 변한당~~

LankGuage.propTypes = {
    value: PropTypes.number,
  };