import { createTheme } from '@material-ui/core/styles';

const evergreenTheme = createTheme({
    

    
    palette: {
        primary: {
            main: "#2B3E40"
        },
        secondary: {
            main: "#BF7047"
        },
        warning: {
            main: "#B3BBAE"
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
    spacing: 4,

})

export default evergreenTheme;