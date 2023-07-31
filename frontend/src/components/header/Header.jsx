import  {useState} from "react";
import { Box, Typography, Stack, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Them from "../../Them";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { ExpandMore, FolderZip } from "@mui/icons-material";

const options = [
  'AR',
  'EN',

];

function Header({ setMyMode }) {
  // دور على الناقص 
  const theme = useTheme();
  const themUPD=  <Them theme={theme} setMyMode={setMyMode} />

  
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
    <Box sx={{ bgcolor: "#2B3445", py: '4px', borderBottomLeftRadius: "4px", borderBottomRightRadius: '4px' }}>
   <Container>
       <Stack direction={"row"} alignItems={"center"}>
         <Typography
           sx={{
             bgcolor: "#D23F57",
             color: "#fff",
             borderRadius: "12px",
             mr: 2,
             p: "3px 10px",
             fontSize: "10px",
             fontWeight: "bold",
           }}
           variant="body2"
         >
           HOT
         </Typography>
         <Typography
           variant="body2"
           sx={{
             fontSize: "12px",
             fontWeight: 300,
             color: "#fff",
           }}
         >
           Free Express Shipping
         </Typography>
         <Box flexGrow={1}></Box>
         <Typography variant="body2" color={"#fff"} sx={{}}>
         
           {themUPD}
         </Typography>
    
           {/* selected menu */}
       <List sx={{p: '0', m: '0'}}
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
    
    
    
           {/* icons */}
           <FacebookIcon sx={{color: '#fff'}} className="marginItemIcon"/>
           <TwitterIcon sx={{color: '#fff'}} className="marginItemIcon"/>
           <InstagramIcon sx={{color: '#fff'}} className="marginItemIcon"/>
    
       </Stack>
   </Container>
    </Box>
  );
}

export default Header;
