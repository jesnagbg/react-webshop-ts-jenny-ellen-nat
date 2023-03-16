import {Box, Button, Container, Grid} from "@mui/material";
import ProductAdd from "../components/ProductAdd";
import ProductDescription from "../components/ProductDescription";
import ProductGallery from "../components/ProductGallery";

export default function Product() {
  return (
    <Container sx={styledContainer}>
      <Button>Back</Button>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ProductGallery />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProductDescription />
        </Grid>
        <Grid item xs={12} md={6}>
          {" "}
        </Grid>
      </Grid>
      <Box sx={styledAddProducts}>
        <ProductAdd />
      </Box>
    </Container>
  );
}

const styledContainer = {
  margin: "100px 0",
  position: "relative",
  maxWidth: "1200px",
};

const styledAddProducts = {
  position: "sticky",
  bottom: "24px",
  left: "100%",
  width: "fit-content",
};
