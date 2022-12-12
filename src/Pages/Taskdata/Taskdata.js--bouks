import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
import { Component } from "react";
import axios from "axios";
import Navbar from "../../components/headernavbar/Navbar";
import Menu from "../../components/menu/Menu";
import Footer from "../../components/Footer";
import { Modal,  OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditModulForm from '../../components/EditForm'
  class taskdata extends Component {
  
    
    constructor(props) {
      super(props);
      this.state = {
        persons: [],
     };
    
  }
  

    componentDidMount(){
      
      axios.get(`https://asut.az/tax1/readtask.php`)
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })

    
   if (!$.fn.DataTable.isDataTable("#myTable")) {
              $(document).ready(function () {
                setTimeout(function () {
                  $("#table").DataTable({
                    pagingType: "full_numbers",
                    pageLength: 20,
                    processing: true,
                    dom: "Bfrtip",
                    select: {
                      style: "single",
                    },
        
                    buttons: [
                      {
                        extend: "pageLength",
                        className: "btn btn-secondary bg-secondary",
                      },
                      {
                        extend: "copy",
                        className: "btn btn-secondary bg-secondary",
                      },
                      {
                        extend: "csv",
                        className: "btn btn-secondary bg-secondary",
                      },
                      {
                        extend: "print",
                        customize: function (win) {
                          $(win.document.body).css("font-size", "10pt");
                          $(win.document.body)
                            .find("table")
                            .addClass("compact")
                            .css("font-size", "inherit");
                        },
                        className: "btn btn-secondary bg-secondary",
                      },
                    ],
        
                    fnRowCallback: function (
                      nRow,
                      aData,
                      iDisplayIndex,
                      iDisplayIndexFull
                    ) {
                      var index = iDisplayIndexFull + 1;
                      $("td:first", nRow).html(index);
                      return nRow;
                    },
        
                    lengthMenu: [
                      [10, 20, 30, 50, -1],
                      [10, 20, 30, 50, "All"],
                    ],
                    columnDefs: [
                      {
                        targets: 0,
                        render: function (data, type, row, meta) {
                          return type === "export" ? meta.row + 1 : data;
                        },
                      },
                    ],
                  });
                }, 1000);
              });
            }
  }  
  
  
  showTable = () => {
          try {
            return this.state.persons.map((item, index) => {
              return (
                
                  <tr key={`"b${index +1}"`}>
                  <td className="text-xs font-weight-bold"  >{index +1}</td>
                  <td className="text-xs font-weight-bold">{item.no}</td>
                 <td className="text-xs font-weight-bold" >{item.siparisci}</td>
                 <td className="text-xs font-weight-bold" >{item.oncelik}</td>
                 <td className="text-xs font-weight-bold" >{item.mshas}</td>
                 <td className="text-xs font-weight-bold" >{item.alayihe}</td>
                 <td className="text-xs font-weight-bold" >{item.amodul}</td>
                 <td className="text-xs font-weight-bold" >{item.deyeri}</td>
                 <td className="text-xs font-weight-bold" >{item.starih}</td>
                 <td className="text-xs font-weight-bold" >{item.btarih}</td>
                 <td className="text-xs font-weight-bold" >{item.kqeyd}</td>
                 <td className="text-xs font-weight-bold" >{item.emalumat}</td>
                 <td className="text-xs font-weight-bold" ><a rel="noopener noreferrer" href ={`https://asut.az/tax1/${item.file}`} target="_blank">File</a></td>
                 <td className="text-xs font-weight-bold" >{item.username}</td>
                 <td className="text-xs font-weight-bold" >{item.kayittarihi}</td>
                 <td> <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Redakte
                        </Tooltip>
                    }>
                    <button    className="btn text-warning btn-act" data-toggle="modal"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-50 feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Sil
                        </Tooltip>
                    }>
                    <button   className="btn text-danger btn-act" data-toggle="modal"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-50 feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
                </OverlayTrigger>
                </td>
                

                 
  <td></td>
  </tr>
                  );
            });
          } catch (e) {
            alert(e.message);
          }
        };
        render(){
          
          
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
         <div className="table-responsive p-0 pb-2">
       <table id="table" className="table align-items-center justify-content-center mb-0">
           <thead>
               <tr>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">SNo</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">№</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Sifarişçi</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Prioritet</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">DVX Məsul şəxs</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Aid olduğu layihə</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Aid olduğu modul</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Dəyəri</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Başlama vaxtı</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Bitmə vaxtı</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Qısa qeyd</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Ətraflı məlumat</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Sənəd </th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Kaydeden </th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Kayd Tarixi </th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Action </th>
              
<th></th>
</tr>
           </thead>

           <tbody>
                   {this.showTable()}
           </tbody>
       </table>
           </div>
           </div>
               
             
           </div>    </section>  
           
           <Modal  >
        <Modal.Header closeButton>
            <Modal.Title>
            Modul redaktə edin
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditModulForm  />
        </Modal.Body>
        <Modal.Footer>
               
        </Modal.Footer>
    </Modal>
           
             </div> </div> </div> </div> <Footer />
   
     </>
  )
}
  } 
export default taskdata;