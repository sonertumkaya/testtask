import {useContext, useState, useEffect} from 'react';
import {UserRoleContext} from '../../context/UserRoleContext';
import { Modal,  OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditRoleForm from './EditRoleForm'
import  '../../Pages/Struktur/struktur.css';


const Role = ({Role}) => {

    const {deleteRole} = useContext(UserRoleContext)

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [Role])

    return (
        <>
            <td>{Role.id}</td>
            <td>{Role.role}</td>
            
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Redakte
                        </Tooltip>
                    }>
                    <button onClick={handleShow}  className="btn text-warning btn-act" data-toggle="modal"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-50 feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Sil
                        </Tooltip>
                    }>
                    <button onClick={() => deleteRole(Role.id)}  className="btn text-danger btn-act" data-toggle="modal"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-50 feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
                </OverlayTrigger>
                
                
            </td>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
            Rol redaktə edin
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditRoleForm theRole={Role} />
        </Modal.Body>
        <Modal.Footer>
               
        </Modal.Footer>
    </Modal>
        </>
    )
}

export default Role;