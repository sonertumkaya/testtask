import { Form, Button } from "react-bootstrap"
import * as React from 'react';
import {UserSModulContext} from '../../context/UserSModulContext';
import {useContext, useState} from 'react';
 
import MList from "./MList";

const AddSModulForm = (props) =>{
    
    const {addModul} = useContext(UserSModulContext);

    const [newModul, setNewModul] = useState({
        usmodul:"",username:"",umodul1:""
    });

    const onInputChange = (e) => {
        
        setNewModul({...newModul,[e.target.name]: e.target.value})
    }

    
        
   const  username=props.baslik4;
 
    const {usmodul,umodul1} = newModul;

    const handleSubmit = (e) => {
        
        e.preventDefault();
        addModul(usmodul,username,umodul1);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <div className='mb-2'>  <Form.Control
                    type="text"
                    placeholder="Modul Ad *"
                    name="usmodul"
                    id="usmodul"
                    value={usmodul}
                    onChange = { (e) => onInputChange(e)}
                    required
                />

 </div>
 <div className='mb-2'>
 <select id="defaultSelect" className="form-select" name="umodul1"    value={umodul1}
                onChange = { (e) => onInputChange(e)}>
                       <option></option>
                          <MList /></select> </div>
 
   
             </Form.Group>
             
            
            
            
            <Button  type="submit" >
            ƏLAVƏ ET

            </Button>
        </Form>

     )
}

export default AddSModulForm;