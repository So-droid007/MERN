
import LoginDialog from "./account/LoginDialog.jsx";
import {AppBar,Toolbar,styled,Box} from '@mui/material';

const Header = styled(AppBar)`
height:222px;
background-color:#00bfa5;
box-shadow:none;
`

const Component = styled(Box)`
height:100vh;
background:#DCDCDC;
overflow:none;
`

const Messenger = ()=>{
    return(
        <Component>

        <Header>
            <Toolbar>

            </Toolbar>
        </Header>


        <LoginDialog/>
        </Component>
    )
}

export default Messenger;