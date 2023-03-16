import {Box, Button} from "@mui/material";

export default function ProductAdd() {
  return (
    <Box sx={styledAdd}>
      <Button variant="outlined"> + - </Button>
      <Button variant="contained">Add to chart</Button>
    </Box>
  );
}

const styledAdd = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "1rem",
};
