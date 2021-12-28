import HomePage from './homepage'
import NavBar from './navbar'
import Header from './header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';


function App() {
    return(
        <StyledEngineProvider injectFirst>
            <Router>
                
                <NavBar/>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </Router>
        </StyledEngineProvider>
    );
}

export default App;