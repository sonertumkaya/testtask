import { Form, Button } from "react-bootstrap"
import  '../../Pages/Struktur/struktur.css';
import {UserRoleContext} from '../../context/UserRoleContext';
import {useContext, useState} from 'react';

const EditRoleForm = ({theRole}) =>{

   
    const id = theRole.id;

    const [urole, setName] = useState(theRole.role);
     
    
    const [newRole2, setNewRole2] = useState({
      dashboard:theRole.y1,yform:theRole.y2,tapsirik:theRole.y3,struktur:theRole.y4,users:theRole.y5,moduls:theRole.y6,iplan:theRole.y7,donay:theRole.y8
   });
    const {updateRole} = useContext(UserRoleContext);
    const {dashboard,yform,tapsirik,struktur,users,moduls,iplan,donay} = newRole2;
    const onInputChange22 = (e) => {
      //   alert(e.target.name + ":" + e.target.checked)
      
         setNewRole2({...newRole2,[e.target.name]: e.target.checked})
     }

    const handleSubmit = (e) => {
        e.preventDefault();
      //  alert(yform)
      //  alert(tapsirik)
    //  alert(yform)
        updateRole(id, urole,dashboard,yform,tapsirik,struktur,users,moduls,iplan,donay)
    }
     

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <div className='mb-2'>
                <Form.Control
                    type="text"
                    placeholder="Role *"
                    name="urole"
                    value={urole}
                    onChange={(e)=> setName(e.target.value)}
                    required
                /></div>
            <div className='mb-2'>
  
 
  <Form.Check 
         type="switch"
         id="dashboard"
         name="dashboard"
         label="Dashboard"
         onChange= { (e) => onInputChange22(e)}
         value={theRole.y1 >0 && "true"}
         defaultChecked={theRole.y1 >0 && "true"}
       />
       
       </div>
 
       <div className='mb-2'>
   
  
   <Form.Check 
          type="switch"
          id="yform"
          name="yform"
          label="Yeni Tapşırıq Forması"
          onChange= { (e) => onInputChange22(e)}
          value={theRole.y2 >0 && "true"}
          defaultChecked={theRole.y2 >0 && "true"}
           
        />
        
        </div>
 
        <div className='mb-2'>
   
  
   <Form.Check 
          type="switch"
          id="tapsirik"
          name="tapsirik"
          label="Tapşırıqlar"
          onChange= { (e) => onInputChange22(e)}
         value={theRole.y3 >0 && "true"}
         defaultChecked={theRole.y3 >0 && "true"}
        />
        
        </div>
 
 
        <div className='mb-2'>
   
  
   <Form.Check 
          type="switch"
          id="struktur"
          name="struktur"
          label="Struktur"
          onChange= { (e) => onInputChange22(e)}
          value={theRole.y4 >0 && "true"}
          defaultChecked={theRole.y4 >0 && "true"}
        />
        
        </div>
 
 
        <div className='mb-2'>
   
  
   <Form.Check 
          type="switch"
          id="users"
          name="users"
          label="İstifadəçilər"
          onChange= { (e) => onInputChange22(e)}
         value={theRole.y5 >0 && "true"}
         defaultChecked={theRole.y5 >0 && "true"}
          
        />
        
        </div>
 
        <div className='mb-2'>
   
  
   <Form.Check 
          type="switch"
          id="moduls"
          name="moduls"
          label="Moduller"
          onChange= { (e) => onInputChange22(e)}
          value={theRole.y6 >0 && "true"}
          defaultChecked={theRole.y6 >0 && "true"}
         
        />

<Form.Check 
          type="switch"
          id="iplan"
          name="iplan"
          label="İcra planı"
          onChange= { (e) => onInputChange22(e)}
          value={theRole.y6 >0 && "true"}
          defaultChecked={theRole.y6 >0 && "true"}
         
        />

<Form.Check 
          type="switch"
          id="donay"
          name="donay"
          label="RVİBİ onay"
          onChange= { (e) => onInputChange22(e)}
          value={theRole.y6 >0 && "true"}
          defaultChecked={theRole.y6 >0 && "true"}
         
        />
        
        </div>
 
              </Form.Group>
              
 
             
             
              <div className='mb-2'>
            <Button  type="submit" block className="btn btn-primary">
                Redakte Role
            </Button></div>
        </Form>

     )
}

export default EditRoleForm;