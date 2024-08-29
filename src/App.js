import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from './component/login';
import Sign from './component/signup';
const App =()=> {
  return (
    <Router>
      <Routes>
        <Route path="/Login"element={<Login/>}/>
        <Route path="/Sign"element={<Sign/>}/>

      </Routes>
    </Router>
    
  );
}

export default App;
