import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  useMediaQuery,
} from '@mui/material';
import { Product } from '../../data';
import Hero from '../components/Hero';
import StartCard from '../components/StartCard';
import { useProducts } from '../contexts/ProductsContext';
import { theme } from '../theme';

export default function Start() {
  const { products } = useProducts();

  const smScreen = useMediaQuery(theme.breakpoints.down('md'));
  const mdScreen = useMediaQuery(theme.breakpoints.down('lg'));

  let cols: number = smScreen ? 1 : mdScreen ? 2 : 3;

  return (
    <Container sx={imageBoxStyling}>
      <Hero />
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
