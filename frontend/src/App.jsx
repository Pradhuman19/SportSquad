import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterTeam from './pages/RegisterTeam';
import JoinedEvents from './pages/JoinedEvents'; // Import the new JoinedEvents page
import Events from './pages/Events'; // import the Events page
import HostedEvents from './pages/HostedEvents'; // Import HostedEvents
import EventDetail from './pages/EventDetail'; // Import EventDetail
import AdminEventControl from './pages/AdminEventControl'; // Import AdminEventControl
import { UserData } from './context/UserContext';
import { Loading } from './components/Loading';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CreateEvent from './pages/CreateEvent';

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
                  <Route path='/createevent' element={isAuth ? <CreateEvent /> : <Login />} />
                  <Route path='/register-team/:id' element={isAuth ? <RegisterTeam /> : <Login />} />
                  <Route path='/joined' element={isAuth ? <JoinedEvents /> : <Login />} /> {/* Add the new route */}
                  <Route path='/hosted' element={isAuth ? <HostedEvents /> : <Login />} /> {/* New route */}
                  <Route path='/events' element={isAuth ? <Events /> : <Login />} /> {/* New route */}
                  <Route path='/events/:id' element={isAuth ? <EventDetail /> : <Login />} /> {/* New route */}
                  <Route path='/admin/events/:id' element={isAuth ? <AdminEventControl /> : <Login />} /> {/* New route */}
                  {/* Add routes for hosted and create event pages */}
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