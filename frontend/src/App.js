import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Games from './components/Games';
import CreateGames from './components/CreateGames';
import UpdateGames from './components/UpdateGames';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Games/>}></Route>
          <Route path='/create' element={<CreateGames/>}></Route>
          <Route path='/update/:id' element={<UpdateGames/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
