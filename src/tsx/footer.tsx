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
import { Container, Grid, Link, Fade, createTheme, ThemeProvider, useTheme } from '@material-ui/core';
import VizSensor from 'react-visibility-sensor';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import LogoImage from './../images/circle_logo_cropped.png'
import useMediaQuery from '@mui/material/useMediaQuery';


function useIsWidthUp(breakpoint) {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.up(breakpoint));
  }

function Footer(props) {

    const isSmUp = useIsWidthUp("sm");
    let [active, setActive] = useState(false);
    return(
        
        <footer>
            <Box 
            px={{xs: 1, sm: 4}}
            py={{xs: 1, sm: 6}}
            
            bgcolor="primary.main">
                
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Box color="white">
                                <Stack spacing={0}>
                                    <ListItem>
                                    <VizSensor
                                    onChange={(isVisible) => {
                                        setActive(isVisible);
                                    }}
                                >
                                    <Fade in={active} timeout={2000}>
                                        <Box sx={{
                                            fontFamily: 'Arial',
                                            
                                        
                                        }}>
                                            <IconButton
                                                size="small"
                                                color="inherit"
                                                href={"https://www.instagram.com/dustypineflorals/?hl=en"}
                                                >
                                                    <InstagramIcon/>
                                                    <Typography variant="caption" fontFamily="Helvetica Neue">
                                                    @evergreen.floral.arrangements
                                                    </Typography>
                                                </IconButton>
                                        
                                        </Box>
                                    </Fade>
                                </VizSensor>    
                                    </ListItem>
                                    <ListItem>
                                    <VizSensor
                                    onChange={(isVisible) => {
                                        setActive(isVisible);
                                    }}
                                >
                                    <Fade in={active} timeout={3000}>
                                        <Box sx = {{
                                            color: "white",
                                        
                                        }}>
                                            <IconButton
                                                size="small"
                                                color="inherit"
                                                
                                                href={"/Contact"}
                                                >
                                                    <EmailIcon color="inherit"/>
                                                <Typography variant="caption" fontFamily="Helvetica Neue">
                                                    evergreen.floral.arrangements@gmail.com
                                                </Typography>
                                                </IconButton>
                                            
                                        </Box>
                                        
                                    </Fade>
                                </VizSensor>
                                    </ListItem>
                                </Stack>
                                                        
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} alignItems="flex-end">
                            <Stack direction="row" justifyContent={isSmUp ? "end" : "center"}>
                            <img src={LogoImage} width="100" height="100" ></img>
                            </Stack>
                                
                            
                        </Grid>
                      
                    </Grid>
                
            </Box>
        </footer>
       
        
    );
};
export default Footer;