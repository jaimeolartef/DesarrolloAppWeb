import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './navigate';
import './App.css';
import Register from './register';
import Consult from './consult';
import Home from './home';

function App() {
  return (
    <div>
      <div>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/consult" element={<Consult/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;