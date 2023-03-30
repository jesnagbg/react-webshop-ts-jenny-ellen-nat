import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormHelperTextProps,
  TextField
} from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { Product } from '../../data';
import { useProducts } from '../contexts/ProductsContext';
import AdminButton from './AdminButton';

//--------------------------Interfaces------------------------------//

interface AdminProductFormProps {
  open: boolean;
  onClose?: () => void;
  mode: 'add' | 'edit';
}
type ProductCreate = Omit<Product, 'id'>;

const validationSchema = yup.object({
  title: yup
    .string()
    .min(2, 'Title must be at least two characters')
    .required('Title required'),
  image: yup
    .string()
    .url('Image must be a valid URL')
    .required('Image required'),
  images: yup
    .array()
    //.of(yup.string().url('Image must be a valid URL'))
    .max(4, 'You can add up to 4 extra images')
    .optional(),
  price: yup
    .number()
    .min(1, 'Price must be greater than 0')
    .required('Price required'),
  pieces: yup
    .number()
    .positive('Pieces must be a positive number')
    .integer('Pieces must be an integer'),
  description: yup
    .string()
    .min(4, 'Description must be at least four characterns')
    .required('Description required'),
});

function generateShortId(length: number = 8) {
  return Math.random().toString(36).substring(2, length);
}

//--------------------------Function------------------------------//

export default function AdminProductForm({
  open,
  onClose,
  mode,
}: AdminProductFormProps) {
  const navigate = useNavigate();
  const { products, setProducts } = useProducts();
  const isEdit = mode === 'edit';
  const { id } = useParams<{ id: string }>();
  const productFromId = products.find((p) => p.id === id) || null;

  const [extraImages, setExtraImages] = useState<string[]>(
    isEdit && productFromId && productFromId.images ? productFromId.images : []
  );

  const handleExtraImageChange = (index: number, newImageUrl: string) => {
    const updatedExtraImages = extraImages.map((imageUrl, i) =>
      i === index ? newImageUrl : imageUrl
    );
    setExtraImages(updatedExtraImages);
    formik.setFieldValue('images', updatedExtraImages);
  };

  const addExtraImage = () => {
    setExtraImages([...extraImages, '']);
  };

  const formik = useFormik<ProductCreate>({
    initialValues:
      isEdit && productFromId
        ? {
            title: productFromId.title,
            image: productFromId.image,
            images: productFromId.images,
            price: productFromId.price,
            pieces: productFromId.pieces,
            description: productFromId.description,
          }
        : {
            title: '',
            image: '',
            images: [],
            price: '' as any,
            pieces: '' as any,
            description: '',
          },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const filteredImages = (values.images || []).filter(
        (image) => image.trim() !== ''
      );

      const newProduct: Product = {
        id: isEdit && productFromId ? productFromId.id : generateShortId(),
        image: values.image,
        title: values.title,
        description: values.description,
        price: values.price,
        pieces: values.pieces,
        images: filteredImages,
      };

      if (isEdit) {
        setProducts(
          products.map((product) =>
            product.id === newProduct.id ? newProduct : product
          )
        );
      } else {
        setProducts([...products, newProduct]);
      }

      if (onClose) {
        onClose();
      }
      navigate('/admin');
    },
  });

  //--------------------------Return------------------------------//

  return (
    <Box>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle variant="h4">
          {isEdit ? 'Edit item' : 'Add new item'}
        </DialogTitle>
        <DialogContent>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            autoComplete="off"
            data-cy="product-form"
          >
            <TextField
              fullWidth
              margin="normal"
              variant="standard"
              id="title"
              name="title"
              inputProps={{
                'data-cy': 'product-title',
              }}
              label={
                <>
                  Title<span style={requiredIndicator}>*</span>
                </>
              }
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              onBlur={formik.handleBlur}
              FormHelperTextProps={
                { 'data-cy': 'product-title-error' } as FormHelperTextProps
              }
            />
            <TextField
              fullWidth
              margin="normal"
              variant="standard"
              id="price"
              name="price"
              inputProps={{
                'data-cy': 'product-price',
              }}
              label={
                <>
                  Price<span style={requiredIndicator}>*</span>
                </>
              }
              type="number"
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
              FormHelperTextProps={
                { 'data-cy': 'product-price-error' } as FormHelperTextProps
              }
              onBlur={formik.handleBlur}
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
              onBlur={formik.handleBlur}
            />
            <TextField
              fullWidth
              margin="normal"
              variant="standard"
              id="description"
              name="description"
              inputProps={{
                'data-cy': 'product-description',
              }}
              label={
                <>
                  Description<span style={requiredIndicator}>*</span>
                </>
              }
              value={formik.values.description}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={
                formik.touched.description && formik.errors.description
              }
              FormHelperTextProps={
                {
                  'data-cy': 'product-description-error',
                } as FormHelperTextProps
              }
            />
            <TextField
              fullWidth
              margin="normal"
              variant="standard"
              id="image"
              name="image"
              inputProps={{
                'data-cy': 'product-image',
              }}
              label={
                <>
                  Image<span style={requiredIndicator}>*</span>
                </>
              }
              value={formik.values.image}
              onChange={formik.handleChange}
              error={formik.touched.image && Boolean(formik.errors.image)}
              helperText={formik.touched.image && formik.errors.image}
              onBlur={formik.handleBlur}
              FormHelperTextProps={
                { 'data-cy': 'product-image-error' } as FormHelperTextProps
              }
            />
            {extraImages.map((imageUrl, index) => (
              <TextField
                key={index}
                fullWidth
                margin="normal"
                variant="standard"
                id={`extra-image-${index}`}
                name={`extra-image-${index}`}
                label={`Extra Image ${index + 1}`}
                value={imageUrl}
                onChange={(e) => handleExtraImageChange(index, e.target.value)}
              />
            ))}
            <Button
              onClick={addExtraImage}
              disabled={extraImages.length >= 4}
            >
              Add more images
            </Button>
          </Box>
        </DialogContent>
        <DialogActions sx={buttonContainer}>
          <AdminButton to="/admin">Cancel</AdminButton>
          <AdminButton
            type="submit"
            onClick={formik.handleSubmit}
          >
            {isEdit ? 'Save' : 'Add'}
          </AdminButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

const buttonContainer = {
  justifyContent: 'space-between',
  margin: '0 1rem',
};

const requiredIndicator = {
  color: 'red',
};