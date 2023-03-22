import {
  Box, Dialog,
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

//Vi kan vända den ni gav mig men den ger väldigt långa IDn,
// så då kanske vi får tänka om lite kring ui:t.
function generateShortId(length: number = 8) {
  return Math.random().toString(36).substring(2, length);
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
    //images: yup.array(yup.string()),
    price: yup
    .number()
    .min(0, 'Price must be greater than or equal to 0')
    .required('Price required'),
    pieces: yup
    .number()
    .positive('Pieces must be a positive number')
    .integer('Pieces must be an integer')
    .required('Pieces required'),
    description: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      image: '',
      //images: [],
      price: '',
      pieces: '',
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newProduct: Product = {
        id: generateShortId(),
        image: values.image,
        title: values.title,
        description: values.description,
        price: values.price,
        pieces: values.pieces,
        //images: values.images,
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
              id="pieces"
              name="pieces"
              label="Pieces"
              type="number"
              value={formik.values.pieces}
              onChange={formik.handleChange}
              error={formik.touched.pieces && Boolean(formik.errors.pieces)}
              helperText={formik.touched.pieces && formik.errors.pieces}
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
          {/* <Button
            onClick={() =>
              formik.setFieldValue('images', [...formik.values.images, ''])
            }
          >
            Add more images
          </Button> */}
        </Box>
      </DialogContent>
      <DialogActions sx={buttonContainer}>
        <AdminButton to="/admin">Cancel</AdminButton>
        <AdminButton onClick={formik.handleSubmit}>Add</AdminButton>
      </DialogActions>
    </Dialog>
  );
}

const buttonContainer = {
  justifyContent: "space-between",
  margin: "0 1rem",
}
