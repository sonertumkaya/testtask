import { Form, Button } from "react-bootstrap"
import * as React from 'react';
import {UsersContext} from '../../context/UserUContext';
import {useContext, useState} from 'react';
 


const AddUserForm = (props) =>{
    
    const {addUser} = useContext(UsersContext);

    const [newUser, setNewUser] = useState({
        uuser:"",username:"",
    });

    const onInputChange = (e) => {
        
        setNewUser({...newUser,[e.target.name]: e.target.value})
    }

    
        
   const  username=props.baslik4;
 
    const {uuser} = newUser;

    const handleSubmit = (e) => {
        
        e.preventDefault();
        addUser(uuser,username);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <div className='mb-2'>  <Form.Control
                    type="text"
                    placeholder="User Ad *"
                    name="uuser"
                    id="uuser"
                    value={uuser}
                    onChange = { (e) => onInputChange(e)}
                    required
                />

 </div>



 
 <label className="form-check-label mb-50" htmlFor="customSwitch3">IdarePaneli</label>
 
   
             </Form.Group>
             
            
            
            
            <Button  type="submit" >
            ƏLAVƏ ET

            </Button>
        </Form>

     )
}

export default AddUserForm;