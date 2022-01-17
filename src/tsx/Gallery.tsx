import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import test from './../images/gallery/gallery1.jpg';
import Masonry from 'react-masonry-css'
import {Container, Fade, useMediaQuery, useTheme} from '@material-ui/core'
import IMAGES from './../images/index.js';
import VizSensor from 'react-visibility-sensor';
import { useState } from 'react';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

function useIsWidthUp(breakpoint) {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up(breakpoint));
}

function Gallery(props) {

  const isSmUp = useIsWidthUp("sm");
  let [active, setActive] = useState(false);


    return  (

        <Container>

        
        <Box sx={{ overflowY: 'scroll'}}>
        <ImageList variant="masonry" cols={isSmUp ? 2 : 1} gap={15}>
          {itemData.map((item) => (

                                <a href={`${item.img}`}>
                                  <Fade in timeout={3000}>

                                  
            <ImageListItem key={item.img}>
              ]
                  <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="eager"
              />
              
            </ImageListItem>
            </Fade>
            </a>
                                
              
          ))}
        </ImageList>
      </Box>
      </Container>
          
    )
}

const itemData = [
    {
      img: IMAGES.gallery1,
      title: 'gallery1',
    },
    {
      img: IMAGES.gallery2,
      title: 'gallery2',
    },
    {
    img: IMAGES.gallery3,
    title: 'gallery3',
    },
    {
    img: IMAGES.gallery4,
    title: 'gallery4',
    },
    {
    img: IMAGES.gallery5,
    title: 'gallery5',
    },
    {
    img: IMAGES.gallery6,
    title: 'gallery6',
    },
    {
    img: IMAGES.gallery7,
    title: 'gallery7',
    },
    {
    img: IMAGES.gallery8,
    title: 'gallery8',
    },
    {
    img: IMAGES.gallery9,
    title: 'gallery9',
    },
    {
    img: IMAGES.gallery10,
    title: 'gallery10',
    },
    {
    img: IMAGES.gallery11,
    title: 'gallery11',
    },
    {
    img: IMAGES.gallery12,
    title: 'gallery12',
    },
    
  ];
export default Gallery;
