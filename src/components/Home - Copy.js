import "./components.css";
import "./components2.css";
import Navbar from "../components/headernavbar/Navbar";
import Menu from "../components/menu/Menu";
import { Chart } from "react-google-charts";
import Footer from "./Footer";
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



const Home = () => {
   
    
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
        <form>
                      <div className="mb-3 row">
                        <label htmlFor="html5-text-input" className="col-md-4 col-form-label"><h6 >Texniki tapşırıq nömrəsi</h6></label>
                        <div className="col-md-10">
                          <input className="form-control" type="text"  />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label htmlFor="html5-search-input" className="col-md-4 col-form-label"><h6>Texniki tapşırıq tarixi</h6></label>
                        <div className="col-md-3">
                        <input className="form-control" type="date"   id="html5-date-input"/>
                       
                        </div>
                        <div className="col-md-3">
                        <input className="form-control" type="date"  id="html5-date-input"/>
                       
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
                            <h2 className="mb-2">201 </h2>
                          </div>
                          <div id="orderStatisticsChart"></div>
                        </div>
                        <ul className="p-0 m-0">
                          <li className="d-flex mb-1 pb-1">
                          <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-danger"><i className='bx bxl-product-hunt' ></i></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">İcrası davam edən</h6>
                                <small className="text-muted"></small>
                              </div>
                              <div className="user-progress">
                                <small className="fw-semibold">120</small>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-1 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-danger"><i className='bx bxl-product-hunt' ></i></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Gecikmədə olan</h6>
                                <small className="text-muted"></small>
                              </div>
                              <div className="user-progress">
                                <small className="fw-semibold">20</small>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-1 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-info"><i className='bx bx-test-tube' ></i></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Müştəri testində</h6>
                                <small className="text-muted"></small>
                              </div>
                              <div className="user-progress">
                                <small className="fw-semibold">36</small>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-warning"
                                ><i className='bx bxs-wallet' ></i></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Qiymətləndirmədə</h6>
                                <small className="text-muted"></small>
                              </div>
                              <div className="user-progress">
                                <small className="fw-semibold">25</small>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}   
      chartEvents={ [
        {
          callback: ({ chartWrapper, google }) => {
            const chart = chartWrapper.getChart();
            chart.container.addEventListener("select", () =>   {
            
            
          
              var selectedItem = chart.getSelection()[0];
              if (selectedItem) {
                var value = data.getValue(selectedItem.row, selectedItem.column);
                alert('The user selected ' + value);
              }

            }
            
            )

           
          },
           eventName: "ready"
        }
      ]}
    />
         
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
                        <Chart
      chartType="PieChart"
      data={data2}
      options={options2}
      width={"100%"}
      height={"400px"}
    />
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
