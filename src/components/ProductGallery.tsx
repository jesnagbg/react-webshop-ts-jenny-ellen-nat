import { Box, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useProducts } from '../contexts/ProductsContext';
import { theme } from '../theme';

export default function ProductGallery() {
  const { product } = useProducts();
  const [mainImg, setMainImg] = useState(product?.image || '');
  const [, setCurrentSmallImg] = useState(product?.images ? [0] : '');

  // Set image and images[] from product to allImages array
  const allImages = product?.image
    ? [product?.image, ...(product?.images ?? [])]
    : [];

  // Filter out the current main image from the small images array
  const smallImages = allImages.filter((imgSrc) => imgSrc !== mainImg);

  // Update the main image if the product changes
  useEffect(() => {
    setMainImg(product?.image || '');
  }, [product]);

  // Set the clicked small image as the main image
  const setAsMainImg = (imgSrc: string | undefined) => {
    if (imgSrc !== undefined) {
      setMainImg(imgSrc);
      setCurrentSmallImg(mainImg);
    }
  };

  return (
    <Stack spacing={2}>
      <Box sx={styledBackground}>
        <Box
          sx={styledBigImg}
          component="img"
          alt={`Image of a puzzle called ${product?.title}.`}
          src={`${mainImg}`}
        />
      </Box>

      <Box sx={styledSmallImgs}>
        {smallImages.map((imgSrc) => (
          <Box
            sx={styledImg}
            component="img"
            alt={`Image of a puzzle called ${product?.title}.`}
            src={`${imgSrc}`}
            onClick={() => setAsMainImg(imgSrc)}
          />
        ))}
      </Box>
    </Stack>
  );
}

const styledBackground = {
  width: 'calc(100% -16px)',
  height: '100%',
  background: theme.palette.lightGrey.main,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
};

const styledImg = {
  maxWidth: '100%',
  aspectRatio: '1/1',
  objectFit: 'cover',
};
const styledBigImg = {
  maxWidth: '70%',
  objectFit: 'contain',
};

const styledSmallImgs = {
  display: 'flex',
  maxWidth: '25%',
  gap: '1rem',
};
