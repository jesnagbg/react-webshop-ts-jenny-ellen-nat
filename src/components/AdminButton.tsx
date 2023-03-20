import { Button } from "@mui/material";

interface Props {
    children: React.ReactNode;
}

export default function AdminButton({children}: Props) {
  return (
    <Button variant="contained" sx={styledButton}>
      {children}
    </Button>
  );
}

const styledButton = {
  padding: ".6rem 2rem",
  whiteSpace: "no-wrap",
};
