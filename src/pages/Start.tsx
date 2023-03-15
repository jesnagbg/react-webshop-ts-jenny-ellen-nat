import { Container } from "@mui/material";
import StartCard from "../components/StartCard";
import { products } from "../data";


export default function Start() {
  console.log(products);
  
  return (
    <Container>
      {products.map((product) => (
        <StartCard key={product.id} title={product.title} image={product.image} images={product.images} price={product.price} />
      ))}
    </Container>
  );
}
