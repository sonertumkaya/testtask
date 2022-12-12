
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import Navbar from "../../components/headernavbar/Navbar";
import Menu from "../../components/menu/Menu";
import MList from "./MListuser";
//import SMList from "./SMList";
import axios from "axios";
import React from "react";
import Footer from "../../components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* import { useQuery} from '@tanstack/react-query'; */

class Taskform extends React.Component {
   
 
  UPLOAD_ENDPOINT = 'https://asut.az/tax1/taskform.php?username=';
  constructor(props) {
      super(props);
      this.state ={
        file:null,
        emalumat: '',
        no:'',
        siparisci:'',
        oncelik:'',
        msahs:'',
        alayihe:'',
        amodul:'',
        deyeri:'',
        starih:'',
        btarih:'',
        kqeyd:'',
        username: '' ,
        mezmun:'',
        persons:[],
        
       
      }
       
      this.baseState = this.state 
      this.onSubmit = this.onSubmit.bind(this)
      this.onChange = this.onChange.bind(this)
      this.uploadFile = this.uploadFile.bind(this)
      this.handleChange = this.handleChange.bind(this);
      

  }


  async onSubmit(e){
      e.preventDefault() 
      let res = await this.uploadFile(this.state.file);
      console.log(res.data);
      
     if (res.data.a === 1) {
   //   window.alert(JSON.stringify("Formanın saxlanması uğurludur", 0, 2));
   toast.success(' Formanın saxlanması uğurludur!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    }); 
     this.setState(this.baseState)
     e.preventDefault();

     // 👇️ clear all input values in the form
     e.target.reset();
    }
     
     else{

      window.alert(JSON.stringify("Forma göndərmə xətası!", 0, 2));
     }
  }
  onChange(e) {
      this.setState({file:e.target.files[0]})
  }

  handleChange(e) {
    this.setState({alayihe:e.target.value})
     
    
}



  async uploadFile(file){
    
      const formData = new FormData();
      
      formData.append('avatar',file)
      formData.append('emalumat',this.state.emalumat)
      formData.append('no',this.state.no)
      formData.append('siparisci',this.state.siparisci)
      formData.append('oncelik',this.state.oncelik)
      formData.append('msahs',this.state.msahs)
      formData.append('alayihe',this.state.alayihe)
      formData.append('amodul',this.state.amodul)
      formData.append('deyeri',this.state.deyeri)
      formData.append('starih',this.state.starih)
      formData.append('btarih',this.state.btarih)
      formData.append('kqeyd',this.state.kqeyd)
      formData.append('username',this.state.kqeyd)
      formData.append('mezmun',this.state.mezmun)
      return  await axios.post(this.UPLOAD_ENDPOINT+this.props.baslik+'', formData,{
          headers: {
              'content-type': 'multipart/form-data'
          }
      }
      );
      
      
  
}





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
                      <h5 className="mb-0">Yeni texniki tapşırıq forması</h5>
                    
                    </div>
                    <div className="card-body">
                      <form onSubmit={ this.onSubmit } name="myform">
                        <div className="row mb-3">
                          <label className="col-sm-1 col-form-label" htmlFor="basic-default-name">№</label>
                          <div className="col-sm-3">
                            <input type="text" className="form-control" id="basic-default-name" name="no"  value={this.state.no}
                onChange={e => this.setState({ no: e.target.value })} />
                          </div>

                          <label className="col-sm-1 col-form-label" htmlFor="basic-default-company">Sifarişçi</label>
                          <div className="col-sm-3">
                          <select id="defaultSelect" className="form-select" name="siparisci"  value={this.props.basliks}
                onChange={e => this.setState({ siparisci: e.target.value })} disable>
                          <option>{this.props.basliks}</option>
                          
                        </select>
                          </div>
                        </div>
                       
                       


                        <div className="row mb-3">
                          <label className="col-sm-1 col-form-label" htmlFor="basic-default-email">Aid olduğu layihə</label>
                          <div className="col-sm-3">
                            <div className="input-group input-group-merge">
                            <select id="defaultSelect" className="form-select" name="alayihe"  value={this.state.alayihe}
                onChange={this.handleChange}>
                          <option value="" disabled selected hidden>Aid olduğu layihə</option>
                          <MList />

                        </select>
                        

                            </div>
                            
                            
                          </div>

                          <label className="col-sm-1 col-form-label" htmlFor="basic-default-email">Aid olduğu modul</label>
                          <div className="col-sm-3">
                            <div className="input-group input-group-merge">
                            <select id="defaultSelect" className="form-select" name="amodul"  value={this.state.amodul}
                onChange={e => this.setState({ amodul: e.target.value })}>
                          <option value="" disabled selected hidden>Aid olduğu modul</option>
                          <option></option>
                         
                      
                          

                        </select>
                        
                            </div>
                            
                            
                          </div>
                          
                        </div>
                        



                        <div className="row mb-3">
                          <label className="col-sm-1 col-form-label" htmlFor="basic-default-email">Novu</label>
                          <div className="col-sm-7">
                          <div className="input-group input-group-merge">
                            <select id="defaultSelect" className="form-select" name="amodul"  value={this.state.amodul}
                onChange={e => this.setState({ amodul: e.target.value })}>
                          <option value="" disabled selected hidden>Novu</option>
                          <option>Yeni</option>
                          <option>Redaktə</option>
                          <option>Əlavə</option>
                      
                          

                        </select>
                        
                            </div>
                          
                         
                 
                          </div>

                         

                         

                        </div>
                       

                        <div className="row mb-3">
                          <label className="col-sm-1 col-form-label" htmlFor="basic-default-email">Maksat qeyd</label>
                          <div className="col-sm-7">
                            <div className="input-group input-group-merge">
                            <input type="text" className="form-control" id="basic-default-name" name="kqeyd"  value={this.state.kqeyd}
                onChange={e => this.setState({ kqeyd: e.target.value })} />
                        
                           </div>
                          
                          
                         
                 
                          </div>

                         

                         

                        </div>

                        <div className="row mb-3">
                          <label className="col-sm-1 col-form-label" htmlFor="basic-default-email">Ətraflı məlumat</label>
                          <div className="col-sm-7">
                            <div className="input-group input-group-merge">
                            <textarea  className="form-control" name="emalumat"  value={this.state.emalumat}
                onChange={e => this.setState({ emalumat: e.target.value })} ></textarea>
                        
                           </div>
                            
                            
                          </div>

                         

                         

                        </div>

                        <div className="row mb-3">
                          <label className="col-sm-1 col-form-label" htmlFor="basic-default-email">Mezmun</label>
                          <div className="col-sm-7">
                            <div className="input-group input-group-merge">
                            <textarea  className="form-control" name="mezmun"  value={this.state.mezmun}
                onChange={e => this.setState({ mezmun: e.target.value })} ></textarea>
                        
                           </div>
                            
                            
                          </div>

                         

                         

                        </div>

                        <div className="row mb-3">
                          <label className="col-sm-1 col-form-label" htmlFor="basic-default-email">Talepler</label>
                          <div className="col-sm-7">
                            <div className="input-group input-group-merge">
                            <textarea  className="form-control" name="mezmun"  value={this.state.mezmun}
                onChange={e => this.setState({ mezmun: e.target.value })} ></textarea>
                        
                           </div>
                            
                            
                          </div>

                         

                         

                        </div>

                        <div className="row mb-3">
                          <label className="col-sm-1 col-form-label" htmlFor="basic-default-email">Nəticələr</label>
                          <div className="col-sm-7">
                            <div className="input-group input-group-merge">
                            <textarea  className="form-control" name="mezmun"  value={this.state.mezmun}
                onChange={e => this.setState({ mezmun: e.target.value })} ></textarea>
                        
                           </div>
                            
                            
                          </div>

                         

                         

                        </div>


                        <div className="row mb-3">
                          <label className="col-sm-1 col-form-label" htmlFor="basic-default-email">Sənəd əlavə et</label>
                          <div className="col-sm-7">
                            <div className="input-group input-group-merge">
                            <input className="form-control" type="file" name="file[]" multiple onChange={ this.onChange } />
                        
                           </div>
                            
                            
                          </div>

                         

                         

                        </div>
                      
                        
              
                       
                <input type="text" className="form-control" id="username" name="username"   value={this.state.username}
                onChange={e => this.setState({ username: e.target.value })} hidden /> 








                        <div className="row justify-content-end">
                          <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary" >Yadda saxla</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
               
            
     
    
                </div>
    </section>  <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />  </div> </div> </div> </div>  
   
    <Footer />
   
    </>
  )
} }
  
export default Taskform;