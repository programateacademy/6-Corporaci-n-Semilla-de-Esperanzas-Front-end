
import './App.css';
import { Aside } from './components/Aside';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import {NewUser} from './components/NewUser';
import { Header } from './components/Header';
import { Session } from './components/Session';
import {PopUp} from './components/PopUp';
import Agradecimiento from './components/Agradecimiento';
import {NewPassword} from './components/NewPassword';


function App() {
  return (
    <div className="App">

      <NewPassword/>

      {/* <Agradecimiento/>

      <PopUp/> 
      <NewUser/>
      <Header/> 
        <div className='content'>
          <div className='lateral'><Aside/></div>
          <div className='central-body'><Session/></div>
          <Form></Form>
        </div> 
      <Footer/> */}
    </div>
  );
}

export default App;
