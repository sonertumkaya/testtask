import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {UserSModulContext} from '../../context/UserSModulContext';
import  '../../Pages/Struktur/struktur.css';
import Modulsa from './USModul';
import AddModulForm from './AddSModulForm';
import Pagination from './Pagination';
var XLSX = require("xlsx");
const SModulList = (props) => {

    const {sortedSModuls} = useContext(UserSModulContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () =>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [SModulPerPage] = useState(10)
    
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
    }, [sortedSModuls])

  

    const indexOfLastSModul = currentPage * SModulPerPage;
    const indexOfFirstSModul = indexOfLastSModul - SModulPerPage;
    const currentSModuls = sortedSModuls.slice(indexOfFirstSModul, indexOfLastSModul);
    const totalPagesNum = Math.ceil(sortedSModuls.length / SModulPerPage);

    const handleOnExport =() => {
        var tbl = document.getElementById("submodul");
const wb = XLSX.utils.table_to_book(tbl);
XLSX.writeFile(wb, "Alt Moduller.xlsx");
       }
        
    return (
    <>
    
    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="mb-0"> </h5>
                    <div>  <Button onClick={handleShow} type="button" className="btn btn-outline-primary" data-bs-toggle="modal" >
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
    Alt Modul Siyahısı Uğurla Yeniləndi!
    </Alert>

    <table className="table table-striped table-hover" id="submodul">
        <thead>
            <tr>
                <th>Id</th>
                <th>Alt Modul Ad</th>
                <th>Modul</th>
                <th>Əməliyyatlar</th>
            </tr>
        </thead>
        <tbody>

                {
                  currentSModuls.map(SModul => (
                      <tr key={SModul.id}>
                        <Modulsa SModul={SModul} />
                      
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>

    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentSModuls ={currentSModuls}
                sortedSModuls = {sortedSModuls} />

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


export default SModulList;