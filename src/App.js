import './App.css';
import WelcomePage from './WelcomePage';
import SigninPage from './SigninPage';
import AccountPage from './AccountPage';
import ProfilePage from './ProfilePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<WelcomePage/>}/>
    <Route path='/signinpage' element={<SigninPage/>}/>
    <Route path='/accountpage' element={<AccountPage/>}/>
    <Route path='/profilepage' element={<ProfilePage/>}/>
      {/* <WelcomePage />
      <SigninPage />
      <AccountPage />
      <ProfilePage /> */}
      </Routes>
</BrowserRouter>
  );
}

export default App;
