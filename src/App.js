import {useReducer} from 'react';
import './App.css';
import Context from './Context';
import DateItem from './components/DateItem/DateItem'

const initial = {
  n: 0
}

const reducer = (state, action) => {
  const fn = reducerObj[action.type];
  if (fn) {
    fn(state, action)
  }
}

const reducerObj = {
  add: (state, action) => {
    return {...state, n: (state.n + action.number)}
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initial);
  const api = {state, dispatch}

  return (
    <div className="App">
      <div>
        <Context.Provider value={api}>
          <DateItem />
        </Context.Provider>
      </div>
    </div>
  );
}

export default App;
