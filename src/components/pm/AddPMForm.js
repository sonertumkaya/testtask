import { Form, Button } from "react-bootstrap"
import * as React from 'react';
import {UserPMContext} from '../../context/UserPMContext';
import {useContext, useState} from 'react';
 


const AddPMForm = (props) =>{
    
    const {addPM} = useContext(UserPMContext);

    const [newPM, setNewPM] = useState({
        upm:"",username:"",
    });

    const onInputChange = (e) => {
        
        setNewPM({...newPM,[e.target.name]: e.target.value})
    }

    
        
   const  username=props.baslik4;
 
    const {upm} = newPM;

    const handleSubmit = (e) => {
        
        e.preventDefault();
        addPM(upm,username);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <div className='mb-2'>  <Form.Control
                    type="text"
                    placeholder="PM Ad *"
                    name="upm"
                    id="upm"
                    value={upm}
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

export default AddPMForm;