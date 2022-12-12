import {useContext, useState, useEffect} from 'react';
import {UserBildirisContext} from '../../context/UserBildirisContext';
import { Modal,  OverlayTrigger, Tooltip } from 'react-bootstrap';
 
import  '../../Pages/Struktur/struktur.css';


const Bildiris = ({Bildiris}) => {

    const {deleteBildiris} = useContext(UserBildirisContext)

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [Bildiris])

    return (
        <>
            <td>{Bildiris.id}</td>
            <td>{Bildiris.Bildiris}</td>
            
            <td>
                 
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Sil
                        </Tooltip>
                    }>
                    <button onClick={() => deleteBildiris(Bildiris.id)}  className="btn text-danger btn-act" data-toggle="modal"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-50 feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
                </OverlayTrigger>
                
                
            </td>

            
        </>
    )
}

export default Bildiris;