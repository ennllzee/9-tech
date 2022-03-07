import {
  Dialog,
  DialogContent,
  CardMedia,
  Button,
  DialogActions,
} from "@material-ui/core";

interface LineProps {
  open: boolean;
  setOpen: any;
}

function Line({ open, setOpen }: LineProps) {
  return (
    <Dialog
      open={open}
    //   fullWidth={true}
      aria-describedby="alert-dialog-description"
    >
      <DialogContent id="alert-dialog-description" style={{ padding: 0 }}>
        <CardMedia
          component="img"
          image="/pic/qr.jpg"
          alt="Live from space album cover"
        />
      </DialogContent>

      <DialogActions style={{ paddingTop: 0 }}>
        <Button onClick={() => setOpen(false)}>close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default Line;
