import Navbar from "../../components/headernavbar/Navbar";
import Menu from "../../components/menu/Menu";
import './struktur.css';
import React from 'react';
import {useContext} from 'react';
import {UserContext} from '../../context/UserContext';
import Footer from "../../components/Footer";
import axios from "axios";

const Profile = (props) => {
  

  const {user} = useContext(UserContext);
  
  const [state, setState] = React.useState({
    ad: user.namec,
    soyad: user.snamec,
    ataadi: user.aadi,
    struktur: user.struktur,
    vazife: user.vad,
    email: user.email,
    tel: user.telno,
    rol: user.rol,
    usergroup: user.usergroup,
    parol: '',
  })

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  
  const handleSubmit = (e) => {
        
    e.preventDefault();
    updateProfile(state.ad,state.soyad,state.tel,state.parol,state.ataadi);
}

const updateProfile = (ad,soyad,tel,parol,ataadi) => {
   
  const formData = new FormData();
     
  
  formData.append('ad',ad);
  formData.append('soyad',soyad)
  formData.append('tel',tel)
  formData.append('parol',parol)
  formData.append('ataadi',ataadi)
   
  

  axios({
      method: 'post',
      url: 'https://asut.az/tax1/profileformedit.php?id='+user.id,
      data: formData,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
  })
  .then(function (response) {
      //handle success
      console.log(response)
      alert('Formanın saxlanması uğurludur.');  
  })
  .catch(function (response) {
      //handle error
      console.log(response)
  });
 
 

}
 

    
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
<div className="card">
      <div className="card-header border-bottom">
        <h4 className="card-title">Profil Təfərrüatları</h4>
      </div>
      <div className="card-body py-2 my-25">
      
      <img className="round"  src={`https://asut.az/tax1/${user.picture}`} alt="avatar" height="100" width="100" />
        <form className="validate-form mt-2 pt-50" onSubmit={handleSubmit} >
          <div className="row">
            <div className="col-12 col-sm-6 mb-1">
              <label className="form-label" htmlFor="accountFirstName">Ad</label>
              <input type="text" className="form-control" id="ad" name="ad" placeholder={state.ad} value={state.ad}  onChange={handleChange}   />
            </div>
            <div className="col-12 col-sm-6 mb-1">
              <label className="form-label" htmlFor="accountLastName">Soyad</label>
              <input type="text" className="form-control" id="soyad" name="soyad" placeholder={state.soyad} value={state.soyad}  onChange={handleChange} />
            </div>
            <div className="col-12 col-sm-6 mb-1">
              <label className="form-label" >Ata Ad</label>
              <input type="text" className="form-control" id="ataadi" name="ataadi" placeholder={state.ataadi} value={state.ataadi}   onChange={handleChange}/>
            </div>
            <div className="col-12 col-sm-6 mb-1">
              <label className="form-label" htmlFor="struktur">Struktur</label>
              <input type="text" className="form-control" id="struktur" name="struktur" placeholder={state.struktur} value={state.struktur}  onChange={handleChange} readOnly />
            </div>
            <div className="col-12 col-sm-6 mb-1">
              <label className="form-label" htmlFor="vazife">Vəzifə</label>
              <input type="text" className="form-control account-number-mask" id="vazife" name="vazife" placeholder={state.vazife} value={state.vazife}  onChange={handleChange}  readOnly />
            </div>
            <div className="col-12 col-sm-6 mb-1">
              <label className="form-label" htmlFor="email">Elektron poçt ünvanı</label>
              <input type="text" className="form-control" id="email" name="email" placeholder={state.email} value={state.email}   onChange={handleChange} readOnly />
            </div>
            <div className="col-12 col-sm-6 mb-1">
              <label className="form-label" htmlFor="telno">Telefon nömrəsi</label>
              <input type="text" className="form-control" id="tel" name="tel"  placeholder={state.tel} value={state.tel}  onChange={handleChange}/>
            </div>
            <div className="col-12 col-sm-6 mb-1">
              <label className="form-label" htmlFor="rol">Role</label>
              <input type="text" className="form-control" id="rol" name="rol" placeholder={state.usergroup} value={state.usergroup}  onChange={handleChange} readOnly />
            </div>
            <div className="col-12 col-sm-6 mb-1">
              <label className="form-label" htmlFor="parol">Parol</label>
              <input type="password" className="form-control" id="parol" name="parol"   onChange={handleChange}  />
              </div>
           
              
           
            
            <div className="col-12">
              <button type="submit" className="btn btn-primary mt-1 me-1 waves-effect waves-float waves-light">Yadda Saxla</button>
           
            </div>
          </div>
        </form>
        
      </div>
    </div>    </div> </div> </div> </div> <Footer />
    </>
  );
}

export default Profile;