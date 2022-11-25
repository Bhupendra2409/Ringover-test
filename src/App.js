
import { useSelector } from 'react-redux';

import Home from './Components/Home';

import Navbar from "./Components/Navbar"
import Store from './Components/Store';
import Contact from './Components/Contact'
import TheJourney from './Components/TheJourney'
import Team from './Components/Team'

function App() {
  const view = useSelector((state)=>state.appSlice.view);

  return (
    
    <div className="App">
        <Navbar />
        <div className="main-cnt">
          {view==="Home" && <Home/>}
          {view==="Store" && <Store/>}
          {view==="Contact" && <Contact/>}
          {view==="TheJourney" && <TheJourney/>}
          {view==="Team" && <Team/>}
        </div>
    </div>
  );
}

export default App;
