import * as React from 'react';
import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Container, Grid, Link, Fade, createTheme, ThemeProvider } from '@material-ui/core';
import VizSensor from 'react-visibility-sensor';
import Box from '@mui/material/Box';

  
function Footer(props) {

    let [active, setActive] = useState(false);
    return(
        
        <footer>
            <Box 
            px={{xs: 3, sm: 10}}
            py={{xs: 5, sm: 10}}
            bgcolor="primary.main">
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box color="white">
                                <VizSensor
                                    onChange={(isVisible) => {
                                        setActive(isVisible);
                                    }}
                                >
                                    <Fade in={active} timeout={2000}>
                                        <Box sx={{
                                            fontFamily: 'Arial'
                                        }}>
                                            <IconButton
                                                size="large"
                                                color="inherit"
                                                href={"https://www.instagram.com/dustypineflorals/?hl=en"}
                                                >
                                                    <InstagramIcon/>
                                                    <Typography >
                                                    @evergreen.floral.arrangements
                                                </Typography>
                                                </IconButton>
                                        
                                        </Box>
                                    </Fade>
                                </VizSensor>                            
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box>
                                <VizSensor
                                    onChange={(isVisible) => {
                                        setActive(isVisible);
                                    }}
                                >
                                    <Fade in={active} timeout={3000}>
                                        <Typography variant="h3" gutterBottom></Typography>
                                    </Fade>
                                </VizSensor>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
       
        
    );
};
export default Footer;