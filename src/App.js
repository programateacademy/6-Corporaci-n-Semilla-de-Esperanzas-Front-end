
import './App.css';
import { Aside } from './components/Aside';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { Header } from './components/Header';
import NewUser from './components/NewUser';
import { Session } from './components/Session';


function App() {
  return (
    <div className="App">
      {/*<Header/>*/}
      <div className='content'>
        {/*<div className='lateral'><Aside/></div>
        <div className='central-body'><Session/></div>
        <Form></Form>*/}
        <NewUser/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
