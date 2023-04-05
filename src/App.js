import {Routes,Route} from "react-router-dom"
import Navigation from "./Components/Navigation/navigation"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home/Home"
import Marketplace from "./Pages/Marketplace/Marketplace"
import Rankings from "./Pages/Rankings/Rankings"
import CreateAccount from './Pages/CreateAccount/CreateAccount'
import ConnectWallet from './Pages/ConnectWallet/ConnectWallet'

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/roko-nft/' element={<Home/>}></Route>
        <Route path='/roko-nft/Marketplace' element={<Marketplace/>}></Route>
        <Route path='/roko-nft/Rankings' element={<Rankings/>}></Route>
        <Route path='/roko-nft/CreateAccount' element={<CreateAccount/>}></Route>
        <Route path='/roko-nft/ConnectWallet/' element={<ConnectWallet/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
