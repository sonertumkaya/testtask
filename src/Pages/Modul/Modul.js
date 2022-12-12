import UserModulList from '../../components/modulesc/UModulList';
import UserModulContextProvider from '../../context/UserModulContext';
import Navbar from "../../components/headernavbar/Navbar";
import Menu from "../../components/menu/Menu";
import './struktur.css';
import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import { Button } from '@material-ui/core';
import Footer from "../../components/Footer";
 
const axios = require('axios');


const Modul = (props) => {
  

  
  const fileName = "modul";
    const [ModulData, setModulData] = useState([]);
    const [loading, setLoading] = useState(false);

    const headers = [
        { label: "Id", key: "id" },
        { label: "Modul", key: "modul" }
        
    ];

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = () => {
        setLoading(true);
        axios.get(`https://asut.az/tax1/readmodul.php`)
            .then((res) => {
                setModulData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log("Error: ", err);
                setLoading(false);
            })
    }

    
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
                      <h5 className="mb-0">Modul siyahi</h5>
                     
                    </div>
                    <div className="card-body">
         <div className="table-responsive p-0 pb-2">
        <div className="table-wrapper">
          <UserModulContextProvider>
            <UserModulList baslik3={props.baslik2}/>
          </UserModulContextProvider>
          <Button
                variant="contained"
                color="primary"
                className='export-btn'
            >
                <CSVLink
                    headers={headers}
                    data={ModulData}
                    filename={fileName}
                    style={{ "textDecoration": "none", "color": "#fff" }}
                >
                    {loading ? 'Loading csv...' : 'Export Data'}
                </CSVLink>
            </Button>
        </div>
      </div>
    </div>
    </div> </div> </div> </div>    </section>    </div> </div> </div> </div> 
    <Footer />
    </>
  );
}

export default Modul;