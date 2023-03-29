import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import { Product } from '../../data';
import { theme } from '../theme';

interface Props {
  product: Product;
}

export default function ProductGallery({
  product: { image, images, title },
}: Props) {
  const [mainImg, setMainImg] = useState(image || '');
  const [, setCurrentSmallImg] = useState(images ? [0] : '');

  const allImages = image ? [image, ...(images ?? [])] : [];

  const smallImages = allImages.filter((imgSrc) => imgSrc !== mainImg);

  const setAsMainImg = (imgSrc: string | undefined) => {
    if (imgSrc !== undefined) {
      setMainImg(imgSrc);
      setCurrentSmallImg(mainImg);
    }
  };

  return (
    <Stack spacing={2}>
      <Box sx={styledBackground}>
        <Box sx={styledInnerFrame}>
          <Box
            sx={styledBigImg}
            component="img"
            alt={`Image of a puzzle called ${title}.`}
            src={`${mainImg}`}
          />
        </Box>
      </Box>

      <Box sx={styledSmallImgs}>
        {smallImages.map((imgSrc) => (
          <Box
            sx={styledImg}
            component="img"
            alt={`Image of a puzzle called ${title}.`}
            src={`${imgSrc}`}
            key={`smImg${smallImages.indexOf(imgSrc)}`}
            onClick={() => setAsMainImg(imgSrc)}
          />
        ))}
      </Box>
    </Stack>
  );
}

const styledBackground = {
  background: theme.palette.lightGrey.main,
  padding: '1rem',
};

const styledInnerFrame = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60vh',
};

const styledBigImg = {
  maxWidth: '90%',
  maxHeight: 'calc(60vh - 1rem)',
  objectFit: 'contain',
};

const styledImg = {
  maxWidth: '100%',
  aspectRatio: '1/1',
  objectFit: 'cover',
};

const styledSmallImgs = {
  display: 'flex',
  maxWidth: '25%',
  gap: '1rem',
  cursor: 'pointer',
};
