import {Box, Typography} from "@mui/material";
import {Product} from "../data";

interface Props {
  product: Product;
}

export default function ProductDescription(props: Props) {
  return (
    <Box>
      <Box sx={styledHeadings}>
        <Typography variant="h4">{props.product.title}</Typography>
        <Typography variant="body1">{props.product.pieces} Pieces</Typography>
      </Box>
      <Typography sx={styledParagraph} variant="body1">
        {props.product.description}
      </Typography>
    </Box>
  );
}

const styledHeadings = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "1.2rem",
};

const styledParagraph = {
  fontSize: "20px",
  marginBottom: "1.2rem",
};
