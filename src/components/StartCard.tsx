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
      <Card sx={{ maxWidth: 275 }}>
        <Box sx={imageBorder}>
          <CardMedia sx={{ height: 270 }} image={image} title={title} />
        </Box>
        <CardContent>
          <Typography variant="h5" align="left" sx={titleStyling}>
            {title}
          </Typography>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="h6">
              {price} SEK
            </Typography>
            <IconButton
              sx={shoppingButton}
            >
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

const imageBorder = {
  backgroundColor: theme.palette.lightGrey.main,
  padding: "0.5rem 1rem",
  height: "270px",
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
  color: theme.typography.h1.color,  
}

const priceStyling = {
  
}
