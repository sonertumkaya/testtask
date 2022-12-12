import {useContext, useState, useEffect} from 'react';
import {UserMContext} from '../../context/UserMContext';
import { Modal,  OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditMForm from './EditMForm'
import  '../../Pages/Struktur/struktur.css';


const M = ({M}) => {

    const {readM} = useContext(UserMContext)

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [M])

    return (
        <>
            <td>{M.id}</td>
            <td>{M.message}</td>
            <td>{M.modul}</td>
            
            <td>
                 
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Sil
                        </Tooltip>
                    }>
                    <button onClick={() => readM(M.id)}  className="btn text-danger btn-act" data-toggle="modal"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-50 feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
                </OverlayTrigger>
                
                
            </td>

           
        </>
    )
}

export default M;