import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';
import AdminButton from './AdminButton';

interface AdminEditFormProps {
  open: boolean;
  handleClose: () => void;
}

export default function AdminEditForm({ open, handleClose }: AdminEditFormProps) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Edit item</DialogTitle>
      <DialogContent>
        <p>HELLO</p>
      </DialogContent>
      <DialogActions>
        <AdminButton onClick={handleClose}>Cancel</AdminButton>
        <AdminButton onClick={handleClose}>Add item</AdminButton>
      </DialogActions>
    </Dialog>
  );
}
