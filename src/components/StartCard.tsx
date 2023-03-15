import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { theme } from "../theme";
interface Props {
  id?: string;
  image?: string;
  title: string;
  price?: number;
}

export default function StartCard({ title, image, price }: Props) {
  return (
    <Box>
      <Card sx={cardStyling}>
        <Box sx={imageBorder}>
          <CardMedia sx={cardImage} image={image} title={title} />
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
            <IconButton sx={shoppingButton}>
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
}

const imageBorder = {
  backgroundColor: theme.palette.lightGrey.main,
  padding: 1,
  height: 430,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const cardImage = {
  height: "100%",
  width: "100%",
  maxWidth: 380,
  objectFit: "contain",
};

const shoppingButton = {
  backgroundColor: "black",
  color: "white",
  borderRadius: "50%",
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
  "&:last-child": { paddingBottom: 2 }
}
