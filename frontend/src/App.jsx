import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';
import Register from './pages/Register';
import { UserData } from './context/UserContext';
import { Loading } from './components/Loading';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  const { loading, isAuth } = UserData();
  return (
    <>
      {loading ? <Loading /> : (
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            {isAuth && <Navbar />}
            <div className="flex flex-1">
              {isAuth && <Sidebar />}
              <div className="flex-1 p-4">
                <Routes>
                  <Route path='/' element={isAuth ? <DashBoard /> : <Login />} />
                  <Route path='/login' element={isAuth ? <DashBoard /> : <Login />} />
                  <Route path='/register' element={isAuth ? <DashBoard /> : <Register />} />
                  {/* Add routes for hosted, joined, and create event pages */}
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;