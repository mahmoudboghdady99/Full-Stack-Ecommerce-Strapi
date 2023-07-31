import { Accordion, AccordionSummary, Box, Container,  Drawer,  IconButton,  List,  ListItem,  ListItemButton,  ListItemIcon,  ListItemText,  Stack,  Typography, useMediaQuery } from '@mui/material'
import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import WindowIcon from '@mui/icons-material/Window'
import KeyboardArrowRightOutlined from '@mui/icons-material/KeyboardArrowRightOutlined'
import { useTheme } from '@emotion/react';
import MenuIcon from '@mui/icons-material/Menu';
import { ElectricBikeOutlined, LaptopChromebookOutlined, MenuBookOutlined, SportsEsportsOutlined } from '@mui/icons-material';
import CurtainsClosedIcon from '@mui/icons-material/CurtainsClosed';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Links from './Links';

function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme=useTheme()

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container sx={{
      display: 'flex', alignItems: 'center',
       justifyContent: 'space-between',
       mt: 5
       }}>

    <Box>
      <Button sx={{
        border: '1px solid #F6F9Fc',
        width: '222px', justifyContent: 'space-around', color: theme.palette.text.primary
      
              }}
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <WindowIcon  />
          <Typography variant='body2' sx={{p: '0', mx: 1,  }}>
            Categories
          </Typography>
          <KeyboardArrowRightOutlined />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{ ".MuiPaper-root": { width: '220px' } }}
        >

  <MenuItem onClick={handleClose}>
    <ListItemIcon>
        <ElectricBikeOutlined />
    </ListItemIcon>
        <ListItemText> Bikes </ListItemText>
  </MenuItem>

  <MenuItem onClick={handleClose}>
    <ListItemIcon>
        <LaptopChromebookOutlined />
    </ListItemIcon>
        <ListItemText> Electronic </ListItemText>
  </MenuItem>

  <MenuItem onClick={handleClose}>
    <ListItemIcon>
        <MenuBookOutlined />
    </ListItemIcon>
        <ListItemText> Books </ListItemText>
  </MenuItem>

  <MenuItem onClick={handleClose}>
    <ListItemIcon>
        <SportsEsportsOutlined />
    </ListItemIcon>
        <ListItemText> Games</ListItemText>
  </MenuItem>

     
        </Menu>
    </Box>

    { useMediaQuery('(min-width: 1000px') && ( 
 <Stack gap={4} direction={'row'} >
     <Links title={"Home"} />
     <Links title={"Mega Menu"} />
     <Links title={"Full Screen Menu"} />
     <Links title={"Pages "} />
     <Links title={"User Account "} />
     <Links title={"Profile Account "} />
 </Stack>
     ) }
          

   

    { useMediaQuery('(max-width: 1000px') && ( <IconButton onClick={toggleDrawer("top", true)} >
     <MenuIcon  />
   </IconButton> ) }

   

   <Drawer sx={{ bgcolor: "#777",  
    ".MuiPaper-root.css-1tmu6hb-MuiButtonBase-root-MuiAccordionSummary-root": {
       height: '100%' } }}
            anchor={"top"}
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
          >
            

        <Box sx={{
        
          width: "444px", mt: 6, mx: 'auto',
          position: 'relative', pt: 5
          }}  >

        <IconButton onClick={toggleDrawer("top", false)}  sx={{
        position: 'absolute',
        top: 0, right: "10px",
        "&:hover" : { rotate: '360deg', transition: '.3s', color: 'red'}
        }} >
          <CurtainsClosedIcon />
        </IconButton>

     
      
     {[ 
      { mainLink: "Home", subLink: [ "link1", "link2", "link3" ] },
      { mainLink: "Mega Menu", subLink: [ "link1", "link2", "link3" ] },
      { mainLink: "Full Screen Menu", subLink: [ "link1", "link2", "link3" ] },
      { mainLink: "Pages", subLink: [ "link1", "link2", "link3" ] },
      { mainLink: "User Account", subLink: [ "link1", "link2", "link3" ] },
      { mainLink: "Vendor account", subLink: [ "link1", "link2", "link3" ] },
      
      ].map((item, index) => {
      return(
        <Accordion elevation={0} sx={{ bgcolor: '#777' }} key={item.mainLink}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{item.mainLink} </Typography>
        </AccordionSummary>

        <List  sx={{py: 0, my: 0}} >
      
      {
        item.subLink.map((link) => {
          return(
            <ListItem sx={{py: 0, my: 0}} key={link} >
            <ListItemButton>
              <ListItemText primary={link} />
            </ListItemButton>
          </ListItem>
          )
        }
        )
      }
        
        </List>
        </Accordion>
      )
     })}
     
        </Box>

          </Drawer>

    </Container>
  )
}

export default Header3
