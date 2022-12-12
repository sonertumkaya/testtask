import {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../../context/UserContext';
import './login.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './fontawesome.min.css';
import logo from './logo.png';
const Register = () => {
    const {registerUser, wait} = useContext(UserContext);
    const [errMsg, setErrMsg] = useState(false);
    
    const [successMsg, setSuccessMsg] = useState(false);
    const [formData, setFormData] = useState({
        name:'',
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
            setSuccessMsg(false);
            setErrMsg('Bütün tələb olunan sahələri doldurun!');
            return;
        }

        const data = await registerUser(formData);
        if(data.success){
            e.target.reset();
            setSuccessMsg('Siz uğurla qeydiyyatdan keçmisiniz.');
            window.location.href = "/login" ;

            setErrMsg(false);
        }
        else if(!data.success && data.message){
            setSuccessMsg(false);
            setErrMsg(data.message);
        }
        
    }

    return (
        <div className="set" >
           
        <div className='wrap-login100 '> 
             <div className="myform">
          <span className='login100-form-logo'> <img src={logo} alt=""/> </span><span className='login100-form-title p-b-34 p-t-27'> <h2>Qeydiyyatdan keçin</h2></span>
            <form onSubmit={submitForm}>
                <label htmlFor="name" className='texta'><h6>Ad:</h6></label>
                <input type="text" name="name" onChange={onChangeInput} placeholder="Adınız" id="name" value={formData.name} required />
                <label htmlFor="email" className='texta'><h6>E-poçt:</h6></label>
                <input type="email" name="email" onChange={onChangeInput} placeholder="E-poçtunuz" id="email" value={formData.email} required />
                <label htmlFor="password" className='texta'><h6>Parol:</h6></label>
                <input type="password" name="password" onChange={onChangeInput} placeholder="Yeni şifrə" id="password" value={formData.password} required />
                {successMsg && <div className="success-msg">{successMsg}</div>}
                {errMsg && <div className="err-msg">{errMsg}</div>}
                <button type="submit" disabled={wait}>Qeydiyyat</button>
                <div className="bottom-link"><Link to="/login" className='texta'>Daxil Ol</Link></div>
            </form>
            </div></div></div>
    )
}

export default Register;
