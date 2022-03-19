import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home';
// import Login from './pages/Login';

function App() {
  return (
    <div className="App bg-gray-50 ">
      <Navbar />
      <Home />
      {/* <Login /> */}
    </div>
  );
}

export default App;
