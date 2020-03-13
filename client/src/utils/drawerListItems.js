import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ClassTwoToneIcon from '@material-ui/icons/ClassTwoTone';
import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Translation } from 'react-i18next';

export const mainListItems = (
  <Translation>
    {
      (t) => (
        <div>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={t('drawer.dashboard')} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ClassTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary={t('drawer.classes')} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MailOutlineTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary={t('drawer.messageBox')} />
          </ListItem>
        </div>
      )
    }
  </Translation>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);