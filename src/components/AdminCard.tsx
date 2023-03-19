// import { Box, Card, CardContent, CardMedia, IconButton, Link, Typography } from "@mui/material";
// import { Product } from "../data";

// interface Props {
//   product: Product;
// }

// export default function AdminCard({ product }: Props) {
//   const { id, title, image, images, price } = product;

//   return (
//     <Box>
//       <Card>
//         <CardMedia />
//         <Box>
//           <CardContent>
//             <Box>
//             <Typography>{title}</Typography>
//             <Typography>Article number: {id}</Typography>
//             <Typography>Details: </Typography>
//             <Typography>{price} SEK</Typography>
//             </Box>
//             <Box>
//             <IconButton>
//               🍥
//             </IconButton>
//             <Link>Edit</Link>
//             </Box>
//           </CardContent>
//         </Box>
//       </Card>
//     </Box>
//   );
// }

import { Clear } from "@mui/icons-material";
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { Product } from "../data";
import { theme } from "../theme";

interface Props {
  product: Product;
}

export default function CheckoutCard({ product }: Props) {
  const { id, title, image, images, price } = product;

  return (
    <Card sx={styledCard}>
      <CardMedia sx={styledCardMedia} component="img" image={image} alt="Image thumbnail" />
      <Box sx={styledBox}>
        <CardContent sx={styledCardContent}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body1">Article number: {id}</Typography>
          <Typography variant="body1">Details:</Typography>
          <Typography variant="body1">{price} SEK</Typography>
        </CardContent>
      </Box>
      <Box sx={rightContainer}>
        <IconButton sx={removeButton} aria-label="remove">
          <Clear />
        </IconButton>
        <Box sx={editLink}>Edit</Box>
      </Box>
    </Card>
  );
}

const styledCard = {
  margin: "1rem 0",
  display: "flex",
};

const styledCardMedia = {
  maxWidth: 0.3,
};

const styledCardContent = {
  padding: "0 1rem",
};

const styledBox = {
  display: "flex",
  flexDirection: "column",
  flex: "1",
};

const removeButton = {
  height: "2rem",
  width: "2rem",
  backgroundColor: theme.palette.primary.main,
  color: "white",
  borderRadius: "50%",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: "black",
  },
};

const editLink = {

}

const rightContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "space-between"
}