import './App.css';
import EffectTutorial from './UseEffect/EffectTutorial';
import ReducerTutorial from './UseReducer/ReducerTutorial';
import RefTutorial from './UseRef/RefTutorial';
import StateTutorial from './UseState/StateTutorial';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <StateTutorial></StateTutorial> */}
        {/* <ReducerTutorial></ReducerTutorial> */}
        {/* <EffectTutorial></EffectTutorial> */}
        <RefTutorial></RefTutorial>
      </header>
    </div>
  );
}

export default App;
