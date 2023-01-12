import './App.css';
import FunctionComponent from './components/FunctionComponent';
import JSX from './components/JSX';
import Props from './components/Props';
import PureJS from './components/PureJS';
import State from './components/State';

const App = () => {
  return (
    <div className="App">
      {/* <FunctionComponent /> */}
      {/* <JSX /> */}
      {/* <PureJS /> */}
      <State />
      <Props name="Teo" age="25">
        <p>This is children props</p>
      </Props>
      <Props name="Jason" age="26">
        <button>Click!</button>
      </Props>
      <Props name="Lee" age="27" />
    </div>
  );
};

export default App;
