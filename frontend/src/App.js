import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Games from './components/Games';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Games/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
