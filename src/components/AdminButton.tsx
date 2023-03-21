import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

interface Props {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
}

// Inte säker på om vi vill lägga in länkning här eller när den används, kan alltid ändra det senare.
export default function AdminButton({ to = "", children, onClick }: Props) {
  return (
    <Link to={to} style={styledLink}>
      <Button
        variant="contained"
        sx={styledButton}
        onClick={onClick}
      >
        {children}
      </Button>
    </Link>
  );
}

const styledButton = {
  padding: '.4rem 3rem',
  marginBottom: 2,
  whiteSpace: 'no-wrap',
  backgroundColor: 'white',
  color: 'black',
  border: '1px solid black',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.lightGrey.main,
  },
};

const styledLink = {
  textDecoration: "none",
}