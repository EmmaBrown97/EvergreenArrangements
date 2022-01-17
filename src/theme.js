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
            ///default: "#2B3E40"
        }
    },
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: 'red'
    },
    spacing: 8,
    
})

export default evergreenTheme;