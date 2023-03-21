import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Container, Grid, Link, Typography } from '@mui/material';
import { theme } from '../theme';

export default function Footer() {
  return (
    <Container sx={styledContainer}>
      <footer>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            sx={styledGridBox}
          >
            <Typography variant="h6">Content</Typography>
            <Typography
              variant="body1"
              sx={styledParagraph}
            >
              All content for this project is from
            </Typography>
            <Link
              href="https://society6.com/"
              sx={styledLink}
            >
              society6
              <KeyboardArrowRightIcon />
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            sx={styledGridBox}
          >
            <Typography variant="h6">Made by</Typography>
            <Link
              href="https://github.com/ellensofia"
              sx={styledLink}
            >
              Ellen Dahlgren
              <KeyboardArrowRightIcon />
            </Link>
            <Link
              href="https://github.com/jesnagbg"
              sx={styledLink}
            >
              Jenny Pettersson
              <KeyboardArrowRightIcon />
            </Link>
            <Link
              href="https://github.com/NathanaelBlackbourn"
              sx={styledLink}
            >
              Nathanael Blackbourn
              <KeyboardArrowRightIcon />
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            sx={styledLogoBox}
          >
            <Typography
              variant="h5"
              sx={styledLogo}
            >
              Piece by piece
            </Typography>
          </Grid>
        </Grid>
      </footer>
    </Container>
  );
}

const styledLink = {
  textDecorationColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'DM Sans',
};

const styledParagraph = {
  maxWidth: '150px',
};

const styledGridBox = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
  '@media (max-width: 899px)': {
    margin: '20px 0 0 0',
  },
};

const styledContainer = {
  paddingBottom: '3rem',
  paddingTop: '3rem',
};

const styledLogo = {
  fontFamily: 'Adamina',
};

const styledLogoBox = {
  display: 'flex',
  alignSelf: 'end',
  justifyContent: 'flex-end',

  '@media (max-width: 899px)': {
    justifyContent: 'flex-start',
    alignItems: 'unset',
    margin: '20px 0 0 0',
  },
};
