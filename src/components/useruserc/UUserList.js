import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {UsersContext} from '../../context/UserUContext';
import  '../../Pages/Struktur/struktur.css';
import Usera from './UUser';
import AddUserForm from './AddUserForm';
import Pagination from './Pagination';
import {Link} from 'react-router-dom'
var XLSX = require("xlsx");
const UserList = (props) => {

    const {sortedUsers} = useContext(UsersContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
   // const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () =>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [UserPerPage] = useState(10)
    
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
    }, [sortedUsers])

    const handleOnExport =() => {
        var tbl = document.getElementById("usersexp");
const wb = XLSX.utils.table_to_book(tbl);
XLSX.writeFile(wb, "İstifadəçilər.xlsx");
       }
  

    const indexOfLastUser = currentPage * UserPerPage;
    const indexOfFirstUser = indexOfLastUser - UserPerPage;
    const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPagesNum = Math.ceil(sortedUsers.length / UserPerPage);

   
        
    return (
    <>
    
    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="mb-0"> </h5>
                     <div> <Link to="/userform">    <Button onClick='usersform' type="button" className="btn btn-outline-primary" data-bs-toggle="modal" >
                     <i className="fa fa-plus" ></i> 
              </Button></Link><span>    </span>
              <Button
                type="button" className="btn btn-outline-primary"
                onClick={handleOnExport}
            >
              <i className="fa fa-file-excel-o" ></i>
            </Button>
            </div>    </div>

    <Alert show={showAlert} variant="success">
    İstifadəçi Siyahısı Uğurla Yeniləndi!
    </Alert>

    <table className="table table-striped table-hover" id="usersexp">
        <thead>
            <tr>
                <th>Id</th>
                <th>Ad</th>
                <th>Familiya</th>
                <th>Struktur</th>
                <th>E-poçt</th>
                <th>Telefon nömrəsi</th>
                <th>Əməliyyatlar</th>
            </tr>
        </thead>
        <tbody>

                {
                  currentUsers.map(User => (
                      <tr key={User.id}>
                        <Usera User={User} />
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>

    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentUsers ={currentUsers}
                sortedUsers = {sortedUsers} />

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
            Kullanici əlavə edin
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddUserForm baslik4={props.baslik3} />
        </Modal.Body>
        <Modal.Footer>
                
        </Modal.Footer>
    </Modal>
    </>
    )
}


export default UserList;