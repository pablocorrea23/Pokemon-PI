import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
//import { Switch } from 'react-router-dom'; 
import LandingPage from './components/LandingPage/LandingPage.jsx';
import NotFoundPage from './components/NotFound/NotFoundPage';
import Home from './components/Home/Home.jsx';
import Details from './components/Details/Details.jsx';
import CreatePokemon from './components/CreatePokemon/CreatePokemon.jsx';




function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Home' element={<NotFoundPage/>}></Route>
        <Route exact path='/CreatePokemon' element={<CreatePokemon/>}/>
        <Route exact path='/Home/:id' element={<Details/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;