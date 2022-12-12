import { Form, Button } from "react-bootstrap"
import  '../../Pages/Struktur/struktur.css';
import {UserModulContext} from '../../context/UserModulContext';
import {useContext, useState} from 'react';

const EditModulForm = ({theModul}) =>{

    const id = theModul.id;

    const [umodula, setName] = useState(theModul.modul);
     


    const {updateModul} = useContext(UserModulContext);

   

    const handleSubmit = (e) => {
        e.preventDefault();
     //   alert (umodula)
        updateModul(id, umodula)
        
    }
    

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <div className='mb-2'>
                <Form.Control
                    type="text"
                    placeholder="Modul *"
                    name="umodula"
                    value={umodula}
                    onChange={(e)=> setName(e.target.value)}
                    required
                /></div>
            </Form.Group>
             
             
              <div className='mb-2'>
            <Button  type="submit" block className="btn btn-primary">
                Redakte Modul
            </Button></div>
        </Form>

     )
}

export default EditModulForm;