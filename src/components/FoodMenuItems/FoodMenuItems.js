import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function FoodMenuItems({title, price, image}) {



  return (
    <>
    
      <Card sx={{ display: 'flex', margin: '10px 0' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {price}
            </Typography>
          </CardContent>

        </Box>

        <CardMedia
          component="img"
          sx={{ width: '100px', height: '100px', position: 'absolute', right: '0' }}
          image={image}
          alt="Live from space album cover"
        />


      </Card>
    </>
  )
}
