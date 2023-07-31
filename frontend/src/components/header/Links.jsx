import { Box, List, ListItem, ListItemButton,  ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { KeyboardArrowRightOutlined } from '@mui/icons-material';

function Links({title}) {
  return (
    <Box  sx={{ 
      "&:hover": { ".show-icons": { display: 'block',
      "&:hover": { cursor: 'pointer'  ,    }
    
    } },
    display: 'flex',
     alignItems: 'center', position: 'relative'
    
     }}>
  
      <Typography variant='body1'>
        {title}
      </Typography>
  
      <ExpandMoreIcon sx={{ fontSize: '16px', ml: 1}} />
        
 <Box className={' show-icons'}  sx={{ position: 'absolute', 
    left: '50%', top: '100%', minWidth: '120px',
    transform: 'translateX(-50%)', display: 'none', zIndex: '999'
}}>
       <nav aria-label="secondary mailbox folders" sx={{    }}>
        
   
         <List >

           <ListItem disablePadding sx={{".MuiTypography-root": {'fontSize': '15px' } }}>
             <ListItemButton>
               <ListItemText primary="Dashboard" />
             </ListItemButton>
           </ListItem>
         
           <ListItem  disablePadding sx={{ "&:hover .sub-link ": {display: 'block' } }} >
             <ListItemButton
             sx={{
              display: 'flex',
               justifyContent: 'space-between', 
             }}
             >
               <ListItemText
               sx={{
                "& .MuiTypography-root": {
                  fontSize: '15px', fontWeight: 300, 
                }
               }}
               primary="Products" />
               <KeyboardArrowRightOutlined fontSize='small' />
             </ListItemButton>
               {/* قائمة جانبية متفرعة  */}
  <Box className={' sub-link'} sx={{position: 'absolute', top: '0', left: '100%', minWidth: '150px', display: 'none'}}>
    <Paper sx={{bgColor: 'red'}} >
        <nav aria-label="secondary mailbox folders"  sx={{    }}>
         <List elevation={0}  sx={{ bgcolor: '#fff', color: "#222" }}>
          <ListItem elevation={0} disablePadding sx={{".MuiTypography-root": {'fontSize': '14px',  },   }}>
            <ListItemButton >
              <ListItemText primary="Add Product"  />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{".MuiTypography-root": {'fontSize': '14px' } }}>
            <ListItemButton>
              <ListItemText primary="Edit Product" />
            </ListItemButton>
          </ListItem>
      </List>
  </nav>
                </Paper>
               </Box>

           </ListItem>

           <ListItem disablePadding sx={{".MuiTypography-root": {'fontSize': '15px' }}}>
             <ListItemButton>
               <ListItemText primary="orders" />
             </ListItemButton>
           </ListItem>

           <ListItem disablePadding sx={{".MuiTypography-root": {'fontSize': '15px' } }}>
             <ListItemButton>
               <ListItemText primary="Profile" />
             </ListItemButton>
           </ListItem>

         </List>
       </nav>
 </Box>

</Box>
  )
}

export default Links
