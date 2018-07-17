// Import React components
import React from 'react';

// Import React - Router
import { Link } from "react-router-dom";

// Import Icons from Material UI
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Productos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Sobre Nosotros" />
    </ListItem>
    
    
    <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
      <Link to="/contacto"  style={{textDecoration: "none", color:"black"}}>
        <ListItemText primary="Contacto" />
    </Link>
      </ListItem>
  </div>
);

