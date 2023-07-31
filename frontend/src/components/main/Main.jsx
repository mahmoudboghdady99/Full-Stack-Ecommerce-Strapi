import React, { useState } from 'react'; // Add { useState }
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Dialog, IconButton,  Rating, Stack, Typography } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTheme } from '@emotion/react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import ProductDetails from './ProductDetails';
import {useGetproductByNameQuery} from '../redux/product'


function Main() {

  const them = useTheme()

  const handleAlignment = (event, newValue) => {
    setMyData(newValue)
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const AllProductsApi = "products?populate=*"
  const MensCategoryApi = "products?populate=*&filters[category][$eq]=men"
  const WomensCategoryApi = "products?populate=*&filters[category][$eq]=women"

  const [ MyData, setMyData] = useState(AllProductsApi)

  const { data, error, isLoading } = useGetproductByNameQuery(
      MyData
    )

  if(isLoading){
    return(
      <Container alignItems={"center"}>
        <Typography variant='h6'> LOADING ....... </Typography>
      </Container>
    )
  }

  if(error){
    return(
      <Typography variant='h6'> {error} </Typography>
    )
  }

 
  // data.data.attributes.image.data.attributes.url
  // filter men: http://localhost:1337/api/products?populate=*&filters[category][$eq]=men
  // filter women: http://localhost:1337/api/products?populate=*&filters[category][$eq]=women

  if(data){
    return (
      <Container sx={{ mt: 6 }}>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}
        flexWrap={'wrap'}
        gap={3}
        >
          <Box>
            <Typography variant='h6' sx={{ fontWeight: "600" }}>Selected Products</Typography>
            <Typography variant='body2'>All Our New Arrivals in an exclusive brand selection</Typography>
          </Box>
  
          <ToggleButtonGroup color='error'
            value={MyData}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton sx={{  
              color: them.palette.text.primary
              ,margin: "0 10px "}} value={AllProductsApi} aria-label="left aligned">
             All Products
            </ToggleButton>
            <ToggleButton sx={{ color: them.palette.text.primary, margin: "0 10px "}}
             value={MensCategoryApi} aria-label="centered">
              Men Category
            </ToggleButton>
            <ToggleButton sx={{ color: them.palette.text.primary}} 
            value={WomensCategoryApi} aria-label="right aligned">
              Women Category
            </ToggleButton>
  
          </ToggleButtonGroup>
        </Stack>
  
        <Stack direction={'row'} flexWrap={'wrap'}
        justifyContent={'space-between'}      
        >
         {data.data.map((item) => {
           return(
            <Card key={item} sx={{ maxWidth: 333, mt: 6 , ":hover .MuiCardMedia-root": { scale: '1.1', transition: '3s', rotate: '1deg' } }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="277"
              image={`http://localhost:1337${item.attributes.image.data[0].attributes.url}`}
              />
             <CardContent>
              <Stack direction={'row'} alignItems={"center"} justifyContent={'space-between'}>
                <Typography variant='h6' component='div'> {item.attributes.title} </Typography>
                <Typography variant='subTitle1' component={'p'}>  $ {item.attributes.price} </Typography>
              </Stack>
              <Typography variant='body2' component='div'>
               {item.attributes.descrption}
      
              </Typography>
      
             </CardContent>
             <CardActions sx={{  justifyContent:'space-between' }}>
              <Button 
              onClick={handleClickOpen}
              size="larg">
                  <AddShoppingCartIcon sx={{mr: 1}} fontSize='small' />
                  Add to cart
              </Button>
              <Rating name="read-only" value={item.attributes.rating} precision={0.5} readOnly />
            </CardActions>
            </Card>
           )
         }
         )}
      
  
      
  
        </Stack>
  
        <Dialog
        sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 0,
            right: "10px",
            "&:hover": { transform: 'rotate(360deg)', transition: '.3s', color: 'red' }
          }}
        >
          <CloseIcon />
        </IconButton>
      
       <ProductDetails />
        
      </Dialog>
      </Container>
    );
  }

 
}

export default Main;
