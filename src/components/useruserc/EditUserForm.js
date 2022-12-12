import { Form, Button } from "react-bootstrap"
import  '../../Pages/Struktur/struktur.css';
import {UsersContext} from '../../context/UserUContext';
import {useContext, useState} from 'react';

const EditUserForm = ({theUser}) =>{

    const id = theUser.id;

    const [uuser, setName] = useState(theUser.user);
     


    const {updateUser} = useContext(UsersContext);

   

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(id, uuser)
    }
    

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <div className='mb-2'>
                <Form.Control
                    type="text"
                    placeholder="Ad *"
                    name="uuser"
                    value={uuser}
                    onChange={(e)=> setName(e.target.value)}
                    required
                />
                
                </div>
                <div className='mb-2'>
                <Form.Control
                    type="text"
                    placeholder="Soyad *"
                    name="uuser"
                    value={uuser}
                    onChange={(e)=> setName(e.target.value)}
                    required
                /> </div><div className='mb-2'>
                <Form.Control
                    type="text"
                    placeholder="Tel *"
                    name="uuser"
                    value={uuser}
                    onChange={(e)=> setName(e.target.value)}
                    required
                /></div>

               <div className='mb-2'>  <Form.Control

                    type="text"
                    placeholder="Mail *"
                    name="uuser"
                    value={uuser}
                    onChange={(e)=> setName(e.target.value)}
                    required
                />
                
                </div> 
            </Form.Group>
             
             
              <div className='mb-2'>
            <Button  type="submit" block className="btn btn-primary">
                Redakte User
            </Button></div>
        </Form>

     )
}

export default EditUserForm;