import "./navbar.css";
import {useContext} from 'react'
import {UserContext} from '../../context/UserContext'
import {Link} from 'react-router-dom'
import { useState} from 'react'
import {useEffect} from 'react';
 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import axios from "axios";


const Navbar = () => {


  
  const [isOpen, setIsopen] = useState(false);
  

  const menua = () => {
      isOpen === true ? setIsopen(false) : setIsopen(true);
  }
 
  const {user, logout} = useContext(UserContext);
  
  
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);



  if (isOpen === true ) {
    
    document.body.classList.remove('menu-hide');
    document.body.classList.add   ('menu-open');

    document.addEventListener("mousedown", (event) => {
    
      if(document.querySelector("#menu1").contains(event.target)) {
        
      } 
      else {
        document.body.classList.remove('menu-open');
        document.body.classList.add   ('menu-hide');
      }
    })
  }
  if (windowSize.innerWidth>973)
  {
    document.body.classList.add('vertical-menu-modern');
    document.body.classList.add('menu-expanded');
    
    document.body.classList.remove   ('menu-hide');
    document.body.classList.remove   ('vertical-overlay-menu');
  }
if (windowSize.innerWidth<974) {
  document.body.classList.remove('vertical-menu-modern');
  document.body.classList.remove('menu-expanded');
 
  
  
  document.body.classList.add   ('vertical-overlay-menu');
  
}
 
 

const styleObject1 = {
  "left": "0px", "bottom": "0px",
}
const styleObject2 = {
  "top": "0px", "height": "350px","right": "0px",
}
const styleObject12 = {
  
  "overflow": "scroll","height": "240px","overflowX": "hidden",

}

const handleLinkClicka = event => {
  alert('Link clicked');

  // 👇️ refers to the link element
  alert(event.currentid);
};




const [gdata, setGdata]= useState([]);




useEffect( ()=>{
 
  const sgData=[];
  
  const url=`https://asut.az/tax1/messagereads.php?id=`+user.id;
  const url2=user.id;   
  const aurl=url;
  // alert(aurl);
  const getStudentdata= async()=>{
  const reqData= await fetch(aurl);
  const resData= await reqData.json();   

  for(let i=0; i< resData.length; i++)
  {
   sgData.push(resData[i]);
 
  }
  
  setGdata(sgData);
 
  // console.log(sgData); 
  }

getStudentdata();

},[user.id]);


var sum = 0;


const isFound = gdata.some(element => {
  if (element.readsm === '0') {
    sum = sum+1;
   
  }

  sum = sum+0;
  
});


const handleLinkClick = (event, message) => {
 // console.log('Link clicked');
  //console.log(message);

  const url=`https://asut.az/tax1/messagereada.php?id=`+message;
  
  const aurl=url;
  // alert(aurl);
 
  axios.get(`https://asut.az/tax1/messagereada.php?id=`+message+'&uid='+user.id).then(function(response) {
       
  // console.log(response.data);



 
 
    const sgData=[];
    
    const url=`https://asut.az/tax1/messagereads.php?id=`+user.id;
    const url2=user.id;   
    const aurl=url;
    // alert(aurl);
    const getStudentdata= async()=>{
    const reqData= await fetch(aurl);
    const resData= await reqData.json();   
  
    for(let i=0; i< resData.length; i++)
    {
     sgData.push(resData[i]);
   
    }
    
    setGdata(sgData);
   
    // console.log(sgData); 
    }
  
  getStudentdata();
  
   
  
  
  var sum = 0;
  
  
  const isFound = gdata.some(element => {
    if (element.readsm === '0') {
      sum = sum+1;
     
    }
  
    sum = sum+0;
    
  });
});


};

  return (
    
   
      <nav className="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light navbar-shadow container-xxl">
      <div className="navbar-container d-flex content">
        <div className="bookmark-wrapper d-flex align-items-center">
          <ul className="nav navbar-nav d-xl-none">
          <li className="mobile-menu me-auto nav-item" id="mobilemenu"><Link to="" onClick={menua} className="nav-menu-main menu-toggle hidden-xs is-active nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ficon"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></Link></li>
            <li className="nav-item"></li>
          </ul>
          VERGI LAYIHƏ SISTEMI! 
          
        </div>
        <ul className="nav navbar-nav align-items-center ms-auto">
       
        <li className="nav-item dropdown dropdown-notification me-25" key="5">
          <Link className="nav-link" to="/users" data-bs-toggle="dropdown">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell ficon"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg><span className="badge rounded-pill bg-danger badge-up">
            {sum}
              </span></Link>
            <ul className="dropdown-menu dropdown-menu-media dropdown-menu-end">
              <li className="dropdown-menu-header">
                <div className="dropdown-header d-flex">
                  <h4 className="notification-title mb-0 me-auto">Bildirişlər</h4>
                  <div className="badge rounded-pill badge-light-primary">{sum} yeni mesaj</div>
                </div>
        </li>
                
<li className="scrollable-container media-list"  style={styleObject12} key="6">

                  {
                     
                     gdata.map(readsa => (
                        
                      <Link className="d-flex" to="" key={readsa.id} onClick={event => handleLinkClick(event, readsa.id)}>
                    
                      <div className="list-item d-flex align-items-start">
                      <div className="me-1">
                          
                        </div>
                        <div className="list-item-body flex-grow-1">
                          <p className="media-heading"><span className="fw-bolder">{readsa.modul}</span></p><small className="notification-text"> {readsa.message}</small>
                        </div>
                      </div> </Link>
  
                    ))  
                  }

                  
                 
                 
              </li>
              <li className="scrollable-container media-list ps">
                              
               
              
            
            
                  </li>
                  
                  <li className="dropdown-menu-footer"><Link className="btn btn-primary w-100 waves-effect waves-float waves-light" to="/users">Bütün bildirişləri oxuyun</Link></li>
            </ul>
          </li>
                  <li className="nav-item dropdown dropdown-user">
    <Link className="nav-link dropdown-toggle dropdown-user-link" id="dropdown-user26" to="/"   data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <div className="user-nav d-sm-flex d-none"><span className="user-name fw-bolder">{user.name}</span>
<span className="user-status">{user.usergroup}</span></div><span className="avatar">
<img className="round"  src={`https://asut.az/tax1/${user.picture}`} alt="avatar" height="40" width="40" /><span className="avatar-status-online"></span>
</span>
    </Link>   <div className="dropdown-menu dropdown-menu-end " aria-labelledby="dropdown-user" data-bs-popper="none"><Link className="dropdown-item" to="/profile">
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user me-50">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Profile</Link>
   
   <Link  className="dropdown-item" to="/users" onClick={logout}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-power me-50"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>                        Logout</Link>
    </div>
</li>
              


<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer /> 


          
        </ul>
      </div>
    </nav>

    
    
  );
};
function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}
export default Navbar;
