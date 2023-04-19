import './App.css';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import MyApp from './components/MyApp';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes ,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
         <Route path='/' element={<MyApp />} />
         <Route path='/all' element={<AllUser />} />
         <Route path='/add' element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
