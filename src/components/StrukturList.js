import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {StrukturContext} from '../context/StrukturContext';
import  '../Pages/Struktur/struktur.css';
import Struktura from './Struktur';
import AddForm from './AddForm';
import Pagination from './Pagination';
var XLSX = require("xlsx");
const StrukturList = (props) => {

    const {sortedStrukturs} = useContext(StrukturContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () =>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [StruktursPerPage] = useState(10)
    
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
    }, [sortedStrukturs])

  

    const indexOfLastStruktur = currentPage * StruktursPerPage;
    const indexOfFirstStruktur = indexOfLastStruktur - StruktursPerPage;
    const currentStrukturs = sortedStrukturs.slice(indexOfFirstStruktur, indexOfLastStruktur);
    const totalPagesNum = Math.ceil(sortedStrukturs.length / StruktursPerPage);

    const handleOnExport =() => {
        var tbl = document.getElementById("struktursexp");
const wb = XLSX.utils.table_to_book(tbl);
XLSX.writeFile(wb, "Struktur.xlsx");
       }
        
    return (
    <>
    
    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="mb-0"> </h5>
                     
                      <div>   <Button onClick={handleShow} type="button" className="btn btn-outline-primary" data-bs-toggle="modal" >
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
    Sruktur Siyahısı Uğurla Yeniləndi!
    </Alert>

    <table className="table table-striped table-hover" id="struktursexp">
        <thead>
            <tr>
                <th>Id</th>
                <th>Struktur</th>
                
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>

                {
                  currentStrukturs.map(Struktur => (
                      <tr key={Struktur.id}>
                        <Struktura Struktur={Struktur} />
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>

    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentStrukturs ={currentStrukturs}
                sortedStrukturs = {sortedStrukturs} />

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
            Struktur əlavə edin
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm baslik4={props.baslik3} />
        </Modal.Body>
        <Modal.Footer>
                
        </Modal.Footer>
    </Modal>
    </>
    )
}


export default StrukturList;