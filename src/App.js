import "./App.css";
import Home from "./Home";
import Checkout from "./Checkout";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Login'
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("User is ",authUser);
      if(authUser)
      {
        dispatch({
          type:'SET_USER',
          user : authUser,

        })
      }
      else{
        dispatch({
          type:'SET_USER',
          user : null,
        })
      }
    })
  
  }, [])
  
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route exact path="/" element={<><Header/><Home/></>}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/checkout" element={<><Header/><Checkout/></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
