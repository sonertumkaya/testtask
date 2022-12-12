import {useState,useContext} from 'react';
import {UserContext} from '../../context/UserContext';
import './core.css';
import './login.css';

import './fontawesome.min.css';

import logo from './logo.png';

const Login = () => {
    const {loginUser, wait, loggedInCheck} = useContext(UserContext);
   
    const [errMsg, setErrMsg] = useState(false);
    const [formData, setFormData] = useState({
        email:'',
        password:''
    });

    const onChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const submitForm = async (e) => {
        e.preventDefault();

        if(!Object.values(formData).every(val => val.trim() !== '')){
            setErrMsg('Bütün tələb olunan sahələri doldurun!');
            return;
        }

        const data = await loginUser(formData);
        if(data.success){
            e.target.reset();
        
            await loggedInCheck();
            return;
        }
        setErrMsg(data.message);
    }

    return (
        
         
       
        <div className="content-wrapper">
          <div className="content-body">
    
            
            <div className="auth-wrapper auth-cover">
      <div className="auth-inner row m-0">
     
        <div className="brand-logo" href="#">
          <img src={logo} alt="" height="72px"/>
          <h2 className="brand-text text-primary ms-1">Vergi Layihə Sistemi</h2>
        </div>
       
    
       
        <div className="d-none d-lg-flex col-lg-8 align-items-center p-5">
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
                      <img  alt="" className='img-fluid' src="https://www.kapsamdenetim.com/dosya/2019/11/image2-service3-1.png?w=1600" />
                    </div>
        </div>
        
    
        <div className="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
          <div className="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
            <h2 className="titlea">Vergi Layihə Sistemi! </h2>
            <p className="card-text mb-2">Zəhmət olmasa hesabınıza daxil olun</p>
            <form className="auth-login-form mt-2" action="/" onSubmit={submitForm}>
              <div className="mb-1">
                <label className="form-label" >E-poçt</label>
           
     <input type="email" name="email" className="form-control" onChange={onChangeInput} placeholder="E-poçtunuz" id="email" value={formData.email}  required />
              </div>
              <div className="mb-1">
                <div className="d-flex justify-content-between">
                  <label className="form-label" >Password</label>
                  
                </div>
                <div className="input-group input-group-merge form-password-toggle">
                <input type="password" name="password"  className="form-control"  onChange={onChangeInput} placeholder="Parol" id="password" autoComplete="on"  required={true} />
                  <span className="input-group-text cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"   className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></span>
                </div>
              </div>
              {errMsg && <div className="err-msg">{errMsg}</div>}
         
               <button className='btn btn-primary w-100 waves-effect waves-float waves-light'  disabled={wait}>Daxil ol</button>
            </form>
            
             
           
          </div>
        </div>
    
      </div>
    </div>
    
          </div>
        </div>
    

        
    
     


       
    )
}

export default Login;