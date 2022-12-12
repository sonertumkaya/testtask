import { Form, Button } from "react-bootstrap"

import {StrukturContext} from '../context/StrukturContext';
import {useContext, useState} from 'react';



const AddForm = (props) =>{
    
    const {addStruktur} = useContext(StrukturContext);

    const [newStruktur, setNewStruktur] = useState({
        struktur:"",username:"",
    });

    const onInputChange = (e) => {
        
        setNewStruktur({...newStruktur,[e.target.name]: e.target.value})
    }

    
        
   const  username=props.baslik4;
 
    const {struktur} = newStruktur;

    const handleSubmit = (e) => {
        
        e.preventDefault();
        addStruktur(struktur,username);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <div className='mb-2'>  <Form.Control
                    type="text"
                    placeholder="Struktur *"
                    name="struktur"
                    id="struktur"
                    value={struktur}
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

export default AddForm;