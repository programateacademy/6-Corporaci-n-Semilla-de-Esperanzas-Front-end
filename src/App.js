import './App.css';
import { Route, Routes } from 'react-router';
import { Aside } from './components/Aside';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { Header } from './components/Header';
import {NewUser} from './components/NewUser';
import { Session } from './components/Session';
import {PopUp} from './components/PopUp';
import Agradecimiento from './components/Agradecimiento';
import TableData from './components/TableData';



function App() {
  return (
    <div className="App">

      {/* <PopUp/>  */}
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/Session' element={<><Header/> <div className='content'><div className='central-body'><Session/></div></div></>}/>
        <Route path='/NewUser' element={<NewUser/>}/>
        <Route path='/Agradecimiento' element={<Agradecimiento/>}/>
      </Routes>
    
    </div>
  );
}

export default App;