import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import axios from "axios";
import Navbar from "../../components/headernavbar/Navbar";
import Menu from "../../components/menu/Menu";
import SList from "./StrukturList";
import RList from "./RoleList";
import React from "react";
import Footer from "../../components/Footer";

class UserRegister extends React.Component {
   
  UPLOAD_ENDPOINT = 'https://asut.az/tax1/userform.php';
  constructor(props) {
      super(props);
      this.state ={
        personsa:[],
        roles:[],
        file:null,
        ad: '',
        soyad:'',
        aadi:'',
        sad:'',
        vad:'',
        email:'',
        tel:'',
        rol:'',
        parol:'',
        
        username:'',

      }
      this.baseState = this.state 
      this.onSubmit = this.onSubmit.bind(this)
      this.onChange = this.onChange.bind(this)
      this.uploadFile = this.uploadFile.bind(this)
  }

  async onSubmit(e){
      e.preventDefault() 
      let res = await this.uploadFile(this.state.file);
      console.log(res.data);
      
     if (res.data.a === 1) {window.alert(JSON.stringify("Formanın saxlanması uğurludur", 0, 2));
     this.setState(this.baseState)
     e.preventDefault();

     // 👇️ clear all input values in the form
     e.target.reset();
    }
     
     else{

      window.alert(JSON.stringify("Forma göndərmə xətası!", 0, 2));
      window.alert(JSON.stringify(res.data.message, 0, 2));
     }
  }
  onChange(e) {
      this.setState({file:e.target.files[0]})
  }
  async uploadFile(file){
    
      const formData = new FormData();
      formData.append('avatar',file)
      formData.append('ad',this.state.ad)
      formData.append('soyad',this.state.soyad)
      formData.append('aadi',this.state.aadi)
      formData.append('sad',this.state.sad)
      formData.append('vad',this.state.vad)
      formData.append('email',this.state.email)
      formData.append('tel',this.state.tel)
      formData.append('rol',this.state.rol)
      formData.append('parol',this.state.parol)
      
    
      return  await axios.post(this.UPLOAD_ENDPOINT, formData,{
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
                      <h5 className="mb-0">Yeni istifadəçi forması</h5>
                      
                    </div>
                    <div className="card-body">
                      <form onSubmit={ this.onSubmit } name="myform">
                        <div className="row mb-3">
                          <label className="col-sm-1 col-form-label" htmlFor="basic-default-name">Ad</label>
                          <div className="col-sm-3">
                            <input type="text" className="form-control" id="basic-default-name" name="ad"  value={this.state.ad}
                onChange={e => this.setState({ ad: e.target.value })} />
                          </div>

                          <label className="col-sm-1 col-form-label" htmlFor="basic-default-name">Soyad</label>
                          <div className="col-sm-3">
                            <input type="text" className="form-control" id="basic-default-name" name="soyad"  value={this.state.soyad}
                onChange={e => this.setState({ soyad: e.target.value })} />
                          </div>
                        </div>
                       
                        <div className="row mb-3">
                          <label className="col-sm-1 col-form-label" htmlFor="basic-default-email">Ata Adi</label>
                          <div className="col-sm-3">
                            <div className="input-group input-group-merge">
                            <input type="text" className="form-control" id="basic-default-name" name="aadi"  value={this.state.aadi}
                onChange={e => this.setState({ aadi: e.target.value })} />
                        
                            </div>
                            
                            
                          </div>

                          <label className="col-sm-1 col-form-label" htmlFor="basic-default-email">Strukturun adı </label>
                          <div className="col-sm-3">
                            <div className="input-group input-group-merge">
                            <select id="defaultSelect" className="form-select" name="sad"  value={this.state.sad}
                onChange={e => this.setState({ sad: e.target.value })}>
                           <option></option>
                          <SList />
                        
                        </select>
                        
                            </div>
                            
                            
                          </div>
                          
                        </div>


                        <div className="row mb-3">
                          <label className="col-sm-1 col-form-label" htmlFor="basic-default-email">Vəzifə</label>
                          <div className="col-sm-3">
                            <div className="input-group input-group-merge">
                            <input type="text" className="form-control" id="basic-default-name" name="vad"  value={this.state.vad}
                onChange={e => this.setState({ vad: e.target.value })} />
                        
                            </div>
                            
                            
                          </div>

                          <label className="col-sm-1 col-form-label" htmlFor="basic-default-email">Elektron poçt ünvanı</label>
                          <div className="col-sm-3">
                            <div className="input-group input-group-merge">
                            <input type="text" className="form-control" id="basic-default-name" name="email"  value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })} />
                        
                            </div>
                            
                            
                          </div>
                          
                        </div>
                        




                        <div className="row mb-3">
                          <label className="col-sm-1 col-form-label" htmlFor="basic-default-email">Telefon nömrəsi</label>
                          <div className="col-sm-3">
                            <div className="input-group input-group-merge">
                            <input type="text" className="form-control" id="basic-default-name" name="tel"  value={this.state.tel}
                onChange={e => this.setState({ tel: e.target.value })} />
                        
                           </div>
                            
                            
                          </div>

                         
                          <label className="col-sm-1 col-form-label" htmlFor="basic-default-email">Sənəd əlavə et</label>
                          <div className="col-sm-3">
                            <div className="input-group input-group-merge">
                            <input className="form-control" type="file"  multiple="" onChange={ this.onChange } />
                        
                           </div>
                            
                            
                          </div>
                          

                        </div>


                        <div className="row mb-3">
                        <label className="col-sm-1 col-form-label" htmlFor="basic-default-email">Role </label>
                          <div className="col-sm-3">
                            <div className="input-group input-group-merge">
                            <select id="defaultSelect" className="form-select" name="rol"  value={this.state.rol}
                onChange={e => this.setState({ rol: e.target.value })}>
                       <option></option>
                          <RList />
                        </select>
                        
                            </div>
                            
                            
                          </div>


                          <label className="col-sm-1 col-form-label" htmlFor="basic-default-email">Parol</label>
                          <div className="col-sm-3">
                            <div className="input-group input-group-merge">
                            <input type="text" className="form-control" id="basic-default-name" name="parol"  value={this.state.parol}
                onChange={e => this.setState({ parol: e.target.value })} />
                        
                           </div>
                            
                            
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
               
             
        

            </div>
                 </section>    </div> </div> </div> </div> 
   <Footer />
   </>
            
    
   
     
  )
} }
  
export default UserRegister;