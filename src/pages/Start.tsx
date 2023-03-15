import { Container, ImageList, ImageListItem } from "@mui/material";
import StartCard from "../components/StartCard";
import { Product, products } from "../data";

export default function Start() {
  console.log(products);

  return (
    <Container>
      <ImageList cols={3} gap={16}>
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
    </Container>
  );
}
