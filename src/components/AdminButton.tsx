import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

interface Props {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  "data-cy"?: string;
  type?: 'button' | 'reset' | 'submit';
}

export default function AdminButton({ to = "", children, onClick, "data-cy": dataCy, type = 'button' }: Props) {
  return (
    <Link to={to} style={styledLink}>
      <Button
        variant="contained"
        sx={styledButton}
        onClick={onClick}
        data-cy={dataCy}
        type={type}
      >
        {children}
      </Button>
    </Link>
  );
}

const styledButton = {
  //padding: '.4rem 2.6rem',
  padding: { xs: '.4rem 2rem', sm: '.4rem 2.6rem' },
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

