import { Form, Button } from "react-bootstrap"
import  '../../Pages/Struktur/struktur.css';
import {UserRoleContext} from '../../context/UserRoleContext';
import {useContext, useState} from 'react';

const EditRoleForm = ({theRole}) =>{

    const id = theRole.id;

    const [urole, setName] = useState(theRole.role);
     


    const {updateRole} = useContext(UserRoleContext);

   

    const handleSubmit = (e) => {
        e.preventDefault();
        updateRole(id, urole)
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
            </Form.Group>
             
             
              <div className='mb-2'>
            <Button  type="submit" block className="btn btn-primary">
                Redakte Role
            </Button></div>
        </Form>

     )
}

export default EditRoleForm;