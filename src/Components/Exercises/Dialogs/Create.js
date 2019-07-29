import React, { Fragment } from 'react';
import { Button, Dialog, DialogContent, DialogTitle, DialogActions, DialogContentText, Icon, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <Fragment>
            <Fab
                // color="white"
                aria-label="add"
                size="large"
                onClick={handleClickOpen}
            >
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create New Exercise</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fill out the form to add an exercise
                </DialogContentText>
                    <form>

                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="inherit" variant="raised">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="inherit" variant="raised">
                        Add
          </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}