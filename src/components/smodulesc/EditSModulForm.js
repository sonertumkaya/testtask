import { Form, Button } from "react-bootstrap"
import  '../../Pages/Struktur/struktur.css';
import {UserSModulContext} from '../../context/UserSModulContext';
import {useContext, useEffect, useState} from 'react';
import axios from "axios";

const EditSModulForm = ({theModul}) =>{

    const id = theModul.id;

    const [usmodul, setName] = useState(theModul.modul);
    
    const [umodul1, setName1] = useState(theModul.sid);

    const {updateModul} = useContext(UserSModulContext);

    const [seldata, setSelec] = useState([]);

   const persons = () =>
   { axios.get(`https://asut.az/tax1/readmodul.php`).then(res => {
   console.log(res) ; 
   const personsda = res.data;
   setSelec (personsda)
    });
}
useEffect (() => persons(),[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        updateModul(id, usmodul,umodul1)
    }
    

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <div className='mb-2'>Alt Modul
                <Form.Control
                    type="text"
                    placeholder="Modul *"
                    name="usmodul"
                    value={usmodul}
                    onChange={(e)=> setName(e.target.value)}
                    required
                /></div>

<div className='mb-2'>Modul
 <select id="defaultSelect" className="form-select" name="umodul1" value={umodul1}
                onChange={(e)=> setName1(e.target.value)}>
                       <option></option>
                       {seldata.map(seldatas => <option key={seldatas.id} value={seldatas.id}>{seldatas.modul}</option>)}</select> </div>
            </Form.Group>
             
             
              <div className='mb-2'>
            <Button  type="submit" block className="btn btn-primary">
                Redakte Alt Modul
            </Button></div>
        </Form>

     )
}

export default EditSModulForm;