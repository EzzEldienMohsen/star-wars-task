import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250, padding: '16px', fontSize: '20px' }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        <Link to="/allNamesPage">star wars characters</Link>
      </List>
    </Box>
  );

  return (
    <div>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          backgroundColor: '#A61D33',
          color: '#EDF7ED',
          padding: '16px',
          fontSize: '40px', // You can also handle breakpoints here
          '&:hover': {
            backgroundColor: '#8B1A29', // Optional hover effect
          },
        }}
      >
        star wars
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Landing;
