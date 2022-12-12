import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {UserModulContext} from '../../context/UserModulContext';
import  '../../Pages/Struktur/struktur.css';
import Modulsa from './UModul';
import AddModulForm from './AddModulForm';
import Pagination from './Pagination';
var XLSX = require("xlsx");
const ModulList = (props) => {

    const {sortedModuls} = useContext(UserModulContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () =>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [ModulPerPage] = useState(10)
    
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
    }, [sortedModuls])

  

    const indexOfLastModul = currentPage * ModulPerPage;
    const indexOfFirstModul = indexOfLastModul - ModulPerPage;
    const currentModuls = sortedModuls.slice(indexOfFirstModul, indexOfLastModul);
    const totalPagesNum = Math.ceil(sortedModuls.length / ModulPerPage);

    const handleOnExport =() => {
        var tbl = document.getElementById("modul");
const wb = XLSX.utils.table_to_book(tbl);
XLSX.writeFile(wb, "Moduller.xlsx");
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
    Modul Siyahısı Uğurla Yeniləndi!
    </Alert>

    <table className="table table-striped table-hover" id="modul">
        <thead>
            <tr>
                <th>Id</th>
                <th>Modul</th>
                
                <th>Əməliyyatlar</th>
            </tr>
        </thead>
        <tbody>

                {
                  currentModuls.map(Modul => (
                      <tr key={Modul.id}>
                        <Modulsa Modul={Modul} />
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>

    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentModuls ={currentModuls}
                sortedModuls = {sortedModuls} />

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
            Modul əlavə edin
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddModulForm baslik4={props.baslik3} />
        </Modal.Body>
        <Modal.Footer>
                
        </Modal.Footer>
    </Modal>
    </>
    )
}


export default ModulList;