import React, { useState } from 'react';
import { Box, Button, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

function ProductDetails({ clickedProduct }) {




  const [selectedImage, setselectedImage] =useState(0)

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2.5, p: 1.5
        }}
      >

        <Box sx={{ display: 'flex' }}>
          <img
            width={400}
            height={400}
            src={`http://localhost:1337${clickedProduct.attributes.image.data[selectedImage].attributes.url } `}
            alt='Product Image'
          />
        </Box>

        <Box  sx={{ textAlign: { xs: 'center', sm: 'left' },  }}>
          <Typography variant='h5'>{clickedProduct.attributes.title}</Typography>
          <Typography variant='body1' my={0.4} fontSize={22} color='red'>
            ${clickedProduct.attributes.price}
          </Typography>
          <Typography variant='body1'>{clickedProduct.attributes.description}</Typography>

          <Box  direction='row' gap={3} sx={{ 
            justifyContent: { xs: 'center', sm: 'left' },
            p: 3, bgcolor: "#f6f6f6", my: 3
            }}>

<ToggleButtonGroup
  value={selectedImage}
  exclusive
  
  sx={{
    ".Mui-selected": { opacity: "1" }
  }}
>
  {clickedProduct.attributes.image.data.map((item, index) => (
    <ToggleButton
     key={item.id} value={index} 
    sx={{
      width: "110px", height: "110px", p: '0', opacity: "0.5", mx: .5
    }}
     
     >
      <img
        onClick={() => setselectedImage(index)}
        style={{ borderRadius: 3, margin: '0 3px', cursor: "pointer" }}
        width={'100%'}
        height={'100%'}
        src={`http://localhost:1337${item.attributes.url}`}
        alt='image-product'
      />
    </ToggleButton>
  ))}
</ToggleButtonGroup>

          </Box>

          <Button sx={{ mb: { xs: 1, sm: 0 } }} variant='contained'>
            <AddShoppingCart sx={{ mr: 1, fontSize: 'medium' }} />
            Buy Now
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default ProductDetails;
