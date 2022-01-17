import { Container, Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import emailjs from 'emailjs-com'
import './../css/contact.css'

function Contact() {

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

            
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Container maxWidth="lg">
                        <Box>
                            <Typography variant="h3" color="primary.main">
                                Send Me An Email!
                            </Typography>
                            <Typography variant="subtitle2" color="primary.main">
                                If you have questions about pricing, date availability, or anything that I do, please send me an email!                    
                            </Typography>
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={6}>     
                        <Container maxWidth="xl">
                            <form onSubmit={sendEmail}>
                                <Grid container spacing={2}>

                                <Grid item xs={12} sm={6}>
                                    <div className="name_div">
                                        <TextField 
                                        fullWidth
                                        label="First Name" 
                                        variant="outlined" 
                                        className="textField" 
                                        color="secondary"
                                        focused> 
                                        </TextField>
                                                
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <div className="name_div">
                                        <TextField 
                                        fullWidth
                                        label="Last Name" 
                                        variant="outlined" 
                                        className="textField" 
                                        color="secondary"
                                        focused> 
                                        </TextField>
                                                
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                <div className="email_div">
                                            <TextField 
                                            fullWidth
                                                label="Email Address" 
                                                variant="outlined" 
                                                className="textField" 
                                                color="secondary"
                                                focused> 
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
                                                focused> 
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
                                                focused> 
                                                </TextField>
                                        </div>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                <div className="send_div">
                                    <Button variant="contained" size="large" color="primary">
                                        Send Email
                                    </Button>
                                            
                                        </div>
                                </Grid>
                                </Grid>
                            </form>
                            
                        </Container>
                </Grid>
            </Grid>
            </Box>
        </Container>
        
    )
}

export default Contact;