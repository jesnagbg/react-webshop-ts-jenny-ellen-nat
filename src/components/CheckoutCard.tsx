import {Clear} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Fab,
  Typography,
} from "@mui/material";
import {CartItem} from "../data";

interface Props {
  item: CartItem;
}

export default function CheckoutCard({item}: Props) {
  return (
    <Card sx={styledCard}>
      <CardMedia
        sx={styledCardMedia}
        component="img"
        image={item.image}
        alt="Puzzle thumbnail."
      />
      <Box sx={styledBox}>
        <CardContent>
          <Typography variant="h5">{item.title}</Typography>
          <Typography variant="body1">Number pieces?</Typography>
          <Typography variant="body1">Change quantity buttons here.</Typography>
          <Typography variant="body1">{item.price}kr</Typography>
        </CardContent>
      </Box>
      <Fab
        color="primary"
        aria-label="remove"
        size="small"
      >
        <Clear />
      </Fab>
    </Card>
  );
}

const styledCard = {
  display: "flex",
  dropShadow: "none",
};

const styledCardMedia = {
  maxWidth: 0.3,
};

const styledBox = {
  display: "flex",
  flexDirection: "column",
  flex: "1",
};
