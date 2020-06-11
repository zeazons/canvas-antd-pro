import React from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Drawer,
  DialogTitle as DrawerTitle,
  DialogContent as DrawerContent,
  CardHeader,
  Avatar,
} from '@material-ui/core';

// import { Drawer } from "antd";

// import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const styles = (theme) => ({
  root: {
    margin: 0,
    // padding: 0,
    // padding: theme.spacing(0),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, title, group, classes, onClose, ...other } = props;

  return (
    <CardHeader
      avatar={
        <Avatar
          src="https://dl.dropboxusercontent.com/s/1haaxjrsx6cytui/decision.svg"
          className={classes.avatar}
        />
      }
      action={
        onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            {/* <CloseIcon /> */}
            <FontAwesomeIcon icon={faTimes} />
          </IconButton>
        ) : null
      }
      title={title || ''}
      subheader={group || ''}
    />
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
  },
}))(DrawerContent);

const DrawerProperties = (props) => {
  const { size, anchor, title, group, icon, children, showDrawer, onCloseDrawerHandler } = props;

  let drawerSize = 'auto';
  switch (size) {
    case 'sm':
      drawerSize = 576;
      break;
    case 'md':
      drawerSize = 768;
      break;
    case 'lg':
      drawerSize = 992;
      break;
    case 'xl':
      drawerSize = 1200;
      break;
    default:
      drawerSize = 'auto';
      break;
  }

  const useStyles = makeStyles((theme) => ({
    drawerPaper: {
      width: drawerSize,
    },
  }));

  const classes = useStyles();

  return (
    // <Drawer
    //   title={title}
    //   placement="right"
    //   closable={true}
    //   onClose={onCloseDrawerHandler}
    //   visible={showDrawer}
    //   width={720}
    // >
    //   {children}
    // </Drawer>
    <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor={anchor}
      open={showDrawer}
      onClose={onCloseDrawerHandler}
    >
      <DialogTitle
        id="customized-dialog-title"
        title={title}
        group={group}
        icon={icon}
        onClose={onCloseDrawerHandler}
      ></DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Drawer>
  );
};

export default DrawerProperties;
