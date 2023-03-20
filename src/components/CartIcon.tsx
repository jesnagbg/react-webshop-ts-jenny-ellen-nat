import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, BadgeProps, styled } from '@mui/material';
import { useCart } from '../contexts/CartContext';
import { theme } from '../theme';

export default function CartIcon() {
  const { cartItems } = useCart();

  return (
    <StyledBadge
      badgeContent={cartItems.reduce((a, item) => a + item.quantity, 0)}
    >
      <ShoppingCartOutlinedIcon sx={cartIconStyle} />
    </StyledBadge>
  );
}

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    background: theme.palette.secondary.main,
    border: `2px solid theme.palette.primary.main`,
    fontSize: `10px`,
    padding: '2px',
    height: 14,
    minWidth: 14,
    color: theme.palette.primary.main,
  },
}));

const cartIconStyle = {
  color: theme.palette.primary.main,
};
