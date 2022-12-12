import React, { useState } from 'react';
import Datatable from './DataTable';
import Navbar from "../../components/headernavbar/Navbar";
import Menu from "../../components/menu/Menu";
import Footer from "../../components/Footer";
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import axios from "axios";

 
function Taskdata(props) {
  
  const [seldata, setSelec] = useState([]);
 

    
   
  const linkb="https://asut.az/tax1/readtask.php?userid=";
   

  
   const persons = () =>
   { axios.get(linkb).then(res => {
   //console.log(res) ; 
   const personsda = res.data;
   setSelec (personsda);
    });
}
useEffect (() => persons(),[]);


  const data = React.useMemo(() => {
    return seldata;
  }, [seldata])


  
  const columns = React.useMemo(
    () => [
      {
        Header: 'SNo',
        Footer: 'SNo',
        accessor: 'id', // accessor is the "key" in the data
      },
      {
        Header: '№',
        Footer: '№',
        accessor: 'no',
      },
      {
        Header: 'Sifarişçi',
        Footer: 'Sifarişçi',
        accessor: 'siparisci',
      },
      {
        Header: 'Prioritet',
        Footer: 'Prioritet',
        accessor: 'oncelik',
      },
      {
        Header: 'DVX Məsul şəxs',
        Footer: 'DVX Məsul şəxs',
        accessor: 'msahs',
      },

      {
        Header: 'Aid olduğu layihə',
        Footer: 'Aid olduğu layihə',
        accessor: 'alayihe',
      },
      {
        Header: 'Aid olduğu modul',
        Footer: 'Aid olduğu modul',
        accessor: 'amodul',
      },
      {
        Header: 'Dəyəri',
        Footer: 'Dəyəri',
        accessor: 'deyeri',
      },
      {
        Header: 'Başlama vaxtı',
        Footer: 'Başlama vaxtı',
        accessor: 'starih',
      },
      {
        Header: 'Bitmə vaxtı',
        Footer: 'Bitmə vaxtı',
        accessor: 'btarih',
      },
      {
        Header: 'Qısa qeyd',
        Footer: 'Qısa qeyd',
        accessor: 'kqeyd',
      },
      {
        Header: 'Ətraflı məlumat',
        Footer: 'Ətraflı məlumat',
        accessor: 'emalumat',
      },
      {
        Header: 'Sənəd',
        Footer: 'Sənəd',
        accessor: 'file',
      },
      {
        Header: 'İstifadəçi',
        Footer: 'İstifadəçi',
        accessor: 'username',
      },

      {
        Header: 'Kayd Tarixi',
        Footer: 'Kayd Tarixi',
        accessor: 'kayittarihi',
      },


      {
        Header: 'Əməliyyatlar',
        accessor: (originalRow, rowIndex) => (
          
              <div className="bookmark-wrapper d-flex align-items-center">
              <ul className="nav navbar-nav align-items-center ms-auto">
                  <li className="nav-item dropdown dropdown-user">
        <Link className="nav-link dropdown-toggle dropdown-user-link" id="dropdown-user26" to="/"   data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div className="user-nav d-sm-flex d-none"><span className="user-name fw-bolder"></span>
    <span className="user-status"> </span></div><span  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-body align-middle mr-25 feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
    </span>
        </Link>   <div className="dropdown-menu dropdown-menu-end " aria-labelledby="dropdown-user" data-bs-popper="none">
          <button className="dropdown-item"   onClick={() => handleEdit(originalRow)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-50 feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
   Redakte</button>
       
       <button  className="dropdown-item"   onClick={() => handleDelete(originalRow)} >
       <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-50 feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                               Sil</button>
        </div>
    </li>
        </ul></div>
        ),
        id: 'action',
        Footer: 'Əməliyyatlar',
      },
    ],
    [],
  )
  const [open,setOpen] = useState(false)
  const styles = {
    popup:{
      display: open ? "block" : "none",
       
    }
  };


  const [editTask, setEditTask] = useState({
    id:'',	no:'',	siparisci:'',	 msahs:''	,alayihe:'',	amodul:'',	deyeri:'',	starih:'',	btarih:'',	kqeyd:'',	emalumat:''	,file:''	

 });
 const [editTaskS, setEditTaskS] = useState({
  	oncelik:''	 

});


 const onInputChangeSelect = (e) => {
  //   alert(e.target.name + ":" + e.target.checked)
  setEditTaskS({...editTaskS,[e.target.name]: e.target.selected})
 }
  const onInputChange22 = (e) => {
    //   alert(e.target.name + ":" + e.target.checked)
    setEditTask({...editTask,[e.target.name]: e.target.onChange})
   }
  const handleEdit = (row) => {
   // console.log(row);
    setOpen(true);
   
    setEditTask({id:row.id,	no:row.no,	siparisci:row.siparisci,	msahs:row.msahs	,alayihe:row.alahiye,	amodul:row.amodul,	deyeri:row.deyeri,	starih:row.starih,	btarih:row.btarih,	kqeyd:row.kqeyd,	emalumat:row.emalumat	,file:row.file	});
    setEditTaskS({oncelik:row.oncelik	});
  }

 
  const handleDelete = (row) => {
   // console.log(row)
  }

   
  return (

    <>
     <Navbar />
    <Menu /> 
    <div className="app-content content ">
      <div className="content-overlay"></div>
      <div className="header-navbar-shadow"></div>
      <div className="content-wrapper container-xxl p-0">
        <div className="content-header row">
       
        <div className="content-body"> 
<section >
  <div className="row match-height">
  <div className="container-fluid py-4">
  <div className="col-xxl">
                  <div className="card mb-4">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="mb-0">Layihə siyahısı</h5>
                     
                    </div>
                    <div className="card-body">
         <div className="table-responsive p-0 pb-2">
        <div className="table-wrapper"> 
      <Datatable data={data} columns={columns} tableBaslik="" />
      </div>
      </div>
    </div>
    </div> </div> </div> </div>   
    
    
    
    
    <div className={open ?  'modal modal-slide-in update-item-sidebar fade show' : 'modal modal-slide-in update-item-sidebar fade'} id="moodalform" style= {styles.popup}>
    <div className="modal-dialog sidebar-lg">
      <div className="modal-content p-0">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{setOpen(false)}}>×</button>
        <div className="modal-header mb-1">
          <h5 className="modal-title">Update Item</h5>
        </div>
        <div className="modal-body flex-grow-1">
          <ul className="nav nav-tabs tabs-line">
            <li className="nav-item">
              <a className="nav-link nav-link-update active" data-bs-toggle="tab" href="#tab-update">
                <i data-feather="edit"></i>
                <span className="align-middle">Update</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-activity" data-bs-toggle="tab" href="#tab-activity">
                <i data-feather="activity"></i>
                <span className="align-middle">Activity</span>
              </a>
            </li>
          </ul>
          <div className="tab-content mt-2">
            <div className="tab-pane tab-pane-update fade show active" id="tab-update" role="tabpanel">
              <form className="update-item-form">
                 
                 
                  <input type="text" id="id" className="form-control" placeholder="Id" name="id" onChange={onInputChange22} value={editTask.id} hidden/>
               
                <div className="mb-1">
                  <label className="form-label" htmlFor="title">No</label>
                  <input type="text" id="no" className="form-control" placeholder="No" name="no" onChange={onInputChange22} value={editTask.no}/>
                </div>
                <div className="mb-1">
                  <label className="form-label" htmlFor="title">Sifarişçi</label>
                  <input type="text" id="siparisci" className="form-control" placeholder="Sifarişçi" name="siparisci" onChange={onInputChange22} value={editTask.siparisci}/>
                </div>
                <div className="mb-1">
                  <label className="form-label" htmlFor="title">Prioritet</label>
                 
                  <select id="defaultSelect" className="form-select" name="oncelik" onChange={onInputChangeSelect} value={editTaskS.oncelik}><option></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">Rəhbərlik</option><option value="4">Qanunvericilik</option></select>
               
                </div>
                <div className="mb-1">
                  <label className="form-label" htmlFor="title">DVX Məsul şəxs</label>
                  <input type="text" id="msahs" className="form-control" placeholder="DVX Məsul şəxs" name="msahs" onChange={onInputChange22} value={editTask.msahs}/>
                </div>
                <div className="mb-1">
                  <label className="form-label" htmlFor="title">Aid olduğu layihə</label>
                  <input type="text" id="alahiye" className="form-control" placeholder="Aid olduğu layihə" name="alahiye" onChange={onInputChange22} value={editTask.alahiye}/>
                </div>
                <div className="mb-1">
                  <label className="form-label" htmlFor="title">Aid olduğu modul</label>
                  <input type="text" id="amodul" className="form-control" placeholder="Aid olduğu modul" name="amodul" onChange={onInputChange22} value={editTask.amodul}/>
                </div>
                <div className="mb-1">
                  <label className="form-label" htmlFor="title">Dəyəri</label>
                  <input type="text" id="deyeri" className="form-control" placeholder="Dəyəri" name="deyeri" onChange={onInputChange22} value={editTask.deyeri}/>
                </div>
                <div className="mb-1">
                  <label className="form-label" htmlFor="due-date">Başlama vaxtı</label>
                  <input type="date"   className="form-control" placeholder="Başlama vaxtı"  id="starih" name="starih" onChange={onInputChange22} value={editTask.starih} />
                </div>
                <div className="mb-1">
                  <label className="form-label" htmlFor="due-date">Bitmə vaxtı</label>
                  <input type="date"   className="form-control" placeholder="Bitmə vaxtı"  id="btarih" name="btarih" onChange={onInputChange22} value={editTask.btarih} />
                </div>
                <div className="mb-1">
                  <label className="form-label" htmlFor="title">Qısa qeyd</label>
                  <input type="text" id="kqeyd" className="form-control" placeholder="Qısa qeyd" name="kqeyd" onChange={onInputChange22} value={editTask.kqeyd}/>
                </div>
                <div className="mb-1">
                  <label className="form-label" htmlFor="title">Ətraflı məlumat</label>
                  <textarea   id="emalumat" className="form-control" placeholder="Ətraflı məlumat" name="emalumat" onChange={onInputChange22} value={editTask.emalumat}></textarea>
                </div>
                <div className="mb-1">
                  <label className="form-label" htmlFor="title">Fayllar</label>
                  {editTask.emalumat}
                </div>
               
                
                 
                <div className="mb-1">
                  <div className="d-flex flex-wrap">
                    <button className="btn btn-primary me-1" data-bs-dismiss="modal">Yadda Saxla</button>
                     
                  </div>
                </div>
              </form>
            </div>
            <div className="tab-pane tab-pane-activity pb-1 fade" id="tab-activity" role="tabpanel">
              <div className="d-flex align-items-start mb-1">
                <div className="avatar bg-light-success my-0 ms-0 me-50">
                  <span className="avatar-content">HJ</span>
                </div>
                <div className="more-info">
                  <p className="mb-0"><span className="fw-bold">Jordan</span> Left the board.</p>
                  <small className="text-muted">Today 11:00 AM</small>
                </div>
              </div>
              <div className="d-flex align-items-start mb-1">
                <div className="avatar my-0 ms-0 me-50">
                  <img src="../../../app-assets/images/portrait/small/avatar-s-6.jpg" alt="Avatar" height="32" />
                </div>
                <div className="more-info">
                  <p className="mb-0">
                    <span className="fw-bold">Dianna</span> mentioned <span className="fw-bold text-primary">@bruce</span> in a
                    comment.
                  </p>
                  <small className="text-muted">Today 10:20 AM</small>
                </div>
              </div>
              <div className="d-flex align-items-start mb-1">
                <div className="avatar my-0 ms-0 me-50">
                  <img src="../../../app-assets/images/portrait/small/avatar-s-2.jpg" alt="Avatar" height="32" />
                </div>
                <div className="more-info">
                  <p className="mb-0">
                    <span className="fw-bold">Martian</span> added moved Charts & Maps task to the done board.
                  </p>
                  <small className="text-muted">Today 10:00 AM</small>
                </div>
              </div>
              <div className="d-flex align-items-start mb-1">
                <div className="avatar my-0 ms-0 me-50">
                  <img src="../../../app-assets/images/portrait/small/avatar-s-1.jpg" alt="Avatar" height="32" />
                </div>
                <div className="more-info">
                  <p className="mb-0"><span className="fw-bold">Barry</span> Commented on App review task.</p>
                  <small className="text-muted">Today 8:32 AM</small>
                </div>
              </div>
              <div className="d-flex align-items-start mb-1">
                <div className="avatar bg-light-dark my-0 ms-0 me-50">
                  <span className="avatar-content">BW</span>
                </div>
                <div className="more-info">
                  <p className="mb-0"><span className="fw-bold">Bruce</span> was assigned task of code review.</p>
                  <small className="text-muted">Today 8:30 PM</small>
                </div>
              </div>
              <div className="d-flex align-items-start mb-1">
                <div className="avatar bg-light-danger my-0 ms-0 me-50">
                  <span className="avatar-content">CK</span>
                </div>
                <div className="more-info">
                  <p className="mb-0">
                    <span className="fw-bold">Clark</span> assigned task UX Research to
                    <span className="fw-bold text-primary">@martian</span>
                  </p>
                  <small className="text-muted">Today 8:00 AM</small>
                </div>
              </div>
              <div className="d-flex align-items-start mb-1">
                <div className="avatar my-0 ms-0 me-50">
                  <img src="../../../app-assets/images/portrait/small/avatar-s-4.jpg" alt="Avatar" height="32" />
                </div>
                <div className="more-info">
                  <p className="mb-0">
                    <span className="fw-bold">Ray</span> Added moved <span className="fw-bold">Forms & Tables</span> task from
                    in progress to done.
                  </p>
                  <small className="text-muted">Today 7:45 AM</small>
                </div>
              </div>
              <div className="d-flex align-items-start mb-1">
                <div className="avatar my-0 ms-0 me-50">
                  <img src="../../../app-assets/images/portrait/small/avatar-s-1.jpg" alt="Avatar" height="32" />
                </div>
                <div className="more-info">
                  <p className="mb-0"><span className="fw-bold">Barry</span> Complete all the tasks assigned to him.</p>
                  <small className="text-muted">Today 7:17 AM</small>
                </div>
              </div>
              <div className="d-flex align-items-start mb-1">
                <div className="avatar bg-light-success my-0 ms-0 me-50">
                  <span className="avatar-content">HJ</span>
                </div>
                <div className="more-info">
                  <p className="mb-0"><span className="fw-bold">Jordan</span> added task to update new images.</p>
                  <small className="text-muted">Today 7:00 AM</small>
                </div>
              </div>
              <div className="d-flex align-items-start mb-1">
                <div className="avatar my-0 ms-0 me-50">
                  <img src="../../../app-assets/images/portrait/small/avatar-s-6.jpg" alt="Avatar" height="32" />
                </div>
                <div className="more-info">
                  <p className="mb-0">
                    <span className="fw-bold">Dianna</span> moved task <span className="fw-bold">FAQ UX</span> from in progress
                    to done board.
                  </p>
                  <small className="text-muted">Today 7:00 AM</small>
                </div>
              </div>
              <div className="d-flex align-items-start mb-1">
                <div className="avatar bg-light-danger my-0 ms-0 me-50">
                  <span className="avatar-content">CK</span>
                </div>
                <div className="more-info">
                  <p className="mb-0">
                    <span className="fw-bold">Clark</span> added new board with name <span className="fw-bold">Done</span>.
                  </p>
                  <small className="text-muted">Yesterday 3:00 PM</small>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div className="avatar bg-light-dark my-0 ms-0 me-50">
                  <span className="avatar-content">BW</span>
                </div>
                <div className="more-info">
                  <p className="mb-0"><span className="fw-bold">Bruce</span> added new task in progress board.</p>
                  <small className="text-muted">Yesterday 12:00 PM</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
    
    
    
    
    
    
    
     </section>    </div> </div> </div> </div> 
    <Footer />
             </>
  )
}

export default Taskdata