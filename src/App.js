import './App.css';

import Props from './components/Props';

const App = () => {
  return (
    <div className="App">
      <Props name="Kim" age={21} />
      <Props name="Park" age={23} />
      <Props name="Lee" age={25} />
    </div>
  );
};

export default App;
