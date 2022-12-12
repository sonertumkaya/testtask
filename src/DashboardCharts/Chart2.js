import React, { useEffect, useState,useCallback } from 'react';
import Chart from "react-apexcharts";
import axios from 'axios';
//import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
 
import Datak2 from './Data2';
import Select from 'react-select';
const MyCharts2 = () => {
//  Grafik icin tum degiskenler tanimlandigi yer;

 const [siparisci, setnsiparisci]= useState("");
 const [statusad4, setnstatusad]= useState("");
 const [prt4, setnprt]= useState("");
 const [degera4, setndeger]= useState("");
const handleInputChangesiparis = useCallback((e) => {
  setnsiparisci(e.target.value)
}, [setnsiparisci])


const handleInputChangestatus = useCallback((e) => {
  setnstatusad(e.target.value)
}, [setnstatusad])

const handleInputChangeprt = useCallback((e) => {
  setnprt(e.target.value)
}, [setnprt])

const handleInputChangeprtdeger = useCallback((e) => {
  setndeger(e.target.value)
}, [setndeger])

  const [stdudentSubject, setStudentsubject]= useState([]);
   const [studentMarks, setStudentMarks]= useState([]);
   const [gdata, setGdata]= useState([]);
   
    
// grafik icin veri ve tum degiskenler
   useEffect( ()=>{
       const sSubject=[];
       const sMarks=[];
       const sgData=[];
     //  alert(siparisci);
       const siparisa=siparisci;
       const statusad2=statusad4;
      const prta=prt4;
      const degera2=degera4;  

       const url=`https://asut.az/tax1/chart2.php?action=form&siparis=`;
       const url2=`&pr=`;
       const url3=`&status=`;
       const url4=`&deger=`;
       const aurl=url+siparisci+url2+prt4+url3+statusad4+url4+degera4;
      // alert(aurl)
       const getStudentdata= async()=>{
       const reqData= await fetch(aurl);
       const resData= await reqData.json();   
     
       for(let i=0; i< resData.length; i++)
       {
        sgData.push(resData[i]);
        sSubject.push(resData[i].Idare);
        sMarks.push(parseInt(resData[i].sayi));
       }
       setStudentsubject(sSubject);
       setStudentMarks(sMarks);
       setGdata(sgData);
     //  setnoa (sayi);
       setnsiparisci(siparisa)
       setnstatusad(statusad2)
       setnprt(prta)
       setndeger(degera2)
    //   setsatriha(sstarih)
        //console.log(resData); 
       }

    getStudentdata();

   },[siparisci,degera4,prt4,statusad4]);
// priortie selectbox icin veri
   const [SPr, setPr] = useState([]);
   useEffect(() => {
       getPr();
   }, []);
   
   function getPr() {
       axios.get(`https://asut.az/tax1/readformdata.php?form=pr`).then(function(response) {
          
           setPr(response.data);
       });
   }
   // siparis selectbox icin veri
   const [SSiparis, setSiparis] = useState([]);
   useEffect(() => {
    getSiparis();
   }, []);
   
   function getSiparis() {
       axios.get(`https://asut.az/tax1/readformdata.php?form=siparis`).then(function(response) {
          
           setSiparis(response.data);
       });
   }

// statu selectbox icin veri
   const [SStatu, setStatu] = useState([]);
   useEffect(() => {
    getStatu();
   }, []);
   
   function getStatu() {
       axios.get(`https://asut.az/tax1/readformdata.php?form=status`).then(function(response) {
          
        setStatu(response.data);
       });
   }

   // modalbox icin data
   const [openmodal,setOpenmodal] = useState(false)
   const styles = {
     popup:{
       display: openmodal ? "block" : "none",
        
     }
   };
   const [opendata,setOpendata] = useState("")
   //const handleEditmodal = (name) => {
    // console.log(row);
    
   //  setOpendata(name);
   //setOpenmodal(true);
   //}

   const stylescroolsa = {
  
    "overflow": "scroll","height": "240px","overflowX": "hidden",
  
  }  

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

    return(
        <React.Fragment>
  
            <div className="col-xl-6 col-md-6 col-12">
      <div className="card card-congratulation-medal">
        <div className="card-body">
        <form>
                     <div className="mb-1 row">
                       <label htmlFor="html5-text-input" className="col-md-3 col-form-label"><h6>Sifarişçi</h6></label>
                       <div className="col-md-3">
                       <select   className="form-select" name="siparisci" id="siparisci"  value={siparisci} onChange={handleInputChangesiparis}>
                          <option></option>
                          {SSiparis.map(spa =>
<option key={spa.Siparisci}  value={spa.Siparisci}>{spa.Siparisci}</option>)}
                        </select>

                        
                       </div>
                     
                    
                       <label htmlFor="html5-search-input" className="col-md-3 col-form-label"><h6>Status</h6></label>
                       <div className="col-md-3">
                       <select id="defaultSelect" className="form-select" value={statusad4} onChange={handleInputChangestatus}>
                       <option></option>

                       {SStatu.map(sstatus =>
<option key={sstatus.status} value={sstatus.status}>{sstatus.status}</option>)}
                        </select>
                        </div>
                       </div>
                    
                     <div className="mb-1 row">
                       <label htmlFor="html5-search-input" className="col-md-3 col-form-label"><h6>Dəyəri</h6></label>
                       <div className="col-md-3">
                       <input className="form-control" type="text"  value={degera4} onChange={handleInputChangeprtdeger}/>
                       </div>
                     
                   
                       <label htmlFor="html5-search-input" className="col-md-3 col-form-label"><h6>Modul/Alt sistem</h6></label>
                       <div className="col-md-3">
                       <select id="defaultSelect" className="form-select" name="amodul">
                          <option></option>

                                  

                        </select>
                       </div>
                       </div>
                    
                     <div className="mb-1 row">
                       <label htmlFor="html5-search-input" className="col-md-3 col-form-label"><h6>Prioritet</h6></label>
                       <div className="col-md-3">
                       <select id="defaultSelect" className="form-select" value={prt4} onChange={handleInputChangeprt} >                          
                          {SPr.map(pra =>
<option key={pra.Prioritet} value={pra.Prioritet}>{pra.Prioritet}</option>)}
                        </select>
                       </div>
                       
                     </div>
                    
                    </form>
       
       
        <h4 className="m-0 me-2">Layihə Statisika</h4>
        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex flex-column align-items-center gap-1">
                            
                            <span>Layihə Cəmi</span>
                            <h2 className="mb-2"> {(gdata.reduce((a,v) =>  a = a + parseInt(v.sayi) , 0 ))}</h2>
                          </div>
                          <div id="orderStatisticsChart"></div>
                        </div>
                        <ul className="p-0 m-0" style={stylescroolsa}>
                        {gdata.map(person => 
        
         <li className="d-flex mb-0 pb-0" key={person.Idare}> 
        <div className="avatar flex-shrink-0 me-3">
          <span className="avatar-initial rounded bg-label-info"><i className='bx bx-test-tube' ></i></span>
        </div>
        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
          <div className="me-2">
          <Link className="d-flex align-items-center"   onClick={() => {setOpendata(person.Idare) ;setOpenmodal(true)} } to="">       <h6 className="mb-0">{person.Idare}</h6> </Link>
            <small className="text-muted"></small>
          </div>
          <div className="user-progress">
            <small className="fw-semibold">{person.sayi}</small>
          </div>
        </div>
      </li>
        
        )}
                        </ul>
                      <br/>
                                
                <Chart 
                type="pie"
              
                 
                height={550}

                series={ studentMarks }                

                options={{
                        title:{ text:""
                        } , 
                       noData:{text:"Boş Məlumat"},                        
                      // colors:["#f90000","#f0f"],
                      labels:stdudentSubject  ,
                      chart :{
                        width:'100%',

                    },
                    dataLabels: {
                      dropShadow: false,

                      enabled: true,
                      inside: false,
                      style: {
                          textShadow: false, 
                          textOutline: 'none' ,
                      }
                  },
                      legend: {
                        show: true,
                         
                        position: 'bottom',
                        horizontalAlign: 'left', 
                        floating: false,
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial',
                        fontWeight: 400,
                        
                        height: 50,
                         
                        offsetX: 0,
                        offsetY: 0,
                        
                        },   
                                  

                 }}

             


                 events={ {
                  click: function(event, chartContext, config) {
                      console.log(event.target.parentElement.getAttribute("data:realIndex"))

                      console.log('click', event, chartContext, config);
                  }
                }
                
                }
                
             
                >
                </Chart>
                </div>
      </div>
      <div className={openmodal ? "modal2 fade text-start show" : "modal2 fade text-start" } id="large"  aria-labelledby="myModalLabel17" style= {styles.popup} aria-hidden="true">
                <div className="modal2-dialog modal2-dialog-centered modal2-xl">
                  <div className="modal2-content">
                    <div className="modal2-header">
                      <h4 className="modal2-title" id="myModalLabel17">{opendata}</h4>
                      <button type="button" className="btn-close" data-bs-dismiss="modal2" aria-label="Close" onClick={()=>{setOpenmodal(false)}}></button>
                    </div>
                    <div className="modal2-body">
              
                    <Datak2 siparis={siparisci} statusa={statusad4}  pr={prt4} degerg={degera4} filtera={opendata}/>
                      </div>
                    <div className="modal2-footer">
                      
                    </div>
                  </div>
                </div>
              </div>


              <div className= {openmodal ? 'modal-backdrop fade show' : '' }></div>
    </div>

   

    
        </React.Fragment>
    );
}

 
 

export default MyCharts2;