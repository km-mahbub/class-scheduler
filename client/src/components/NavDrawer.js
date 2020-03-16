import React, { useState, useLayoutEffect } from 'react';
import { withTranslation } from 'react-i18next';
import clsx from 'clsx';

import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';

import { mainListItems } from '../utils/drawerListItems';
import { drawerStore } from '../rxStores';
import { NavDrawerStyles as useStyles } from '../styles';

function NavDrawer(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(drawerStore.initialState);

  useLayoutEffect(() => {
    const subs = drawerStore.subscribe(setOpen);
    drawerStore.init();

    return () => subs.unsubscribe();
  }, []);

  const handleDrawerClose = () => {
    drawerStore.toggleOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
    </Drawer>
  );
}

export default withTranslation()(NavDrawer);

