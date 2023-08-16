
import {Dialog} from '@mui/material';
const Dialogstyle = {
    height: '96%',
    marginTop:'15%',
    width:'60%',
    maxHeight:'100%',
    maxWidth:'100%',
    overflow:'none',
    boxShadow:'none'
}
const LoginDialog = ()=>{
    return(
        <Dialog open={true}
        PaperProps={{sx: Dialogstyle}}>

            <p>Continue from here</p>

        </Dialog>
            
    )
}

export default LoginDialog;