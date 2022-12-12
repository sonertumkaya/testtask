import { Form, Button } from "react-bootstrap"
import * as React from 'react';
import {UserRoleContext} from '../../context/UserRoleContext';
import {useContext, useState} from 'react';



const AddRoleForm = (props) =>{
   
    
  
    
   

    
    const {addRole} = useContext(UserRoleContext);

    const [newRole, setNewRole] = useState({
        urole:"",username:""
    });

    const [newRole2, setNewRole2] = useState({
       dashboard:"",yform:"",tapsirik:"",struktur:"",users:"",moduls:""
    });

    const onInputChange = (e) => {
        
        setNewRole({...newRole,[e.target.name]: e.target.value})
    }


    const onInputChange22 = (e) => {
     //   alert(e.target.name + ":" + e.target.checked)
        setNewRole2({...newRole2,[e.target.name]: e.target.checked})
    }

   // const onInputChange22 = (e) => {
        
      //  alert(e.target.checked)
        
   // }
        
   const  username=props.baslik4;
 
    const {urole} = newRole;
    const {dashboard,yform,tapsirik,struktur,users,moduls} = newRole2;

    const handleSubmit = (e) => {
        
        e.preventDefault();
        addRole(urole,dashboard,yform,tapsirik,struktur,users,moduls,username);
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


 <div className='mb-2'>
  
 
 <Form.Check 
        type="switch"
        id="dashboard"
        name="dashboard"
        label="Dashboard"
        onChange = { (e) => onInputChange22(e)}
         
      />
      
      </div>

      <div className='mb-2'>
  
 
  <Form.Check 
         type="switch"
         id="yform"
         name="yform"
         label="Yeni Tapşırıq Forması"
         onChange = { (e) => onInputChange22(e)}
          
       />
       
       </div>

       <div className='mb-2'>
  
 
  <Form.Check 
         type="switch"
         id="tapsirik"
         name="tapsirik"
         label="Tapşırıqlar"
         onChange = { (e) => onInputChange22(e)}
          
       />
       
       </div>


       <div className='mb-2'>
  
 
  <Form.Check 
         type="switch"
         id="struktur"
         name="struktur"
         label="Struktur"
         onChange = { (e) => onInputChange22(e)}
          
       />
       
       </div>


       <div className='mb-2'>
  
 
  <Form.Check 
         type="switch"
         id="users"
         name="users"
         label="İstifadəçilər"
         onChange = { (e) => onInputChange22(e)}
          
       />
       
       </div>

       <div className='mb-2'>
  
 
  <Form.Check 
         type="switch"
         id="moduls"
         name="moduls"
         label="Moduller"
         onChange = { (e) => onInputChange22(e)}
          
       />
       
       </div>

             </Form.Group>
             
            
       
            
            <Button  type="submit" >
            ƏLAVƏ ET

            </Button>
        </Form>

     )
}

export default AddRoleForm;