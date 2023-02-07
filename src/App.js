
import './App.css';
import { Aside } from './components/Aside';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Session } from './components/Session';


function App() {
  return (
    <div className="App">
      <Header/>
      <Aside/>
      <Session/>
    </div>
  );
}

export default App;
