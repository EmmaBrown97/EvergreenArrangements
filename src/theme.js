import { createTheme } from '@material-ui/core/styles';

const evergreenTheme = createTheme({
    Typography: {
        fontFamily: ['"Montserrat"', 'Open Sans'].join(',')
       },
    palette: {
        primary: {
            main: "#2B3E40"
        },
        secondary: {
            main: "#BF7047"
        },
        background: {
            default: "#FBF5F3"
        }
    }
})

export default evergreenTheme;