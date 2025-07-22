import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Tamagotchi from './pages/Tamagotchi';
import Posterwall from './pages/Posterwall';
function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/tamagotchi" element={<Tamagotchi/>}/>
        <Route path="/posts" element={<Posterwall/>}/>
      </Routes>
    </Router>
 )
}
export default App;
