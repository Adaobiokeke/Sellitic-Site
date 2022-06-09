import {BrowserRouter as Router,  Routes,Route,} from 'react-router-dom'

import Home from "./Components/Home/Home"
import Joinus from './Components/JoinUs/Joinus'
import Error from './Components/Error/Error'


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route exact path='/'element={<Home/>}/> 
      <Route  path='/joinus'element={<Joinus/>}/> 
      <Route  path='*'element={<Error/>}/> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;
