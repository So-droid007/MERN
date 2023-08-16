import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  const clientId = '774839072075-sbier7jjhv5lrhuigsam8ugt1pubpknt.apps.googleusercontent.com';
  return (
 
    <GoogleOAuthProvider clientId={clientId}>
    <Messenger/>
    </GoogleOAuthProvider>
    
  );
}

export default App;
