
import './App.css';
import { Aside } from './components/Aside';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Session } from './components/Session';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='content'>
        <div className='lateral'><Aside/></div>
        <div className='central-body'><Session/></div>
      </div>
    </div>
  );
}

export default App;
