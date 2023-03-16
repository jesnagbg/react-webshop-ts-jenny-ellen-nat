import {Box, Stack} from "@mui/material";
import {products} from "../data";
import {theme} from "../theme";

export default function ProductGallery() {
  return (
    <Stack spacing={2}>
      <Box sx={styledBackground}>
        <Box
          sx={styledBigImg}
          component="img"
          alt={`Image of a puzzle called ${products[1].title}.`}
          src={products[1].image}
        ></Box>
      </Box>

      <Box sx={styledSmallImgs}>
        {products[1].images && (
          <Box
            sx={styledImg}
            component="img"
            alt={`Image of a puzzle called ${products[1].title}.`}
            src={products[1].images[0]}
          ></Box>
        )}
        {products[1].images && (
          <Box
            sx={styledImg}
            component="img"
            alt={`Close up image of puzzle ${products[1].title}.`}
            src={products[1].images[1]}
          ></Box>
        )}
      </Box>
    </Stack>
  );
}

const styledBackground = {
  width: "calc(100% -16px)",
  height: "100%",
  background: theme.palette.lightGrey.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
};

const styledImg = {
  maxWidth: "100%",
  aspectRatio: "1/1",
  objectFit: "cover",
};
const styledBigImg = {
  maxWidth: "70%",
  objectFit: "contain",
};

const styledSmallImgs = {
  display: "flex",
  maxWidth: "25%",
  gap: "1rem",
};
