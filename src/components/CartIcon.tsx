import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Badge, BadgeProps, IconButton, styled} from "@mui/material";

export default function CartIcon() {
  return (
    <IconButton aria-label="cart" sx={{padding: "1rem"}}>
      <StyledBadge badgeContent={4} sx={{color: "#333"}}>
        <ShoppingCartOutlinedIcon sx={{color: "#333"}} />
      </StyledBadge>
    </IconButton>
  );
}

const StyledBadge = styled(Badge)<BadgeProps>(({theme}) => ({
  "& .MuiBadge-badge": {
    vertical: "top",
    horizontal: "right",
    background: `#c8e1c0`,
    border: `2px solid #333`,
    fontSize: `10px`,
    padding: "2px",
    height: 14,
    minWidth: 14,
  },
}));
