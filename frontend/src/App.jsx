import {BrowserRouter,Routes, Route} from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';
import Register from './pages/Register';
import { UserData } from './context/UserContext';
import { Loading } from './components/Loading';

const App = () => {
  const {Loading, isAuth, user} = UserData();
  return(
    <>
      {Loading ? <Loading /> : (

        <BrowserRouter>
          <Routes>
            <Route path ='/' element={isAuth ? <DashBoard/> : <Login/>} />
            <Route path ='/login' element={isAuth ? <DashBoard/> : <Login/>} />
            <Route path ='/register' element={isAuth ? <DashBoard/> : <Register/>} />
          </Routes>
      </BrowserRouter>
      )}
    </>
  )
}

export default App;