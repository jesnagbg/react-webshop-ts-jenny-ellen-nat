import {keyframes} from "@emotion/react";
import {Box, Container, Typography} from "@mui/material";
import {products} from "../data";

const angles = ["-17.52deg", "-28.55deg"];
const angles2 = ["28.55deg", "14.24deg"];

export default function Hero() {
  return (
    <Container>
      <Box sx={styledImgList}>
        {angles.map((angle, index) => (
          <Box
            key={index}
            component="img"
            sx={{...styledImg, transform: `rotate(${angle})`}}
            alt={`Image of a puzzle ${index}`}
            src={products[index + 1].image}
          />
        ))}
        {angles2.map((angle, index) => (
          <Box
            key={index}
            component="img"
            sx={{...styledImg2, transform: `rotate(${angle})`}}
            alt={`Image of a puzzle ${index}`}
            src={products[index + 3].image}
          />
        ))}
      </Box>
      <Typography variant="h1" sx={styledTitle}>
        Unleash Your Mind's Potential with Our Puzzles
      </Typography>
    </Container>
  );
}

const slideInFromLeft = keyframes`
  0% {
    transform: rotate(0deg);
    transform: translate(50%, 0%);
  }

  100% {
    transform: translate(0, 0) rotate(${angles});
  }
`;

const slideInFromRight = keyframes`
  0% {
    transform: rotate(0deg);
    transform: translate(-50%, 0%);
  }

  100% {
    transform: rotate(${angles});
  }
`;

const styledImgList = {
  display: "flex",
  justifyContent: "center",
  margin: "100px 0 0 0",
};

const styledTitle = {
  textTransform: "uppercase",
  margin: "0 auto",
  textAlign: "center",
  padding: "4rem 0 0 0",
  maxWidth: 670,

  "@media (max-width: 899px)": {
    fontSize: "1.6rem",
  },

  // Temp breakpoint
  "@media (max-width: 499px)": {
    fontSize: "1.2rem",
  },
};

const styledImg = {
  width: 246,
  minWidth: 60,
  height: "auto",
  animation: `${slideInFromLeft} 1s .8s ease-in-out`,
};

const styledImg2 = {
  width: 246,
  minWidth: 60,
  height: "auto",
  animation: `${slideInFromRight} 1s .8s ease-in-out`,
};
