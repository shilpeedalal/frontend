import { Routes, Route  } from 'react-router-dom';

import './App.css';
import Home from "./pages/Home"
import Users from "./pages/Users"
import Error from "./pages/Error"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/users' element={<Users />} /> :
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;