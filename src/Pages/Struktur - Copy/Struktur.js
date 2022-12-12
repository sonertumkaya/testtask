import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
import Navbar from "../../components/headernavbar/Navbar";
import Menu from "../../components/menu/Menu";
import axios from "axios";
import React from "react";



class Struktur extends React.Component {
  
  UPLOAD_ENDPOINT = 'https://asut.az/tax1/strukturform.php?username=';
  constructor(props) {
      super(props);
      this.state ={
        struktur:'',
         
        persons: [],
      
      }
      
      this.baseState = this.state 
      this.onSubmit = this.onSubmit.bind(this)
      this.onChange = this.onChange.bind(this)
      this.uploadFile = this.uploadFile.bind(this)
  }

  async onSubmit(e){
      e.preventDefault() 
      let res = await this.uploadFile(this.state.struktur);
      console.log(res.data);
      
     if (res.data.a !== 1) {window.alert(JSON.stringify("Formanın saxlanması uğurludur", 0, 2));
     document.getElementById("modalclose").click();

     
     this.setState({struktur: "", })
    
     axios.get(`https://asut.az/tax1/readstruktur.php`)
     .then(res => {
       const persons = res.data;
       
       this.setState({ persons });
     })
     return <showTable />
    }
     
     else{
      e.preventDefault() 
      window.alert(JSON.stringify("Forma göndərmə xətası!", 0, 2));
     }
  }
  onChange(e) {
      this.setState({file:e.target.struktur[0]})
  }
  async uploadFile(){
    
      const formData = new FormData();
       
      formData.append('struktur',this.state.struktur)
       
      return  await axios.post(this.UPLOAD_ENDPOINT+this.props.baslik2+'', formData,{
          headers: {
              'content-type': 'multipart/form-data'
          }
      }
      );
      
      
  
}

datareads(){


  axios.get(`https://asut.az/tax1/readstruktur.php`)
.then(res => {
  const persons = res.data;
  
  this.setState({ persons });
})
}

componentDidMount(){
     
  axios.get(`https://asut.az/tax1/readstruktur.php`)
.then(res => {
  const persons = res.data;
  
  this.setState({ persons });
})

if (!$.fn.DataTable.isDataTable("#myTable")) {
          $(document).ready(function () {
            setTimeout(function () {
              $("#table").DataTable({
                pagingType: "full_numbers",
                pageLength: 10,
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
          <td className="text-xs font-weight-bold">{item.id}</td>
         <td className="text-xs font-weight-bold">{item.struktur}</td>
         <td className="text-xs font-weight-bold">{item.kayittarihi}</td>
         <td className="text-xs font-weight-bold">{item.username}</td>
         <td className="text-xs font-weight-bold">
          
          
           <button type="button" className="btn btn-outline-primary"   >
         Redaktə
              </button>
            
              </td>
           
           
</tr>





          );
    });
  } catch (e) {
    alert(e.message);
  }
};

  
  render() {
    
    
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
             
        
              <div className="col-xxl">
                  <div className="card mb-4">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="mb-0">Yeni struktur forması</h5>
                      <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target={"#saveforms"} id="btno">
         Yeni Struktur
              </button>
                    </div>
                 
                    <div
                className="modal fade text-start"
                id={"saveforms"}
                key="anaform"
                
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" >Struktur Form</h4>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="modalclose"></button>
                    </div>
                    <form onSubmit={ this.onSubmit } name="myform">
                       

                          <div className="modal-body">
                        <label>Struktur: </label>
                        <div className="mb-1">
                        <input type="text" className="form-control" id="basic-default-name" name="struktur"   value={this.state.struktur}
                onChange={e => this.setState({ struktur: e.target.value })} />
                        </div>

                       
                      </div>



                        <div className="row justify-content-end">
                          <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary" >Yadda saxla</button>
                          </div>
                        </div>
                      </form>
                  </div>
                </div>
              </div>

                    <div className="card-body">
                    <div className="row match-height">
              
              <div className="container-fluid py-4">
         <div className="table-responsive p-0 pb-2">
       <table id="table" className="table align-items-center justify-content-center mb-0">
           <thead>
               <tr>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">SNo</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">№</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Struktur</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Kayd Tarixi</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Kaydeden</th>
               <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Action</th>
              
              
  
 </tr>
           </thead>
 
           <tbody>
                   {this.showTable()}
           </tbody>
       </table>
           </div>
           </div>
               
             
           </div> 
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="row match-height">
                     
                      </div>
                    </div>
                </div>
               
            
     
               
                </div>
    </section>    </div> </div>   
   
    
  
  
    
         
         
          
          
          </div> </div>
 
    </>
  )
} 




}
  
export default Struktur;