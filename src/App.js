import "./App.css"
import BottomNavBar  from "./components/BottomNavBar ";
import useAuthContext from "./hooks/useAuthContext";
import Add from "./pages/Admin/Add/Add";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import View from "./pages/view/View";
import Leaderbaord from "./pages/leaderbaord/Leaderbaord";
import Profile from "./pages/profile/Profile";
import About from "./pages/about/About";

import OneSignal from 'react-onesignal';


function App() {
  const { user, ais } = useAuthContext()
   useEffect(() => {
     const run = async () => {
        await OneSignal.init({ appId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'});
        OneSignal.Slidedown.promptPush();
     }
     run()
   }, [])
  return (
    <div className="App">
      { !ais  && <p>Loading..</p>}
      {ais && (
        <>
          <BrowserRouter>
            { user && <BottomNavBar  />}
            <Routes>
              <Route path="/" element={ user ? <Navigate to={"/home"} /> : <Navigate to={"/signup"} /> } />
              <Route path="/home" element={ user ? <Home /> : <Navigate to={"/signup"} /> } />
              <Route path="/profile" element={ user ? <Profile /> : <Navigate to={"/signup"} /> } />
              <Route path="/leaderboard" element={ user ? <Leaderbaord /> : <Navigate to={"/signup"} /> } />
              <Route path="/about" element={ user ? <About /> : <Navigate to={"/signup"} /> } />
              <Route path="/view/:id" element={ user ? <View /> : <Navigate to={"/signup"} /> } />
              <Route path="/signup" element={ !user ? <Signup /> : <Navigate to={"/home"} /> } />
              <Route path="/login" element={!user ? <Login /> : <Navigate to={"/home"} /> } />
              <Route path={process.env.REACT_APP_ADMIN_URL} element={!user ? <Navigate to={"/home"} /> : <Add /> } />
            </Routes>
          </BrowserRouter>
        </>
      )}
      
    </div>
  );
}

export default App;
