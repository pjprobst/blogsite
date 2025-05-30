import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Tamagotchi from './pages/Tamagotchi';
function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/tamagotchi" element={<Tamagotchi/>}/>
      </Routes>
    </Router>
 )
}
export default App;
