import { Container, Grid, makeStyles } from '@material-ui/core';
import { StayPrimaryLandscape } from '@material-ui/icons';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { palette } from '@mui/system';
import emailjs from 'emailjs-com'

const useStyles = makeStyles(theme => ({
    inputTextColor:{
        color: "#2B3E40",
        fontFamily: "Helvetica"
    },
    emailButtonColor:{
        color: "#B3BBAE"
    }
  }));
  
function Contact() {
    const classes = useStyles();
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_1divvnb', 'template_e2bbimm', e.target, 'user_OttdSPNzVKUCOj9rHl4Kv')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return  (
        <Container maxWidth="xl">
            <Box sx={{
                m: 10
            }}>

            
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Container maxWidth="lg">
                        <Box sx={{
                            
                        }}>
                            <Typography variant="h3" color="primary.main" fontFamily="Monsterrat">
                                Send Me An Email!
                            </Typography>
                            <Typography variant="subtitle2" color="primary.main" fontFamily="Helvetica">
                                If you have questions about pricing, date availability, or anything that I do, please send me an email!                    
                            </Typography>
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={12} md={6}>     
                        
                            <form onSubmit={sendEmail}>
                                <Grid container spacing={4}>

                                    <Grid item xs={12} sm={6}>
                                        <Box className="name_div">
                                            <TextField 
                                            fullWidth
                                            label="First Name" 
                                            variant="outlined" 
                                            className="textField" 
                                            color="secondary"
                                            focused
                                            InputProps={{
                                                className: classes.inputTextColor
                                              }}> 
                                            </TextField>
                                                    
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Box className="name_div" sx={{
                                            }}>
                                            <TextField 
                                            fullWidth
                                            label="Last Name" 
                                            variant="outlined" 
                                            className="textField" 
                                            color="secondary"
                                            focused
                                            InputProps={{
                                                className: classes.inputTextColor
                                              }}> 
                                            </TextField>
                                                    
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <div className="email_div">
                                                    <TextField 
                                                    fullWidth
                                                        label="Email Address" 
                                                        variant="outlined" 
                                                        className="textField" 
                                                        color="secondary"
                                                        focused
                                                        InputProps={{
                                                            className: classes.inputTextColor
                                                          }}> 
                                                        </TextField>
                                                </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                    <div className="subject_div">
                                                <TextField 
                                                fullWidth
                                                    label="Subject" 
                                                    variant="outlined" 
                                                    className="textField" 
                                                    color="secondary"
                                                    focused
                                                    InputProps={{
                                                        className: classes.inputTextColor
                                                      }}> 
                                                    </TextField>
                                            </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <div className="message_div">
                                                <TextField 
                                                fullWidth
                                                multiline={true}
                                                    label="Message" 
                                                    id="outlined-basic" 
                                                    variant="outlined" 
                                                    className="textField" 
                                                    color="secondary"
                                                    rows={5}
                                                    maxRows={10}
                                                    focused
                                                    InputProps={{
                                                        className: classes.inputTextColor
                                                      }}> 
                                                    </TextField>
                                            </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <div className="send_div">
                                            <Button variant="contained" size="large" color="primary"
                                            sx={{
                                                
                                                fontFamily: 'Helvetica Neue'
                                            }}>
                                                Send Email
                                            </Button>
                                                    
                                        </div>
                                    </Grid>
                                </Grid>
                            </form>                         
                        
                    </Grid>
                </Grid>
            </Box>
        </Container>     
    )
}

export default Contact;