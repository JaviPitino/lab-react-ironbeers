import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SingleBeer from './pages/SingleBeer';
import RandomBeer from './pages/RandomBeer';
import Error from './pages/Error';
import NotFound from './pages/NotFound';
import ListBeers from './pages/ListBeers';


import NewBeer from './pages/NewBeer';

function App() {
  return (
    <div className="App">

      {/* <Navbar /> */}

        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/beers' element={ <ListBeers /> } />
          <Route path='/random' element={ <RandomBeer /> } />
          <Route path='/new-beer' element={ <NewBeer /> } />
          <Route path='/:id' element={ <SingleBeer /> } />

          <Route path='/error' element={ <Error /> } />
          <Route path='/not-found' element={ <NotFound /> } />

        </Routes>
    </div>
  );
}

export default App;
