import { keyframes } from '@emotion/react';
import { Box, Container, Typography } from '@mui/material';
import { products } from '../../data';

export default function Hero() {
  return (
    <Container>
      <Box sx={styledImgList}>
        {animations.map((animation, index) => (
          <Box
            key={index}
            component="img"
            sx={{
              ...styledImg,
              animation: `${animation} .6s .4s ease-out`,
              animationFillMode: 'forwards',
            }}
            alt={`Image of a puzzle ${index}`}
            src={products[index + 1].image}
          />
        ))}
      </Box>
      <Typography
        variant="h1"
        sx={styledTitle}
      >
        Unleash Your Mind's Potential with Our Puzzles
      </Typography>
    </Container>
  );
}

const createKeyframe = (angle: number, translate: number) => keyframes`
  0% {
    transform: translate(${translate}%, 0%);
  }

  100% {
    transform: rotate(${angle}deg);
  }
`;

const animations = [
  createKeyframe(-17.52, 150),
  createKeyframe(-28.55, 50),
  createKeyframe(28.55, -50),
  createKeyframe(14.24, -150),
];

const styledImgList = {
  display: 'flex',
  justifyContent: 'center',
  margin: '100px 0 0 0',

  '> :nth-of-type(1)': {
    transform: 'translate(150%, 0%)',
  },

  '> :nth-of-type(2)': {
    transform: 'translate(50%, 0%)',
  },

  '> :nth-of-type(3)': {
    transform: 'translate(-50%, 0%)',
  },

  '> :nth-of-type(4)': {
    transform: 'translate(-150%, 0%)',
  },
};

const styledTitle = {
  textTransform: 'uppercase',
  margin: '0 auto',
  textAlign: 'center',
  padding: '4rem 0 0 0',
  maxWidth: 670,

  '@media (max-width: 899px)': {
    fontSize: '1.6rem',
  },

  // Temp breakpoint
  '@media (max-width: 499px)': {
    fontSize: '1.2rem',
  },
};

const styledImg = {
  width: 246,
  minWidth: 60,
  height: 'auto',
};
