import HomePage from './homepage'
import NavBar from './navbar'
import Header from './header'
import Footer from './footer'
import Gallery from './Gallery'
import Contact from './contact'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import evergreenTheme from './../theme'
import { CssBaseline } from '@mui/material'


function App() {
    return(
        <ThemeProvider theme={evergreenTheme}>
            <CssBaseline/>
        <StyledEngineProvider injectFirst>
                 
            <Router>
            
                <NavBar/>
                <Header/>
                <Routes>
                    <Route path="/Home" element={<HomePage/>}/>
                    <Route path="/Gallery" element={<Gallery/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                </Routes>
                <Footer/>
            </Router>
            
        </StyledEngineProvider>
        </ThemeProvider>
    );
}

export default App;