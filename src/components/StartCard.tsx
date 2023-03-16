import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { Product } from "../data";
import { theme } from "../theme";

interface Props {
  product: Product;
}

export default function StartCard({ product }: Props) {
  const { id, title, image, images, price } = product;
  const [hoverImage, setHoverImage] = useState(false);
  const [currentImage, setCurrentImage] = useState(image);
  const { addToCart } = useCart();

  const handleMouseEnter = () => {
    if (images && images.length > 0) {
      setCurrentImage(images[0]);
    }
    setHoverImage(true);
  };

  const handleMouseLeave = () => {
    setCurrentImage(image);
    setHoverImage(false);
  };

  const addToCartClick = () => {
    addToCart(product, 1);
  };

  return (
    <Box>
      <Card sx={cardStyling}>
        <Box
          sx={{ ...imageBorder, height: { xs: 320, sm: 430 }, width: { xs: 250, sm: 335 } }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <CardMedia sx={cardImage} image={currentImage} title={title} />
        </Box>
        <CardContent sx={cardContentStyling}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h5" sx={titleStyling}>
                {title}
              </Typography>
              <Typography variant="h6" sx={priceStyling}>
                {price} SEK
              </Typography>
            </Box>
            <IconButton sx={shoppingButton} onClick={addToCartClick}>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

const cardStyling = {
  maxWidth: 430,
  boxShadow: "none",
};

const imageBorder = {
  backgroundColor: theme.palette.lightGrey.main,
  padding: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const cardImage = {
  height: "100%",
  width: "100%",
  objectFit: "contain",
};

const shoppingButton = {
  backgroundColor: "black",
  color: "white",
  borderRadius: "50%",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
};

const titleStyling = {
  fontFamily: theme.typography.fontFamily,
  fontWeight: 500,
  fontSize: theme.typography.body1.fontSize,
};

const priceStyling = {
  fontFamily: theme.typography.fontFamily,
  fontWeight: 400,
  fontSize: 14,
  color: theme.typography.h1.color,
};

const cardContentStyling = {
  paddingTop: 1,
  paddingLeft: 0.2,
  paddingRight: 0.2,
  "&:last-child": { paddingBottom: 2 },
};
