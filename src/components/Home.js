import "./components.css";
import "./components2.css";
import Navbar from "../components/headernavbar/Navbar";
import Menu from "../components/menu/Menu";
// import GChart from "../WithHooks/Goog";
import React from "react";
import Footer from "./Footer";


import Chart1 from "../DashboardCharts/Chart1";
import Chart2 from "../DashboardCharts/Chart2";
//import { ToastContainer, toast } from 'react-toastify';
 





const Home = () => {
 
 
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
   
  

<div className="match-height row"><div className="col-12 col-md-6 col-xl-4">
<div className="card-congratulations-medal card">
<div className="card-body"><h5>Tamamlanmış layihələrin sayı</h5><p className="font-small-3 card-text"></p>
<h3 className="mb-75 mt-2 pt-50"><a href="/">298</a></h3>
<img className="congratulation-medal" src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-1/assets/badge.3bddf276.svg"   />
</div>
</div></div>



</div>


  <div className="row match-height">
   
                    <Chart1 />
                        <Chart2 />
 
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
