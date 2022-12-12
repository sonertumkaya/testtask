import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {UserPMContext} from '../../context/UserPMContext';
import  '../../Pages/Struktur/struktur.css';
import PMa from './UPM';
import AddPMForm from './AddPMForm';
import Pagination from './Pagination';
var XLSX = require("xlsx");
const PMList = (props) => {

    const {sortedPM} = useContext(UserPMContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () =>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [PMPerPage] = useState(10)
    
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
    }, [sortedPM])

  

    const indexOfLastPM = currentPage * PMPerPage;
    const indexOfFirstPM = indexOfLastPM - PMPerPage;
    const currentPM = sortedPM.slice(indexOfFirstPM, indexOfLastPM);
    const totalPagesNum = Math.ceil(sortedPM.length / PMPerPage);

    const handleOnExport =() => {
        var tbl = document.getElementById("pm");
const wb = XLSX.utils.table_to_book(tbl);
XLSX.writeFile(wb, "PM.xlsx");
       }
        
    return (
    <>
    
    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="mb-0"> </h5>
                     <div> <Button onClick={handleShow} type="button" className="btn btn-outline-primary" data-bs-toggle="modal" >
                     <i className="fa fa-plus" ></i>
              </Button>
              <span>    </span>
             <Button
                type="button" className="btn btn-outline-primary"
                onClick={handleOnExport}
            >
              <i className="fa fa-file-excel-o" ></i>
            </Button></div>
            
                    </div>

    <Alert show={showAlert} variant="success">
    PM Siyahısı Uğurla Yeniləndi!
    </Alert>

    <table className="table table-striped table-hover" id="pm">
        <thead>
            <tr>
                <th>Id</th>
                <th>PM</th>
                
                <th>Əməliyyatlar</th>
            </tr>
        </thead>
        <tbody>

                {
                  currentPM.map(PM => (
                      <tr key={PM.id}>
                        <PMa PM={PM} />
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>

    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentPM ={currentPM}
                sortedPM = {sortedPM} />

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
            PM əlavə edin
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddPMForm baslik4={props.baslik3} />
        </Modal.Body>
        <Modal.Footer>
                
        </Modal.Footer>
    </Modal>
    </>
    )
}


export default PMList;