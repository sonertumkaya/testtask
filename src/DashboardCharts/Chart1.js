import React, { useEffect, useState,useCallback } from 'react';
import Chart from "react-apexcharts";

//import axios from 'axios';
//import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
 
import Datak1 from './Data1';

const MyCharts = () => {
  const [noa, setNo] = useState("");
  const [batarih, setBtarih] = useState("");
  const [satarih, setStarih] = useState("");

const handleInputChange = useCallback((e) => {
  setNo(e.target.value)
}, [setNo])
const handleInputChangest = useCallback((e) => {
  setStarih(e.target.value)
}, [setStarih])
const handleInputChangebt = useCallback((e) => {
  setBtarih(e.target.value)
}, [setBtarih])
  const [stdudentSubject, setStudentsubject]= useState([]);
   const [studentMarks, setStudentMarks]= useState([]);
   const [gdata, setGdata]= useState([]);
   const [anoa, setnoa]= useState();
   const [abtariha, setbatriha]= useState();
   const [astariha, setsatriha]= useState();

   useEffect( ()=>{
       const sSubject=[];
       const sMarks=[];
       const sgData=[];
       const sayi=noa;
       const bstarih=batarih;
       const sstarih=satarih;
       const url=`https://asut.az/tax1/chart1.php?action=form&no=`;
       const url2=`&btarih=`;
       const url3=`&starih=`;
       const aurl=url+sayi+url2+bstarih+url3+sstarih;
      //alert(aurl)
       const getStudentdata= async()=>{
       const reqData= await fetch(aurl);
       const resData= await reqData.json();   
     
       for(let i=0; i< resData.length; i++)
       {
        sgData.push(resData[i]);
        sSubject.push(resData[i].status);
        sMarks.push(parseInt(resData[i].sayi));
       }
       setStudentsubject(sSubject);
       setStudentMarks(sMarks);
       setGdata(sgData);
       setnoa (sayi);
       setbatriha(bstarih)
       setsatriha(sstarih)
        //console.log(resData); 
       }

    getStudentdata();

   },[noa,batarih,satarih]);

  
   // modalbox icin data
   const [openmodal,setOpenmodal] = useState(false)
   const styles = {
     popup:{
       display: openmodal ? "block" : "none",
        
     }
   };
   const [opendata,setOpendata] = useState("")


    return(
        <React.Fragment>
            <div className="col-xl-6 col-md-6 col-12">
      <div className="card card-congratulation-medal">
        <div className="card-body">
        <form  >
                      <div className="mb-1 row">
                        <label htmlFor="html5-text-input" className="col-md-4 col-form-label"><h6 >Texniki tapşırıq nömrəsi</h6></label>
                        <div className="col-md-3">
                          <input className="form-control" type="text" name="no" id="no"  value={noa} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="mb-1 row">
                        <label htmlFor="html5-search-input" className="col-md-4 col-form-label"><h6>Texniki tapşırıq tarixi</h6></label>
                        <div className="col-md-3">
                        <input className="form-control" type="date"   id="btarih" name="btarih"  value={batarih} onChange={handleInputChangebt}/>
                       
                        </div>
                        <div className="col-md-3">
                        <input className="form-control" type="date"  id="starih" name="starih" value={satarih} onChange={handleInputChangest}/>
                       
                        </div>
                      </div>                       
                    </form>
       <br/>
       <div className="mb-1 row">
        <h4 className="m-0 me-2">Layihə Statisika</h4>
        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex flex-column align-items-center gap-1">
                            
                            <span>Layihə Cəmi</span>
                            <h2 className="mb-2"> {(gdata.reduce((a,v) =>  a = a + parseInt(v.sayi) , 0 ))}</h2>
                          </div>
                          <div id="orderStatisticsChart"></div>
                        </div>
                        <ul className="p-0 m-0">
                        {gdata.map(person => 
        
        <li className="d-flex mb-0 pb-0" key={person.status}>
        <div className="avatar flex-shrink-0 me-3">
          <span className="avatar-initial rounded bg-label-info"><i className='bx bx-test-tube' ></i></span>
        </div>
        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
          <div className="me-2">
          <Link className="d-flex align-items-center"   onClick={() => {setOpendata(person.status) ;setOpenmodal(true)} } to="">  <h6 className="mb-0">{person.status}</h6></Link>
            <small className="text-muted"></small>
          </div>
          <div className="user-progress">
            <small className="fw-semibold">{person.sayi}</small>
          </div>
        </div>
      </li>
        
        )}
                        </ul>
                      </div>
                       <br/>  
                <Chart 
                type="pie"
             
              
                height={550}

                series={ studentMarks }                

                options={{
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
                        title:{ text:""
                        } , 
                       noData:{text:"Boş Məlumat"},                        
                      // colors:["#f90000","#f0f"],
                      labels:stdudentSubject  ,
                      legend: {
                        show: true,
                         
                        position: 'bottom',
                        horizontalAlign: 'left', 
                        floating: false,
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial',
                        fontWeight: 400,
                        
                        height: 100,
                         
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
              
                    <Datak1  ano={anoa} status={opendata} btarih={abtariha} starih={astariha}/>
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

 
 

export default MyCharts;