import {  ExpandMore, ShoppingCartOutlined } from '@mui/icons-material'
import { Container, Stack, Typography, InputBase, Button } from '@mui/material'
import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Search = styled('div')(({ theme }) => ({
  flexGrow: ".4",
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    border: '1px solid #333',
  },
  border: "1px solid #777",
  marginLeft: 0,
  width: '277px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '330px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#777'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const options = [
  'Clothes',
  'All Category',
  'Car',
  'Electronics',

];
function Header2() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container sx={{my: 3 , display: 'flex', justifyContent: 'space-between' }}>
            {/* يتكون من 3 اجزاء */}
            {/* الجزء الاول */}
            <Stack alignItems={'center'}>
              <ShoppingCartOutlined />
              <Typography variant='body2'>
                E-commerce
              </Typography>
            </Stack>
             {/* الجزء الثانى */}
             <Search sx={{
              borderRadius: '22px', display: 'flex', justifyContent: "space-between"
             }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            {/* selected menue */}
            <div>
            <List sx={{p: '0', m: '0', 
            bgcolor: "#777", borderTopRightRadius: "19px", WebkitBorderBottomRightRadius: "19px",  
          p: '0'
        }}
         component="nav"
         aria-label="Device settings"
       >
         <ListItem
         
           id="lock-button"
           aria-haspopup="listbox"
           aria-controls="lock-menu"
           aria-label="when device is locked"
           aria-expanded={open ? 'true' : undefined}
           onClick={handleClickListItem}
           sx={{" &:hover": { cursor: "pointer" } }}
         >
           <ListItemText
             sx={
               {".MuiTypography-root" :{ fontSize: '14px' ,color: "#fff"} ,
               "&:hover": {cursor: 'pointer'}
               
             }
             
             }
             secondary={options[selectedIndex]}
           />
         <ExpandMore sx={{color: "#fff"}}/>
         </ListItem>
       </List>
       <Menu
         id="lock-menu"
         anchorEl={anchorEl}
         open={open}
         onClose={handleClose}
         MenuListProps={{
           'aria-labelledby': 'lock-button',
           role: 'listbox',
         }}
       >
         {options.map((option, index) => (
           <MenuItem
           sx={{ fontSize: "12px", p: "3px 10px", minHeight: "10px",   }}
             key={option}
            
             selected={index === selectedIndex}
             onClick={(event) => handleMenuItemClick(event, index)}
           >
             {option}
           </MenuItem>
         ))}
       </Menu>
            </div>
          </Search>
                       {/* الجزء الثالت ايكونز */}

<Stack direction={'row'} alignItems={'center'}>
  
  
     <IconButton aria-label="cart">
    <StyledBadge badgeContent={4} color="primary">
      <ShoppingCartIcon />
    </StyledBadge>
  </IconButton>

  <Button>
       <PersonOutlineIcon sx={{ fontSize: '25px'}} />
     </Button>
</Stack>
   
  
    </Container>
  )
}

export default Header2
