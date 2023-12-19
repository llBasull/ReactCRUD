import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import User from './Containers/User';
import CreateUser from './Containers/CreateUser';
import UpdateUser from './Containers/UpdateUSer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<User/>}/>
    <Route path='/createuser' element={<CreateUser/>}/>
    <Route path='/updateuser' element={<UpdateUser/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
