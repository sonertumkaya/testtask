import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {UserMContext} from '../../context/UserMContext';
import  '../../Pages/Struktur/struktur.css';
import Ma from './UM';
import AddMForm from './AddMForm';
import Pagination from './Pagination';
var XLSX = require("xlsx");
const MList = (props) => {

    const {sortedM} = useContext(UserMContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () =>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [MPerPage] = useState(10)
    
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
    }, [sortedM])

  

    const indexOfLastM = currentPage * MPerPage;
    const indexOfFirstM = indexOfLastM - MPerPage;
    const currentM = sortedM.slice(indexOfFirstM, indexOfLastM);
    const totalPagesNum = Math.ceil(sortedM.length / MPerPage);

    const handleOnExport =() => {
        var tbl = document.getElementById("M");
const wb = XLSX.utils.table_to_book(tbl);
XLSX.writeFile(wb, "M.xlsx");
       }
        
    return (
    <>
    
    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="mb-0"> </h5>
                   
            
                    </div>

    <Alert show={showAlert} variant="success">
    Bildiris Siyahısı Uğurla Yeniləndi!
    </Alert>

    <table className="table table-striped table-hover" id="M">
        <thead>
            <tr>
                <th>Id</th>
                <th>Bildiris</th>
                <th>Modul</th>
                <th>Əməliyyatlar</th>
            </tr>
        </thead>
        <tbody>

                {
                  currentM.map(M => (
                      <tr key={M.id}>
                        <Ma M={M} />
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>

    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentM ={currentM}
                sortedM = {sortedM} />

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
            M əlavə edin
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddMForm baslik4={props.baslik3} />
        </Modal.Body>
        <Modal.Footer>
                
        </Modal.Footer>
    </Modal>
    </>
    )
}


export default MList;