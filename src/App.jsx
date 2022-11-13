import './App.css';
import Cloud from './assets/Cloud/Cloud';
import Start from './assets/Start/Start';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './assets/Home/Home';
import Cursor from './assets/Cursor/Cursor';
function App() {
  return (
    <div className="App">
      <Cursor/>
<BrowserRouter>
<Routes>
<Route exact path='/' element={<Start/>}/>
<Route exact path='/Loading' element={<Cloud/>}/>
<Route exact path='/Home' element={<Home/>}/>
<Route exact path='/animated' element={<Cursor/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
