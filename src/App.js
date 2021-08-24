import React from 'react'
import './App.css';
import { incNumber, decNumber } from './actions/index';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const myState = useSelector((state) => state.numb);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Counter</h1>

      <div className="quantity">
        <a className="quantity__minus" onClick={() => dispatch(decNumber())} ><span>-</span></a>
        <input name="quantity" type="text" className="quantity__input" value={myState} />
        <a className="quantity__plus" onClick={() => dispatch(incNumber())}><span>+</span></a>
      </div>

    </div>
  );
}

export default App;
