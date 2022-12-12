import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {UserRoleContext} from '../../context/UserRoleContext';
import  '../../Pages/Struktur/struktur.css';
import Rolesa from './URole';
import AddRoleForm from './AddRoleForm';
import Pagination from './Pagination';
var XLSX = require("xlsx");
const RoleList = (props) => {

    const {sortedRoles} = useContext(UserRoleContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () =>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [RolesPerPage] = useState(10)
    
    const handleShowAlert = () => {
          
          setShowAlert(true);
        setTimeout(()=> {
            setShowAlert(false);
        }, 9000)
    }

    useEffect(() => {
        handleClose();

        return () => {
            handleShowAlert();
        }
    }, [sortedRoles])

  

    const indexOfLastRole = currentPage * RolesPerPage;
    const indexOfFirstRole = indexOfLastRole - RolesPerPage;
    const currentRoles = sortedRoles.slice(indexOfFirstRole, indexOfLastRole);
    const totalPagesNum = Math.ceil(sortedRoles.length / RolesPerPage);

    const handleOnExport =() => {
        var tbl = document.getElementById("submodul");
const wb = XLSX.utils.table_to_book(tbl);
XLSX.writeFile(wb, "Alt Moduller.xlsx");
       }
        
    return (
    <>
    
    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="mb-0"> </h5>
                      <div><Button onClick={handleShow} type="button" className="btn btn-outline-primary" data-bs-toggle="modal" >
                      <i className="fa fa-plus" ></i> 
              </Button><span>    </span>
             <Button
                type="button" className="btn btn-outline-primary"
                onClick={handleOnExport}
            >
              <i className="fa fa-file-excel-o" ></i>
            </Button></div>
            
                    </div>

    <Alert show={showAlert} variant="success">
    Rol Siyahısı Uğurla Yeniləndi!
    </Alert>

    <table className="table table-striped table-hover" id="submodul">
        <thead>
            <tr>
                <th>Id</th>
                <th>Rol</th>
                
                <th>Əməliyyatlar</th>
            </tr>
        </thead>
        <tbody>

                {
                  currentRoles.map(Role => (
                      <tr key={Role.id}>
                        <Rolesa Role={Role} />
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>

    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentRoles ={currentRoles}
                sortedRoles = {sortedRoles} />

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
            Rol əlavə edin
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddRoleForm baslik4={props.baslik3} />
        </Modal.Body>
        <Modal.Footer>
                
        </Modal.Footer>
    </Modal>
    </>
    )
}


export default RoleList;