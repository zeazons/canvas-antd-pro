import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  IconButton,
  Typography,
} from '@material-ui/core';

// import CloseIcon from "@material-ui/icons/Close";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          {/* <CloseIcon /> */}
          <FontAwesomeIcon icon={faTimes} />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const Modal = (props) => {
  const { size, title, children, showModal, onCloseModalHandler } = props;

  return (
    <div>
      <Dialog
        maxWidth={size || 'lg'}
        onClose={onCloseModalHandler}
        aria-labelledby="customized-dialog-title"
        open={showModal}
        disableBackdropClick
      >
        <DialogTitle id="customized-dialog-title" onClose={onCloseModalHandler}>
          {title}
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
};

export default Modal;
