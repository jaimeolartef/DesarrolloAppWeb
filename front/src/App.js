import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import Header from './navigate';
import './App.css';
import Register from './register';
import Consult from './consult';
import Home from './home';
import Activity from './activity';

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
            <Route path="/activity" element={<Activity/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;