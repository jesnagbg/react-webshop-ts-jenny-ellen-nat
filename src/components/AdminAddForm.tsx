import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Product } from '../../data';
import { useProducts } from '../contexts/ProductsContext';
import AdminButton from './AdminButton';

interface AdminAddFormProps {
  open: boolean;
  handleClose?: () => void;
}

export default function AdminAddForm({ open, handleClose }: AdminAddFormProps) {
  const navigate = useNavigate();
  const { products, setProducts } = useProducts();

  const validationSchema = yup.object({
    title: yup
      .string()
      .min(2, 'Title must be at least two characters')
      .required('Title required'),
    image: yup.string().required('Image required'),
    description: yup.string(),
    price: yup
      .number()
      .min(0, 'Price must be greater than or equal to 0')
      .required('Price required'),
    images: yup.array(yup.string()),
    pieces: yup
      .number()
      .positive('Pieces must be a positive number')
      .integer('Pieces must be an integer')
      .required('Pieces required'),
    id: yup
      .number()
      .positive('ID must be a positive number')
      .integer('ID must be an integer')
      .required('ID required'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      image: '',
      description: '',
      price: '',
      id: '',
      pieces: '',
      images: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newProduct: Product = {
        id: values.id,
        image: values.image,
        title: values.title,
        description: values.description,
        price: values.price,
        pieces: values.pieces,
        images: values.images,
      };

      setProducts([...products, newProduct]);

      if (handleClose) {
        handleClose();
      }
      navigate('/admin');
    },
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Add new item</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          autoComplete="off"
        >
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
          <TextField
            fullWidth
            margin="normal"
            variant="standard"
            id="image"
            name="image"
            label="Image"
            value={formik.values.image}
            onChange={formik.handleChange}
            error={formik.touched.image && Boolean(formik.errors.image)}
            helperText={formik.touched.image && formik.errors.image}
          />
          <TextField
            fullWidth
            margin="normal"
            variant="standard"
            id="description"
            name="description"
            label="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            variant="standard"
            id="pieces"
            name="pieces"
            label="Pieces"
            type="number"
            value={formik.values.pieces}
            onChange={formik.handleChange}
            error={formik.touched.pieces && Boolean(formik.errors.pieces)}
            helperText={formik.touched.pieces && formik.errors.pieces}
          />
          <Button
            onClick={() =>
              formik.setFieldValue('images', [...formik.values.images, ''])
            }
          >
            Add more images
          </Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <AdminButton to="/admin">Cancel</AdminButton>
        <AdminButton onClick={formik.handleSubmit}>Add item</AdminButton>
      </DialogActions>
    </Dialog>
  );
}
