import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import BoardIcon from '@mui/icons-material/Dashboard';
import Template from '@mui/icons-material/Equalizer';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(isOpen);
  };

  const menuItems = [
    { text: 'Boards', icon: <BoardIcon /> },
    { text: 'Template', icon: <Template /> },
    
  ];

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon className=' text-primary'/>
      </IconButton>
      <Drawer anchor='left' open={open} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;