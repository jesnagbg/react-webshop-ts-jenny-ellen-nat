import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
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
          <Typography gutterBottom variant='h5' component='div' align='left'>
            {title}
          </Typography>
          <Grid container justifyContent='space-between' alignItems='center'>
            <Typography variant='h6' component='div'>
              {price} SEK
            </Typography>
            <IconButton
              sx={{
                backgroundColor: 'darkgrey',
                color: 'white',
                borderRadius: '50%',
              }}
            >
              🛒
              {/* <ShoppingCartIcon /> */}
            </IconButton>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

const imageBorder = {
  backgroundColor: '#ededed',
  padding: '0.5rem 1rem',
  height: '270px',
}
