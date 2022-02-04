import { Button, createTheme, responsiveFontSizes, ThemeProvider, Typography } from '@mui/material';
import makeStyles from '@material-ui/core';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import LogoImage from './../images/circle_logo_cropped.png'
import HeaderImage from './../images/home_page_header.jpeg'
import LogoText from './../images/logo-text-new.png'
import TestHeaderImage from './../images/gallery5_copy.jpeg'


let theme = createTheme();
theme = responsiveFontSizes(theme);

function HomePage() {

 
    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" disableGutters={true}>
          
          <Box sx={{
            position: "relative"
          }}>

          <Grid container
            spacing={0}
            align-content="center"
            justifyContent="center"
            >
              
                  <Box
                sx={{
                  position: "absolute",
                  m: 20
                }}>
                  
                  <Typography variant="h1" color="white" fontFamily="Monsterrat" align="center">
                        Evergreen Arrangements
                      </Typography>
                </Box>
                
              
          </Grid>
          <Box
                sx={{
                  position: "absolute",
                  m: 20
                }}>
                    <Typography variant="h6" color="evergreenTheme.warning.main" fontFamily="Helvetica Neue">
                      Making All Your Greens Come True
                    </Typography>
                  </Box>
            
            <img src={HeaderImage} width="100%" height="100%"/>

          </Box>
            

          
          
            <Box sx={{
              m:4
            }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>

                  
                </Grid>
                <Grid item xs={12} sm={6}>
                  <img src={LogoImage} width="300" height="300"></img>
                </Grid>

              </Grid>
            </Box>
          
        </Container>
        </ThemeProvider>
    );
}
  
export default HomePage;
  
