import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import LogoImage from './../images/circle_logo_cropped.png'

function HomePage() {
    return (
        <Container maxWidth="xl">
            <Box sx={{
              m:4
            }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <Typography variant="h1" color="primary.main" fontFamily="Monsterrat">
                    Evergreen Arrangements
                  </Typography>
                  <Typography variant="h6" color="warning.main" fontFamily="Helvetica Neue">
                    Making All Your Greens Come True
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <img src={LogoImage} width="300" height="300"></img>
                </Grid>

              </Grid>
            </Box>
          
        </Container>
    );
}
  
export default HomePage;
  
