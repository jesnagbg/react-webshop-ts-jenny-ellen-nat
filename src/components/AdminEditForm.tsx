import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import AdminButton from "./AdminButton";

interface AdminEditFormProps {
  open: boolean;
  handleClose?: () => void;
}

export default function AdminEditForm({ open, handleClose }: AdminEditFormProps) {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    title: yup
      .string()
      .min(2, "Title must be at least two characters")
      .required("Title required"),
    price: yup
      .number()
      .min(0, "Price must be greater than or equal to 0")
      .required("Price required"),
    id: yup
      .number()
      .positive("ID must be a positive number")
      .integer("ID must be an integer")
      .required("ID required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      id: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Edit item</DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={formik.handleSubmit} noValidate autoComplete="off">
          <TextField
            fullWidth
            margin="normal"
            variant="standard"
            id="title"
            name="title"
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
            fullWidth
            margin="normal"
            variant="standard"
            id="price"
            name="price"
            label="Price"
            type="number"
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
          <TextField
            fullWidth
            margin="normal"
            variant="standard"
            id="id"
            name="id"
            label="ID"
            type="number"
            value={formik.values.id}
            onChange={formik.handleChange}
            error={formik.touched.id && Boolean(formik.errors.id)}
            helperText={formik.touched.id && formik.errors.id}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <AdminButton to="/admin">Cancel</AdminButton>
        <AdminButton onClick={formik.handleSubmit}>Add item</AdminButton>
      </DialogActions>
    </Dialog>
  );
}