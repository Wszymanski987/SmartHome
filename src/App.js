import './App.css';
import Interface from './components/interface';
import { ElementContextProvider } from "./methods/elementContextProvider";


function App() {
  return (
    <ElementContextProvider>
      <div className="App">
        <header className="App-header">
          <span><b>Smart Home</b></span>
        </header>
        <body>
        <Interface />
        </body>
      </div>
    </ElementContextProvider>
  );
}

export default App;
