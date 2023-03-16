import {Button} from "@mui/material";

export default function AddToCartButton() {
  return (
    <Button variant="contained" sx={styledButton}>
      Add to chart
    </Button>
  );
}

const styledButton = {
  padding: ".6rem 2rem",
  whiteSpace: "no-wrap",
};
