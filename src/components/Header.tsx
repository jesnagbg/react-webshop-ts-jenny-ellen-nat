import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Link,
  Slide,
  Typography
} from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { FC, ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { theme } from '../theme';
import CartIcon from './CartIcon';

interface Props {
  children: ReactElement;
}

// Define the HideOnScroll component as a function component
const HideOnScroll: FC<Props> = ({ children }) => {
  // useScrollTrigger returns a boolean value indicating whether the user has scrolled down the page
  const trigger = useScrollTrigger();

  // We use the Slide component to add a slide animation to the AppBar
  // The 'appear' prop determines whether the component should animate on first render
  // The 'direction' prop determines the direction of the slide animation
  // The 'in' prop determines whether the component should be visible or not
  return (
    <Slide
      appear={false}
      direction="down"
      in={!trigger}
    >
      {children}
    </Slide>
  );
};

export default function Header() {
  return (
    <HideOnScroll>
      <AppBar sx={styledAppBar}>
        <Container sx={styledContainer}>
          <Link
            component={RouterLink}
            to="/"
            sx={styledLink}
          >
            <Typography
              variant="h6"
              sx={styledLogo}
            >
              Piece by Piece
            </Typography>
          </Link>
          <Box>
            <IconButton
              aria-label="cart"
              data-cy="cart-link"
            >
              <CartIcon />
            </IconButton>
            <Link
              component={RouterLink}
              to="/admin"
              data-cy="admin-link"
            >
              <IconButton
                aria-label="admin"
              >
                <PersonOutlineOutlinedIcon sx={styledPersonOutlined} />
              </IconButton>
            </Link>
          </Box>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}

const styledAppBar = {
  height: 80,
  bgcolor: '#fff',
  marginBottom: '100px',
  boxShadow: 'none',
};

const styledContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: theme.palette.primary.main,
  height: '100%',
};

const styledLink = {
  textDecoration: 'none',
};

const styledLogo = {
  fontFamily: 'Adamina',
};

const styledPersonOutlined = {
  color: theme.palette.primary.main,
  fontSize: '1.7rem',
};
