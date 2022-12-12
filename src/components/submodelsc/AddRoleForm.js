import { Form, Button } from "react-bootstrap"
import * as React from 'react';
import {UserRoleContext} from '../../context/UserRoleContext';
import {useContext, useState} from 'react';
 


const AddRoleForm = (props) =>{
    
    const {addRole} = useContext(UserRoleContext);

    const [newRole, setNewRole] = useState({
        urole:"",username:"",
    });

    const onInputChange = (e) => {
        
        setNewRole({...newRole,[e.target.name]: e.target.value})
    }

    
        
   const  username=props.baslik4;
 
    const {urole} = newRole;

    const handleSubmit = (e) => {
        
        e.preventDefault();
        addRole(urole,username);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <div className='mb-2'>  <Form.Control
                    type="text"
                    placeholder="Role Ad *"
                    name="urole"
                    id="urole"
                    value={urole}
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

export default AddRoleForm;