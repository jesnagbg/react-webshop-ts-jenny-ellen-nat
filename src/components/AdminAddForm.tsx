import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';
import AdminButton from './AdminButton';

interface AdminAddFormProps {
  open: boolean;
  handleClose?: () => void;
}



export default function AdminAddForm({ open, handleClose }: AdminAddFormProps) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Add new item</DialogTitle>
      <DialogContent>
        <p>HELLO</p>
      </DialogContent>
      <DialogActions>
        <AdminButton to="/admin">Cancel</AdminButton>
        <AdminButton onClick={handleClose}>Add item</AdminButton>
      </DialogActions>
    </Dialog>
  );
}
