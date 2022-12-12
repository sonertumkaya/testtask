import { Form, Button } from "react-bootstrap"
import  '../Pages/Struktur/struktur.css';
import {StrukturContext} from '../context/StrukturContext';
import {useContext, useState} from 'react';

const EditForm = ({theStruktur}) =>{

    const id = theStruktur.id;

    const [struktur, setName] = useState(theStruktur.struktur);
     


    const {updateStruktur} = useContext(StrukturContext);

   

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStruktur(id, struktur)
    }
    

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <div className='mb-2'>
                <Form.Control
                    type="text"
                    placeholder="Struktur *"
                    name="struktur"
                    value={struktur}
                    onChange={(e)=> setName(e.target.value)}
                    required
                /></div>
            </Form.Group>
             
             
              <div className='mb-2'>
            <Button  type="submit" block className="btn btn-primary">
                Redakte Struktur
            </Button></div>
        </Form>

     )
}

export default EditForm;