import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {UserBildirisContext} from '../../context/UserBildirisContext';
import  '../../Pages/Struktur/struktur.css';
import Bildirisa from './UBildiris';
 
import Pagination from './Pagination';
var XLSX = require("xlsx");
const BildirisList = (props) => {

    const {sortedBildiris} = useContext(UserBildirisContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () =>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [BildirisPerPage] = useState(10)
    
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
    }, [sortedBildiris])

  

    const indexOfLastBildiris = currentPage * BildirisPerPage;
    const indexOfFirstBildiris = indexOfLastBildiris - BildirisPerPage;
    const currentBildiris = sortedBildiris.slice(indexOfFirstBildiris, indexOfLastBildiris);
    const totalPagesNum = Math.ceil(sortedBildiris.length / BildirisPerPage);

    const handleOnExport =() => {
        var tbl = document.getElementById("Bildiris");
const wb = XLSX.utils.table_to_book(tbl);
XLSX.writeFile(wb, "Bildiris.xlsx");
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
    Bildiris Siyahısı Uğurla Yeniləndi!
    </Alert>

    <table className="table table-striped table-hover" id="Bildiris">
        <thead>
            <tr>
                <th>Id</th>
                <th>Bildiris</th>
                
                <th>Əməliyyatlar</th>
            </tr>
        </thead>
        <tbody>

                {
                  currentBildiris.map(Bildiris => (
                      <tr key={Bildiris.id}>
                        <Bildirisa Bildiris={Bildiris} />
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>

    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentBildiris ={currentBildiris}
                sortedBildiris = {sortedBildiris} />
 
    </>
    )
}


export default BildirisList;