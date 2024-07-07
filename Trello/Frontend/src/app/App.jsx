
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignupPage from "../pages/SignupPage";
import DashboardPage from '../pages/DashboardPage';
import AssignPage from '../pages/Assign';
import BoardPage from "../pages/BoardPage";
import UserProfile from "../pages/UserProfile.jsx";

function App() {


  return (
    <>

      {/* <LoginPage/> */}
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}>
          </Route>
          <Route path="/Signup" element={<SignupPage />}>
          </Route>
          <Route path="/Dashboard" element={<DashboardPage />}>
          </Route>
          <Route path="/Assign" element={<AssignPage />}>
          </Route>
          <Route path="/Board" element={<BoardPage />}>
          </Route>
          <Route path="/UserProfile" element={<UserProfile />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
