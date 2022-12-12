import "./components.css";
import "./components2.css";
import Navbar from "../components/headernavbar/Navbar";
import Menu from "../components/menu/Menu";

import Footer from "./Footer";
import GoogleContext  from '../WithContext/GoogleContext';
import Layihe from "../WithContext/Layihe";
import { Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

import axios from "axios";




export const data = [
  ["Task", "Hours per Day"],
  ["İcrası davam edən", 120],
  ["Gecikmədə olan", 20],
  ["Müştəri testində", 36],
  ["Qiymətləndirmədə", 25],

];


export const options = {
  title: "Ümumi icra vəziyyəti ",
  
};

export const data2 = [
  ["Task2", "Hours"],
  ["BNKVYBİ", 60],
  ["İTÜNBİ", 35],
  ["VÖXBİ", 42],
  ["VABİ", 25],
  ["Digər", 39],
];

export const options2 = {
  title: "Baş idarələr üzrə bölgü",
};

export const chartEvents: ReactGoogleChartEvent[] = [
  {
    eventName: "select",
    callback: ({ chartWrapper }) => {
      const chart = chartWrapper.getChart();
      const selection = chart.getSelection();
      if (selection.length === 1) {
        const [selectedItem] = selection;
        const dataTable = chartWrapper.getDataTable();
        const { row, column } = selectedItem;

        console.log("You selected:", {
          row,
          column,
          value: dataTable?.getValue(row, column),
        });
      }
    },
  },
];


const Home = () => {

  const [Readdata1, setDashboard1] = useState([]);
  useEffect(() => {
      getRead1();
  }, []);
  
  function getRead1() {
      axios.get(`https://asut.az/tax1/taskdashboard1.php`).then(function(response) {
         
        setDashboard1(response.data);
      });
  }

  
 
  const [google, setGoogle] = useState(null);

  useEffect(() => {
    if (!google) {
      const head = document.head;
      let script = document.getElementById('googleChartsScript');
      if (!script) {
        script = document.createElement('script');
        script.src = 'https://www.gstatic.com/charts/loader.js';
        script.id = 'googleChartsScript';
        script.onload = () => {
          if (window.google && window.google.charts) {
            window.google.charts.load('current', {'packages':['corechart']});
            
            window.google.charts.setOnLoadCallback(() => setGoogle(window.google))
          }
        };
        head.appendChild(script);
      } else if (window.google) {
        setGoogle(window.google);
      }
    }

    return () => {
      let script = document.getElementById('googleChartsScript');
      if (script) {
        script.remove();
      }
    }
  }, [google]);

  const arr45 = [
  {status: '1', sayi: 1},
  
];





  const handleSubmit = (e) => {
        
    e.preventDefault();
     
}
//const sumdata1 = Readdata1.map(datum => Number(datum.sayi)).reduce((a, b) => a + b)
//const sumdata1=55

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
<section id="dashboard-ecommerce">
  <div className="row match-height">
   
    <div className="col-xl-6 col-md-6 col-12">
      <div className="card card-congratulation-medal">
        <div className="card-body">
        <form onSubmit={handleSubmit}>
                      <div className="mb-3 row">
                        <label htmlFor="html5-text-input" className="col-md-4 col-form-label"><h6 >Texniki tapşırıq nömrəsi</h6></label>
                        <div className="col-md-10">
                          <input className="form-control" type="text" name="no" id="no" />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="html5-search-input" className="col-md-4 col-form-label"><h6>Texniki tapşırıq tarixi</h6></label>
                        <div className="col-md-3">
                        <input className="form-control" type="date"   id="btarih" name="btarih"/>
                       
                        </div>
                        <div className="col-md-3">
                        <input className="form-control" type="date"  id="starih" name="starih"/>
                       
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary waves-effect waves-float waves-light">Axtar</button>
                    </form>
         
        </div>
      </div>
    </div>
   
    <div className="col-xl-6 col-md-6 col-12">
      <div className="card card-statistics">
        <div className="card-header">
          <h4 className="card-title">Axtar</h4>
          
        </div>
        <div className="card-body statistics-body">
          <div className="row">
          <form>
                     <div className="mb-3 row">
                       <label htmlFor="html5-text-input" className="col-md-3 col-form-label"><h6>Sifarişçi</h6></label>
                       <div className="col-md-3">
                       <select id="defaultSelect" className="form-select">
                          <option></option>
                          <option value="1">BNKVYBİ</option>
                          <option value="2">VABİ</option>
                          <option value="3">İTÜNBİ</option>
                          <option value="4">...</option>
                        </select>
                       </div>
                     
                    
                       <label htmlFor="html5-search-input" className="col-md-3 col-form-label"><h6>Status</h6></label>
                       <div className="col-md-3">
                       <select id="defaultSelect" className="form-select">
                          <option></option>
                          <option value="1">İcrada/Nəzarətdə</option>
                          <option value="2">İcrada/Gecikmə - X Gün</option>
                          <option value="3">Müştəri testində/Nəzarətdə</option>
                          <option value="4">Müştəri testində/Gecikmə - X Gün.</option>
                          <option value="5">DVX tərəfindən dayandırılıb</option>
                          <option value="6">İcraçı tərəfindən dayandırılıb</option>
                          <option value="7">Ləğv edilib</option>
                        </select>
                        </div>
                       </div>
                    
                     <div className="mb-3 row">
                       <label htmlFor="html5-search-input" className="col-md-3 col-form-label"><h6>Dəyəri</h6></label>
                       <div className="col-md-3">
                       <input className="form-control" type="text"  />
                       </div>
                     
                   
                       <label htmlFor="html5-search-input" className="col-md-3 col-form-label"><h6>Modul/Alt sistem</h6></label>
                       <div className="col-md-3">
                       <select id="defaultSelect" className="form-select" name="amodul">
                          <option></option>
                          <option value="1">..</option>
                          <option value="2">...</option>
                          

                        </select>
                       </div>
                       </div>
                    
                     <div className="mb-3 row">
                       <label htmlFor="html5-search-input" className="col-md-3 col-form-label"><h6>Prioritet</h6></label>
                       <div className="col-md-3">
                       <select id="defaultSelect" className="form-select" >
                          <option></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">Rəhbərlik</option>
                          <option value="4">Qanunvericilik</option>
                        </select>
                       </div>
                       <div className="col-md-3">
                       <button type="submit" className="btn btn-primary waves-effect waves-float waves-light">Axtar</button></div>
                     </div>
                    
                    </form>
          </div>
        </div>
      </div>
    </div>
 
  </div>

  

  <div className="row match-height">
   
    <div className="col-xl-6 col-md-6 col-12">
      <div className="card card-congratulation-medal">
        <div className="card-body">
        <h5 className="m-0 me-2">Layihe Statisika</h5>
        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex flex-column align-items-center gap-1">
                            
                            <span>Layihe Cemi</span>
                            <h2 className="mb-2"> </h2>
                          </div>
                          <div id="orderStatisticsChart"></div>
                        </div>
                        <ul className="p-0 m-0">
                       { 
                       
                       

                       Readdata1.map(item  =>  <li className="d-flex mb-1 pb-1" key={item.status}>
                          <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-danger"><i className='bx bxl-product-hunt' ></i></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">{item.status}</h6>
                                <small className="text-muted"></small>
                              </div>
                              <div className="user-progress">
                                <small className="fw-semibold">{item.sayi}</small>
                              </div>
                            </div>
                          </li>
                       
                       
                       )
                       
                       }

                        </ul>
                        {!google && <Spinner />}
                        <GoogleContext.Provider value={{google, setGoogle}}>
       
        
        
        <Layihe  Data={Readdata1}/>
        
      
    </GoogleContext.Provider>
         
        </div>
      </div>
    </div>
   
    <div className="col-xl-6 col-md-6 col-12">
      <div className="card card-statistics">
        <div className="card-header">
          <h4 className="card-title">Baş idarələr üzrə Statisika</h4>
          
        </div>
        <div className="card-body statistics-body">
          <div className="row">
          <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex flex-column align-items-center gap-1">
                            
                            <span>Baş idarələr üzrə  cəmi </span>
                            <h2 className="mb-2">201 </h2>
                          </div>
                          <div id="orderStatisticsChart"></div>
                        </div>
                        <ul className="p-0 m-0">
                          <li className="d-flex mb-1 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-primary"
                                ><i className='bx bxs-building' ></i></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">BNKVYBİ</h6>
                                <small className="text-muted"></small>
                              </div>
                              <div className="user-progress">
                                <small className="fw-semibold">60</small>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-1 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-danger"><i className='bx bxl-product-hunt' ></i></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">İTÜNBİ</h6>
                                <small className="text-muted"></small>
                              </div>
                              <div className="user-progress">
                                <small className="fw-semibold">35</small>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-1 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-info"><i className='bx bxs-building' ></i></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">VÖXBİ</h6>
                                <small className="text-muted"></small>
                              </div>
                              <div className="user-progress">
                                <small className="fw-semibold">42</small>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-warning"
                                ><i className='bx bxs-building' ></i></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">VABİ</h6>
                                <small className="text-muted"></small>
                              </div>
                              <div className="user-progress">
                                <small className="fw-semibold">25</small>
                              </div>
                            </div>
                            
                          </li>
                          <li className="d-flex">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-warning"
                                ><i className='bx bxs-building' ></i></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">DIGER</h6>
                                <small className="text-muted"></small>
                              </div>
                              <div className="user-progress">
                                <small className="fw-semibold">39</small>
                              </div>
                            </div>
                            
                          </li>
                        </ul>
                
          </div>
        </div>
      </div>
    </div>
 
  </div>


</section>

</div>
        </div>
      </div>
    </div>
    <Footer />
    
   
    
    </>
    )
}

export default Home;
