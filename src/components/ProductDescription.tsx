import {Box, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {products} from "../data";

export default function ProductDescription() {
  const {id} = useParams();

  const product = products.find((p) => p.id === id);

  return (
    <Box sx={styledDescription}>
      <Box sx={styledHeadings}>
        <Typography variant="h4">{products[1].title}</Typography>
        <Typography variant="body1">{products[1].pieces} Pieces</Typography>
      </Box>
      <Typography sx={styledParagraph} variant="body1">
        {products[1].description}
      </Typography>
      <Typography variant="body1">{products[1].price} SEK</Typography>
    </Box>
  );
}

const styledHeadings = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "1.2rem",
};

const styledDescription = {
  width: "80%",
};

const styledParagraph = {
  maxWidth: "600px",
  fontSize: "20px",
  marginBottom: "1.2rem",
};
