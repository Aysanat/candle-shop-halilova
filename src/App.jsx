import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/nav';
import Form from './components/form/form';
import Wax from './components/wax/wax';

function App() {
  return (

    <BrowserRouter> 
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CandleShop</h1>
        </header>
        <main className='Main'>
          <Nav />

          <div className="App-views">
            <Routes>
              <Route path='/login' element={<Form />} />
              <Route path='/wax' element={<Wax />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
