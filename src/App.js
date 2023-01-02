import {Routes,Route} from "react-router-dom"
import Navigation from "./Components/Navigation/navigation"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home/Home"
import Marketplace from "./Pages/Marketplace/Marketplace"
import Rankings from "./Pages/Rankings/Rankings"

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Marketplace' element={<Marketplace/>}></Route>
        <Route path='/Rankings' element={<Rankings/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
