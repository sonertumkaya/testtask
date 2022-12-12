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


  class users extends Component {

    constructor(props) {
      super(props);
      this.state = {
        persons: [],
     };
    
  }

    componentDidMount(){
     
      axios.get(`https://asut.az/tax1/read.php`)
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
                  <td className="text-xs font-weight-bold">{index +1}</td>
                 <td className="text-xs font-weight-bold">{item.name}</td>
                 <td className="text-xs font-weight-bold">{item.email}</td>
                 
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
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">ID</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">AD</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Email</th>
              
<th></th>
</tr>
           </thead>

           <tbody>
                   {this.showTable()}
           </tbody>
       </table>
           </div>
           </div>
               
              </div>
                 </section>    </div> </div> </div> </div> 
   
   </>
     
    
    
    
   
     
  )
}
  } 
export default users;