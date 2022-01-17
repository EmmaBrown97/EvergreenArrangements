import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import test from './../images/gallery/gallery1.jpg';
import Masonry from 'react-masonry-css'
import {Container} from '@material-ui/core'
import IMAGES from './../images/index.js';


function Gallery() {
    return  (

        <Box sx={{ overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={3} gap={20}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

          
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
