import "./Menu.css";
import {Link} from 'react-router-dom'
import logo from '../../logo.png';
import { useLocation } from "react-router-dom";
import { useState} from 'react'
import {useContext} from 'react'
import {UserContext} from '../../context/UserContext'
const Menu = () => {
  const {user} = useContext(UserContext);
  
  const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    const [isOpen, setIsopen] = useState(false);
    const [isOpena, setIsopena] = useState(false);

  const menua = () => {
      isOpen === true ? setIsopen(false) : setIsopen(true);
  }
 
  const menuaa = () => {
    isOpena === true ? setIsopena(false) : setIsopena(true);
}
  const handleLinkClick = event => {
   // console.log('Link clicked');

    // 👇️ refers to the link element
   // console.log(event.currentTarget);
    if(document.body.classList.contains('menu-open')){
      document.body.classList.remove('menu-open');
      document.body.classList.add   ('menu-hide');
    }
  };

 
  


  return (
   
<div className="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true" id="menu1">
      <div className="navbar-header">
        <ul className="nav navbar-nav flex-row">
          <li className="nav-item me-auto"><Link to="/" className="navbar-brand" ><span className="brand-logo">
          <img src={logo} alt="" height="32px"/>
                </span>
              <h2 className="brand-text">TAX</h2></Link></li>
          <li className="nav-item nav-toggle"><Link to="/" className="nav-link modern-nav-toggle pe-0" data-bs-toggle="collapse"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"     className="feather feather-x d-block d-xl-none text-primary toggle-icon font-medium-4"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"     className="feather feather-disc d-none d-xl-block collapse-toggle-icon primary font-medium-4"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg></Link></li>
        </ul>
      </div>
      <div className="shadow-bottom"></div>
      <div className="main-menu-content ps ps--active-y">
        <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
          
        
           
        {user.y1 > 0 &&   
          <li className= {splitLocation[1] === "" ? " nav-item active" : "nav-item"}  >
          

          
              <Link to="/home" onClick={handleLinkClick} >  
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                      
              <span className="menu-title text-truncate" data-i18n="Dashboards">İdarə paneli</span>
              </Link> 
                
         
          </li> }
          {user.y2 > 0 &&
          <li className={splitLocation[1] === "taskform" ? "nav-item active" : "nav-item"} > 
        
           <Link to="/taskform"  onClick={handleLinkClick}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className="feather feather-file-text"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg><span className="menu-title text-truncate" data-i18n="feather feather-file-text">Yeni Tapşırıq Forması</span> 
          </Link></li>}


          {user.y2 > 0 &&
          <li className={splitLocation[1] === "taskformuser" ? "nav-item active" : "nav-item"} > 
        
           <Link to="/taskformuser"  onClick={handleLinkClick}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className="feather feather-file-text"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg><span className="menu-title text-truncate" data-i18n="feather feather-file-text">Yeni Tapşırıq Forması</span> 
          </Link></li>}

          {/* {user.y3 > 0 &&
          <li className={splitLocation[1] === "taskdata" ? "nav-item active" : "nav-item"}  ><Link to="/taskdata" onClick={handleLinkClick} ><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg><span className="menu-title text-truncate" data-i18n="Components">Tapşırıqlar</span></Link>
          </li>
} */}

{user.y3 > 0 &&
          <li className={splitLocation[1] === "taskdatauser" ? "nav-item active" : "nav-item"}  ><Link to="/taskdatauser" onClick={handleLinkClick} ><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg><span className="menu-title text-truncate" data-i18n="Components">Tapşırıqlar</span></Link>
          </li>
}
{user.y4 > 0 &&
          <li className={splitLocation[1] === "struktur" ? "nav-item active" : "nav-item"}  ><Link to="/struktur"  onClick={handleLinkClick}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"   className="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><span className="menu-title text-truncate" data-i18n="feather feather-square">Struktur</span></Link>
          
          
          </li>}
          {user.y5 > 0 &&

          <li className={`sidebar ${isOpen === true ? 'nav-item has-sub open' : 'nav-item has-sub'}`}><Link className="d-flex align-items-center" onClick={menua} to=""><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><span className="menu-title text-truncate" data-i18n="User">İstifadəçilər</span></Link>
            <ul className="menu-content" id="altmenu">
            <li className={splitLocation[1] === "userroles" ? "nav-item active" : "nav-item"}  ><Link to="/userroles" onClick={handleLinkClick}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><span className="menu-title text-truncate" data-i18n="feather feather-user">Rollar</span></Link>
          </li>
            
            <li className={splitLocation[1] === "users" ? "nav-item active" : "nav-item"} ><Link to="/users"  onClick={handleLinkClick}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><span className="menu-title text-truncate" data-i18n="feather feather-user">İstifadəçilər</span></Link>
          </li>
          
          <li className={splitLocation[1] === "usersform" ? "nav-item active" : "nav-item"}  ><Link to="/usersform" onClick={handleLinkClick}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><span className="menu-title text-truncate" data-i18n="feather feather-user">Yeni İstifadəçi</span></Link>
          </li>
         
          <li className={splitLocation[1] === "pm" ? "nav-item active" : "nav-item"}  ><Link to="/pm" onClick={handleLinkClick}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><span className="menu-title text-truncate" data-i18n="feather feather-user">Yeni Məsul şəxs </span></Link>
          </li>  
            </ul>
          </li>}

          {user.y6 > 0 &&
          <li className={`sidebar ${isOpena === true ? 'nav-item has-sub open' : 'nav-item has-sub'}`}><Link className="d-flex align-items-center" onClick={menuaa} to="">
           
           
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-package"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
           <span className="menu-title text-truncate" data-i18n="User">Layihə Modulleri</span></Link>
            <ul className="menu-content" id="altmenu">
            <li className={splitLocation[1] === "modul" ? "nav-item active" : "nav-item"}  ><Link to="/modul" onClick={handleLinkClick}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><span className="menu-title text-truncate" data-i18n="feather feather-user">Yeni Layihə Modul</span></Link>
          </li>
            
            <li className={splitLocation[1] === "submodul" ? "nav-item active" : "nav-item"} ><Link to="/submodul"  onClick={handleLinkClick}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><span className="menu-title text-truncate" data-i18n="feather feather-user">Yeni Layihə Alt Modul</span></Link>
          </li>
           
             
            </ul>
          </li>}

          {user.y7 > 0 &&
          <li className={splitLocation[1] === "taskdetail" ? "nav-item active" : "nav-item"}  ><Link to="/taskdetail/:taskid"  onClick={handleLinkClick}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"   className="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><span className="menu-title text-truncate" data-i18n="feather feather-square">İcra planı</span></Link>
          
          
          </li>}

          {user.y7 > 0 &&
          <li className={splitLocation[1] === "bildiris" ? "nav-item active" : "nav-item"}  ><Link to="/bildiris"  onClick={handleLinkClick}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"   className="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><span className="menu-title text-truncate" data-i18n="feather feather-square">Bildirişlər</span></Link>
          
          
          </li>}
        
        </ul>
      </div>
    </div>
    
    
  );
};

export default Menu;
