import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LogIn from './pages/LogIn';
import PopMovies from './pages/PopMovies';
import Signup from './pages/Signup';
import TopRated from './pages/TopRated';

function App() {
  return (
    <div className="App bg-gray-50 ">
      <Navbar />
      <Routes>
        <Route path="/Popular" element={<PopMovies />} />
        <Route path="/TopRated" element={<TopRated />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
