import {useContext} from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import {UserContext} from './context/UserContext';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './components/Home';
import Home2 from './components/Home2';
import Taskform from './Pages/Taskform/Taskform';
import Users from './Pages/Users/Users';
import Profile from './Pages/Profile/Profile';
import Taskdata from './Pages/Taskdata/Taskdata';
import Taskdetail from './Pages/Taskdetail/Taskdata';
import Struktur from './Pages/Struktur/Struktur';
import UserRoles from './Pages/UserRoles/UserRoles';
import PM from './Pages/PM/PM';
import Modul from './Pages/Modul/Modul';
import SModul from './Pages/SModul/SModul';
import UserRegister from './Pages/UserRegister/UserRegister';
import Taskdatauser from './Pages/Taskdatauser/Taskdatauser';
import Taskformuser from './Pages/Taskformuser/Taskformuser';
import Bildiris from './Pages/M/M';
import React from 'react';

function App() {

  const {user} = useContext(UserContext); 

  return (
  
    
        <BrowserRouter>
          <Routes>
            { user && 
            
          
            (
             
              <>
                
                { user.y1 >0 && <Route path="/" element={<Home/>} /> }
                { user.y1 <1 && <Route path="/" element={<Home2/>} /> }
                 <Route  path='/taskform/' element={< Taskform baslik={user.name} idsa={user.id}/>}></Route>
                 <Route  path='/users' element={< Users />}></Route>
                 <Route  path='/taskdata' element={< Taskdata baslik2={user.name} idsa={user.id} />}></Route>
                 <Route  path='/usersform' element={< UserRegister />}></Route>
                 <Route  path='/struktur' element={< Struktur baslik2={user.name}/>}></Route>
                 <Route  path='/userroles' element={< UserRoles baslik2={user.name}/>}></Route>
                 <Route  path='/modul' element={< Modul baslik2={user.name}/>}></Route>
                 <Route  path='/submodul' element={< SModul baslik2={user.name}/>}></Route>
                 <Route  path='/profile' element={< Profile idsa={user.id}/>}></Route>
                 <Route  path='/taskdetail/:taskid' element={< Taskdetail idsa={user.id}/>}></Route>
                 <Route  path='/pm' element={< PM baslik2={user.name}/>}></Route>
                 <Route  path='/taskdatauser' element={< Taskdatauser baslik2={user.name} idsa={user.id} basliks={user.struktur}/>}></Route>
                 <Route  path='/taskformuser/' element={< Taskformuser baslik={user.name} idsa={user.id} basliks={user.struktur}/>}></Route>
                 <Route  path='/bildiris' element={< Bildiris baslik={user.name} idsa={user.id} basliks={user.struktur}/>}></Route>
                 </>
            )
           
            
            
            
            }
            {!user && (
              <>
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Register/>} />
              
              </>
            )}
            <Route path="*" element={<Navigate to={user ? '':'/login'} />} />
          </Routes>
        </BrowserRouter>
        
      
    
  );
}

export default App;