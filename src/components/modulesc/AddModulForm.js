import { Form, Button } from "react-bootstrap"
import * as React from 'react';
import {UserModulContext} from '../../context/UserModulContext';
import {useContext, useState} from 'react';
 


const AddModulForm = (props) =>{
    
    const {addModul} = useContext(UserModulContext);

    const [newModul, setNewModul] = useState({
        umodul:"",username:"",
    });

    const onInputChange = (e) => {
        
        setNewModul({...newModul,[e.target.name]: e.target.value})
    }

    
        
   const  username=props.baslik4;
 
    const {umodul} = newModul;

    const handleSubmit = (e) => {
        
        e.preventDefault();
        addModul(umodul,username);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <div className='mb-2'>  <Form.Control
                    type="text"
                    placeholder="Modul Ad *"
                    name="umodul"
                    id="umodul"
                    value={umodul}
                    onChange = { (e) => onInputChange(e)}
                    required
                />

 </div>
 
   
             </Form.Group>
             
            
            
            
            <Button  type="submit" >
            ƏLAVƏ ET

            </Button>
        </Form>

     )
}

export default AddModulForm;