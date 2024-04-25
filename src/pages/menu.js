import React from "react";
import MainImage from '../components/Image/image';
import FoodMenuItems from '../components/FoodMenuItems/FoodMenuItems'

import image from '../images/a3.jpg';
import cookies from "../images/cookies.jpg";
import hamburger from "../images/burgers.webp";
import clubSand from "../images/clubSand.jpg";
import wings from "../images/wings.jpg";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export default function Menu() {
    return (
        <>

            <div className="account">
                <MainImage imageProp={image}></MainImage>
                <div className="container">
                    <div className='ui-dashboard'>
                        <Card sx={{ display: 'flex' }}>
                            <CardActionArea sx={{display: 'flex'}}>

                                <CardMedia
                                    component="img"
                                    sx={{ width: '100px', height: '100px', position: 'absolute', right: '0' }}
                                    image={cookies}
                                    alt="Live from space album cover"
                                />
                                {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}> */}
                                    <CardContent sx={{ flex: '1 0 auto', 'text-align': 'left' }}>
                                        <Typography component="div" variant="h5">
                                            Home Made Cookies
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            $7.99
                                        </Typography>
                                    </CardContent>
                                {/* </Box> */}
                            </CardActionArea>
                        </Card>

                        <Card sx={{ display: 'flex', margin: '10px 0' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto', 'text-align': 'left' }}>
                                    <Typography component="div" variant="h5">
                                        American Hamburgers
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        $29.00
                                    </Typography>
                                </CardContent>

                            </Box>

                            <CardMedia
                                component="img"
                                sx={{ width: '100px', height: '100px', position: 'absolute', right: '0' }}
                                image={hamburger}
                                alt="Live from space album cover"
                            />


                        </Card>

                        <Card sx={{ display: 'flex', margin: '10px 0' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto', 'text-align': 'left' }}>
                                    <Typography component="div" variant="h5">
                                        Club Sandwhich
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        $15.99
                                    </Typography>
                                </CardContent>

                            </Box>

                            <CardMedia
                                component="img"
                                sx={{ width: '100px', height: '100px', position: 'absolute', right: '0' }}
                                image={clubSand}
                                alt="Live from space album cover"
                            />


                        </Card>

                        <FoodMenuItems
                            title="Wings"
                            price="29.99"
                            image={wings} />
                    </div>
                </div>
            </div>

        </>
    )
}