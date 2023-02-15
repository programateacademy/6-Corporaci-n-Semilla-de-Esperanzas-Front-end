
import './App.css';
import { Aside } from './components/Aside';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import {NewUser} from './components/Form-new-user';
import { Header } from './components/Header';
import { Session } from './components/Session';
import {PopUp} from './components/PopUp';


function App() {
  return (
    <div className="App">

      <PopUp/>
      <NewUser/>
       <Header/>
      <div className='content'>
        <div className='lateral'><Aside/></div>
        <div className='central-body'><Session/></div>
        <Form></Form>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
