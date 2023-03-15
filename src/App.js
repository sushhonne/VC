import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import One from './components/one';
import Two from './components/two';
import Three from './components/three';
import Four from './components/four';
import Five from './components/five';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Apply from './components/apply';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<One/>}/>
        <Route path="/two" element={<Two/>}/>
        <Route path="/three" element={<Three/>}/>
        <Route path="/four" element={<Four/>}/>
        <Route path="/five" element={<Five/>}/>
        <Route path="/apply" element={<Apply/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
