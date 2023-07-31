import { AddShoppingCart } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

function ProductDetails() {
    const image1 = 'https://th.bing.com/th?id=OIP.pXPYcCeogjMq6K_18Z2iSgHaJC&w=226&h=276&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
    const image2 = "https://th.bing.com/th?id=OIP.Vl2O6MOza6BoGwFNzeASkwHaHa&w=249&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"    
  return (
    <div>
      
      <Box sx={{display: "flex", alignItems: 'center',
      flexDirection: { xs: "column", sm: "row" }
    
    }} gap={2.5}>
          <Box sx={{display: 'flex'}}>
          <img width={400} height={400} src='https://th.bing.com/th?id=OIP.c4MCiDFgSGLsR_7-4-j0PwHaEK&w=333&h=187&c=8&rs=1&qlt=30&o=6&pid=3.1&rm=2' alt='image' /> 
          </Box>

    <Box  sx={{ textAlign: { xs: "center", sm: "left" } }} >
        <Typography variant='h5'> Women Fashion </Typography>
        <Typography variant='body1' my={.4} fontSize={'22px'} color={'red'} > $ 12.99 </Typography>
        <Typography variant='body1'>
             This is the content of the dialog. 
            Replace this with your actual content.
        </Typography>
  
         <Stack direction={'row'} gap={1} my={2} sx={{ 
          justifyContent: {xs: "center", sm: "left" } }}>
         {["image1", "image2"].map((item) => {
            return(
    <img style={{ borderRadius: 3 }} key={item} width={90}   height={100} 
  
    src={eval(item)} alt='image' />
                )
            })}
         </Stack>
    <Button sx={{ mb: {xs: 1, sm: 0}}} variant='contained' > 
        <AddShoppingCart sx={{mr: 1, fontSize: 'medium'}} /> 
        Buy Now</Button>

    </Box>
        </Box>
    </div>
  )
}

export default ProductDetails
