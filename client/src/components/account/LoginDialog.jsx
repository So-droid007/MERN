
import {Dialog,Box,Typography,List,ListItem,styled} from '@mui/material';
import { qrCodeImage } from '../../Constants/Data';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode"



const Dialogstyle = {
    height: '96%',
    marginTop:'15%',
    width:'75%',
    maxHeight:'100%',
    maxWidth:'100%',
    overflow:'none',
    boxShadow:'none'
}

const Container = styled(Box)`
display:flex`;

const Container1 = styled(Box)`
padding:70px 0px 56px 56px`;

const QRcode = styled('img')({
    height: 264,
    width: 264,
    margin: '50px 50px 0px 160px'
})

const Title = styled(Typography)`
font-size:26px;
color:#525252;
font-weight:300;
font-family:inherit;
margin-bottom:25px`;

const StyledList = styled(List)`
  & > li {

    font-size:18px;
    margin-top:10px;
    line-height:26px;
    color:#4a4a4a;
  
   

  }`

const LoginDialog = ()=>{
    const onLoginSuccess = (res)=>{

        const decoded = jwt_decode(res.credential);
        console.log(decoded);

    }    
    const onLoginError = (res)=>{
        console.log('Login failed',res);

    }    
    return(
        <Dialog open={true}
        PaperProps={{sx: Dialogstyle}}>


            <Container>
                <Container1>

                    <Title>Use Whatsapp on your computer</Title>
                    <StyledList>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem><span>2. Tap <strong>Menu </strong>or <strong>Settings</strong> and select <strong>Linked Devices</strong></span></ListItem>
                        <ListItem><span>3. Tap on <strong>Link a device</strong></span></ListItem>
                        <ListItem><span>4. Point your phone to this screen to capture the QR code</span></ListItem>
                    </StyledList>

                </Container1>
                <Box style={{position:'relative'}}>
                    <QRcode src={qrCodeImage} />
                    
                    <Box style={{position:'absolute',top:'41%',left:'40%'}}>
                        
                    <GoogleLogin  

                    onSuccess={onLoginSuccess}
                    onError={onLoginError}
                       
                       />

                    </Box>
                </Box>
            </Container>

        </Dialog>
            
    )
}

export default LoginDialog;