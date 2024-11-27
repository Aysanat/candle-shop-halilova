import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/nav';
import Form from './components/form/form';
import Wax from './components/wax/wax';
import { useState } from 'react';

function App() {
  let initCount = -10;
  let initDisabled = false;

  if (initCount < 0) {
    initCount = 0
    initDisabled = true;
  }

  let [count, setCount] = useState(initCount);
  let [disabled, setDisabled] = useState(initDisabled);

  function plusCount() {
    setCount(count + 1);
    setDisabled(false);
  }

  function minusCount() {
    if (count > 0) {
      setCount(count - 1);
    }

    if (count <= 1) {
      setDisabled(true)
    }
  }

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
