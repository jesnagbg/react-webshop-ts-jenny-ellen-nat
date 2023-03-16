import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  Theme,
  useMediaQuery,
} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Hero from "../components/Hero";
import StartCard from "../components/StartCard";
import {Product, products} from "../data";

export default function Start() {
  const smallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const mediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );
  const largeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("lg")
  );

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

  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    navigate(`/product/${product.id}`);
  };

  return (
    <Container sx={imageBoxStyling}>
      <Hero />
      <Box sx={imageBoxStyling}>
        <ImageList cols={cols} gap={16} sx={imageListStyling}>
          {products.map((product: Product) => (
            <ImageListItem
              key={product.id}
              sx={imageListItemStyling}
              onClick={() => handleProductClick(product)}
            >
              <StartCard product={product} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  );
}

const imageListStyling = {
  flexGrow: 1,
  justifyContent: "space-between",
};

const imageListItemStyling = {
  alignItems: "center",
};

const imageBoxStyling = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: "3rem",
  flexGrow: 1,
};
