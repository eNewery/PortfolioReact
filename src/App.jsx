import './App.css';
import Cloud from './assets/Cloud/Cloud';
import Start from './assets/Start/Start';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './assets/Home/Home';
import About from "./assets/About/About"
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
<Route exact path='/' element={<Start/>}/>
<Route exact path='/Loading' element={<Cloud/>}/>
<Route exact path='/Home' element={<Home/>}/>
<Route exact path='/About' element={<About/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
