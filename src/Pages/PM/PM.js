import UserPMList from '../../components/pm/UPMList';
import UserPMContextProvider from '../../context/UserPMContext';
import Navbar from "../../components/headernavbar/Navbar";
import Menu from "../../components/menu/Menu";
import './struktur.css';
import React from 'react';

import Footer from "../../components/Footer";
 
// const axios = require('axios');


const PM = (props) => {
  
 
  
 return (
    
    <>
    <Navbar />
    <Menu /> 
    <div className="app-content content ">
      <div className="content-overlay"></div>
      <div className="header-navbar-shadow"></div>
      <div className="content-wrapper container-xxl p-0">
        <div className="content-header row">
       
        <div className="content-body"> 
<section >
  <div className="row match-height">
  <div className="container-fluid py-4">
  <div className="col-xxl">
                  <div className="card mb-4">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="mb-0">PM siyahi</h5>
                     
                    </div>
                    <div className="card-body">
         <div className="table-responsive p-0 pb-2">
        <div className="table-wrapper">
          <UserPMContextProvider>
            <UserPMList baslik3={props.baslik2}/>
          </UserPMContextProvider>
          
        </div>
      </div>
    </div>
    </div> </div> </div> </div>    </section>    </div> </div> </div> </div> 
    <Footer />
    </>
  );
}

export default PM;