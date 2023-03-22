import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  Theme,
  useMediaQuery,
} from '@mui/material';
import { Product } from '../../data';
import Hero from '../components/Hero';
import StartCard from '../components/StartCard';
import { useProducts } from '../contexts/ProductsContext';

export default function Start() {
  const { products } = useProducts();
  const smallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );
  const mediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('lg')
  );
  const largeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up('lg')
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

  return (
    <Container sx={imageBoxStyling}>
      <Hero />
      <main>
        <Box sx={imageBoxStyling}>
          <ImageList
            cols={cols}
            gap={16}
            sx={imageListStyling}
          >
            {products.map((product: Product) => (
              <ImageListItem
                key={product.id}
                sx={imageListItemStyling}
              >
                <StartCard product={product} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </main>
    </Container>
  );
}

const imageListStyling = {
  flexGrow: 1,
  justifyContent: 'space-between',
};

const imageListItemStyling = {
  alignItems: 'center',
};

const imageBoxStyling = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: '3rem',
  flexGrow: 1,
};
