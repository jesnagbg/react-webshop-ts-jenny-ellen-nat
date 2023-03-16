import { Box, Container, ImageList, ImageListItem, Theme, useMediaQuery } from "@mui/material";
import StartCard from "../components/StartCard";
import { Product, products } from "../data";

export default function Start() {
  const smallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const mediumScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
  const largeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

  let cols: number;
  if (smallScreen) {
    cols = 1;
  } else if (mediumScreen) {
    cols = 2;
  } else if (largeScreen) {
    cols = 3;
  } else {
    cols = 3;
  }

  return (
    <Container>
      <Box display="flex" justifyContent="center">
        <ImageList cols={cols} gap={16}>
          {products.map((product: Product) => (
            <ImageListItem key={product.id}>
              <StartCard
                id={product.id}
                image={product.image}
                images={product.images}
                title={product.title}
                price={product.price}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  );
}
