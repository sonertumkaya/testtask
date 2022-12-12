import { Form, Button } from "react-bootstrap"
import  '../../Pages/Struktur/struktur.css';
import {UserPMContext} from '../../context/UserPMContext';
import {useContext, useState} from 'react';

const EditPMForm = ({thePM}) =>{

    const id = thePM.id;

    const [upma, setName] = useState(thePM.pm);
     


    const {updatePM} = useContext(UserPMContext);

   

    const handleSubmit = (e) => {
        e.preventDefault();
     //   alert (upma)
        updatePM(id, upma)
        
    }
    

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <div className='mb-2'>
                <Form.Control
                    type="text"
                    placeholder="PM *"
                    name="upma"
                    value={upma}
                    onChange={(e)=> setName(e.target.value)}
                    required
                /></div>
            </Form.Group>
             
             
              <div className='mb-2'>
            <Button  type="submit" block className="btn btn-primary">
                Redakte PM
            </Button></div>
        </Form>

     )
}

export default EditPMForm;