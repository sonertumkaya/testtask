import React, { useState } from 'react';
import Datatable from './DataTable';
import Navbar from "../../components/headernavbar/Navbar";
import Menu from "../../components/menu/Menu";
import Footer from "../../components/Footer";
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import axios from "axios";
import logo from './logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataGrid, GridToolbar, GridColDef,trTR,GridActionsCellItem,  GridRowId,  GridColumns, } from '@mui/x-data-grid';
 
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import SendIcon from '@mui/icons-material/Send';
import ErrorIcon from '@mui/icons-material/Error';
import ViewIcon from '@mui/icons-material/Visibility';
import { Tooltip } from "@material-ui/core";

function Taskdata(props) {
  
  const [seldata, setSelec] = useState([]);
 

    
   
  const linkb="https://asut.az/tax1/readtask.php?userid=";
   

  
   const persons = () =>
   { axios.get(linkb).then(res => {
   //console.log(res) ; 
   const personsda = res.data;
   //console.log(res.data);
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
        Header: 'Təfərrüatlar',
        accessor: (originalRow2, rowIndex) => ( <div><button className="btn btn-primary w-70 mb-65 waves-effect waves-float waves-light" onClick={() => handleViewsa(originalRow2)}>Təfərrüatlar</button></div>),
     },
      {
        Header: 'SNo',
        Footer: 'SNo',
        accessor: 'id', // accessor is the "key" in the data
      },
      {
        Header: 'TTNM',
        Footer: 'TTNM',
        accessor: 'TTNM',
      },
      {
        Header: 'Sifarişçi',
        Footer: 'Sifarişçi',
        accessor: 'Siparisci',
      },
      {
        Header: 'Prioritet',
        Footer: 'Prioritet',
        accessor: 'Prioritet',
      },
      {
        Header: 'DVX Məsul şəxs',
        Footer: 'DVX Məsul şəxs',
        accessor: 'msahs',
      },

      {
        Header: 'Aid olduğu layihə',
        Footer: 'Aid olduğu layihə',
        accessor: 'Layihe',
      },
      {
        Header: 'Aid olduğu modul',
        Footer: 'Aid olduğu modul',
        accessor: 'modul',
      },
      {
        Header: 'Dəyəri',
        Footer: 'Dəyəri',
        accessor: 'Butce',
      },
      {
        Header: 'Başlama vaxtı',
        Footer: 'Başlama vaxtı',
        accessor: 'Baslanma',
      },
      {
        Header: 'Bitmə vaxtı',
        Footer: 'Bitmə vaxtı',
        accessor: 'Bitme',
      },
      {
        Header: 'Qısa qeyd',
        Footer: 'Qısa qeyd',
        accessor: 'Qayd',
      },
      {
        Header: 'Ətraflı məlumat',
        Footer: 'Ətraflı məlumat',
        accessor: 'malumat',
      },
      {
        Header: 'Sənəd',
        Footer: 'Sənəd',
        accessor: 'files',
      },
      {
        Header: 'Mezmun',
        Footer: 'Mezmun',
        accessor: 'Mezmun',
        width: 200,
      },
      {
        Header: 'İstifadəçi',
        Footer: 'İstifadəçi',
        accessor: 'username',
      },

      {
        Header: 'Kayd Tarixi',
        Footer: 'Kayd Tarixi',
        accessor: 'create_date',
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


  const handleEditViews = (row) => {
    // console.log(row);
     
    
     setEditTask({id:row.id,	no:row.no,	siparisci:row.siparisci,	msahs:row.msahs	,alayihe:row.alahiye,	amodul:row.amodul,	deyeri:row.deyeri,	starih:row.starih,	btarih:row.btarih,	kqeyd:row.kqeyd,	emalumat:row.emalumat	,file:row.file	});
     setEditTaskS({oncelik:row.oncelik	});
   }

 
  const handleDelete = (row) => {
   // console.log(row)
  }

  const [ViewTask, setViewTask] = useState({
    id:'',	no:'',Layihe:'',Idare:'',TTNM:'',Mezmun:'',Baslama:'',Bitme:'',Ifaiz:'',Status:'',Dayan:'',Qayd:'',Muddet:'',Butce:'',Prioritet:'',Ardcilik:'',siparisci:'',PMDVX:'',PMCEYBERNET:'',files:'',create_date:'',		msahs:'', username:''

 });
  const handleViewsa = (row) => {
    // console.log(row)
    setOpendata(row.status) ;
    setViewTask({id:row.id,	no:row.No,Layihe:row.Layihe,Idare:row.Idare,TTNM:row.TTNM,Mezmun:row.Mezmun,Baslama:row.Baslanma,Bitme:row.Bitme,Ifaiz:row.Ifaiz,Status:row.Status,Dayan:row.Dayan,Qayd:row.Qayd,Muddet:row.Muddet,Butce:row.Butce,Prioritet:row.Prioritet,Ardcilik:row.Ardcilik,siparisci:row.Siparisci,PMDVX:row.PMDVX,PMCEYBERNET:row.PMCyberNet,files:row.files,create_date:row.create_date,		msahs:row.msahs	,username:row.username	});
    setOpenmodal(true);
    //alert(row.id);
   }
 

   
 


const [openmodal,setOpenmodal] = useState(false)
   const styles2 = {
     popup:{
       display: openmodal ? "block" : "none",
        
     }
   };
   const [opendata,setOpendata] = useState("")
 
   const Print = () =>{     
    //console.log('print');  
    setOpenmodal(false);
    let printContents = document.getElementById('printablediv').innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
   document.body.innerHTML = originalContents; 
   setOpenmodal(false);
  }

   

  const [openforms,setOpenforms] = useState(false)
  
  const stylesforms = {
   
    popup:{
      display: openforms ? "block" : "none",
       
    }
  };
  const [redmalumatf, setredmalumat] = useState("")
  const [formidsf, setformids] = useState("")


  const handleformsview = () => {
    setredmalumat('');

    setOpenforms(true);
   
  }


  const toggleAdmin = (event, cellValues) => {
    console.log(cellValues.row.id);
    alert(cellValues.row.id);
  };


  const handleViewsa2 = (event, cellValues) => {
    // console.log(row)
    setOpendata(cellValues.row.status) ;
    setViewTask({id:cellValues.row.id,	no:cellValues.row.No,Layihe:cellValues.row.Layihe,Idare:cellValues.row.Idare,TTNM:cellValues.row.TTNM,Mezmun:cellValues.row.Mezmun,Baslama:cellValues.row.Baslanma,Bitme:cellValues.row.Bitme,Ifaiz:cellValues.row.Ifaiz,Status:cellValues.row.Status,Dayan:cellValues.row.Dayan,Qayd:cellValues.row.Qayd,Muddet:cellValues.row.Muddet,Butce:cellValues.row.Butce,Prioritet:cellValues.row.Prioritet,Ardcilik:cellValues.row.Ardcilik,siparisci:cellValues.row.Siparisci,PMDVX:cellValues.row.PMDVX,PMCEYBERNET:cellValues.row.PMCyberNet,files:cellValues.row.files,create_date:cellValues.row.create_date,		msahs:cellValues.row.msahs	,username:cellValues.row.username	});
    setOpenmodal(true);
    //alert(row.id);
   }


   const Print2 = (event, cellValues) =>{     
    //console.log('print');  
    setViewTask({id:cellValues.row.id,	no:cellValues.row.No,Layihe:cellValues.row.Layihe,Idare:cellValues.row.Idare,TTNM:cellValues.row.TTNM,Mezmun:cellValues.row.Mezmun,Baslama:cellValues.row.Baslanma,Bitme:cellValues.row.Bitme,Ifaiz:cellValues.row.Ifaiz,Status:cellValues.row.Status,Dayan:cellValues.row.Dayan,Qayd:cellValues.row.Qayd,Muddet:cellValues.row.Muddet,Butce:cellValues.row.Butce,Prioritet:cellValues.row.Prioritet,Ardcilik:cellValues.row.Ardcilik,siparisci:cellValues.row.Siparisci,PMDVX:cellValues.row.PMDVX,PMCEYBERNET:cellValues.row.PMCyberNet,files:cellValues.row.files,create_date:cellValues.row.create_date,		msahs:cellValues.row.msahs	,username:cellValues.row.username	});

    var mywindow = window.open('', 'PRINT');
    mywindow.document.write (document.getElementById('printablediv').innerHTML);
    
    
    mywindow.print();
    mywindow.close();

    return true;
 
  }


 

  const columnsab: GridColDef[] = [

   

    {
      headerName: 'Əməliyyatlar',
      field: 'actions',
      type: 'actions',
      width: 120,
      getActions: (cellValues) => [
      
        
        <GridActionsCellItem
        icon={<ViewIcon />}
          label="View"
          onClick={(event) => {
            handleViewsa2(event, cellValues);
          }}
          showInMenu
        />,
        <GridActionsCellItem
        icon={<EditIcon />}
          label="Redakte"
          onClick={(event) => {
            toggleAdmin(event, cellValues);
          }}
          showInMenu
        />,
        <GridActionsCellItem
        icon={<DeleteIcon />}
          label="Sil"
          
          showInMenu
        />,
        <GridActionsCellItem
        icon={<PrintIcon />}
          label="Çap et"
          onClick={(event) => {
            Print2(event, cellValues);
          }}
          showInMenu
        />,
        <GridActionsCellItem
        icon={<SendIcon style={{ color: 'blue' }} />}
          label="Təsdiq edin və göndərin"
          
          showInMenu
        />,
        <GridActionsCellItem
        icon={<SendIcon style={{ color: 'blue' }} />}
          label=" Cybernet-ə təqdim edin "
          
          showInMenu
        />,
        <GridActionsCellItem
        icon={<ErrorIcon  style={{ color: 'red' }} />}
          label=" Rədd et "
          
          showInMenu
        />,
      ],
    },
    
    {
       headerName: 'SNo',      
      field: "id", // accessor is the "key" in the data
    },
    {
       headerName: 'TTNM',      
      field: "TTNM",
      width: 400 ,
    },
    {
       headerName: 'Sifarişçi',      
      field: "Siparisci",
    },
    {
       headerName: 'Prioritet',       
      field: "Prioritet",
    },
    {
       headerName: 'DVX Məsul şəxs',      
      field: "msahs",
    },
   
    {
       headerName: 'Aid olduğu layihə',      
      field: "Layihe",
    },
    {
       headerName: 'Aid olduğu modul',       
      field: "modul",
    },
    {
       headerName: 'Dəyəri',     
      field: "Butce",
    },
    {
       headerName: 'Başlama vaxtı',      
      field: "Baslanma",
    },
    {
       headerName: 'Bitmə vaxtı',      
      field: "Bitme",
    },
    {
       headerName: 'Maksat',     
      field: "Qayd",
    },
    {
       headerName: 'Ətraflı məlumat',       
      field: "malumat",
    },
    {
       headerName: 'Sənəd',     
      field: "files",
    },
    {
       headerName: 'Mezmun',     
      field: "Mezmun",
      width: 400 ,
      renderCell: (params) =>  (
        
        <Tooltip  title={params.value} >
         <span className="table-cell-trucate">{params.value}</span>
         </Tooltip>
          
       ),
    },
    {
       headerName: 'İstifadəçi',      
      field: "username",
    },
   
    {
       headerName: 'Qeydiyyat Tarixi',      
      field: "create_date",
    },
   
    

   
    

    
  ];
 


const handleRedSubmit = (e) => {
    
    e.preventDefault();
     
const formData = new FormData();
   

formData.append('redmalumat',redmalumatf);
 

axios({
    method: 'post',
    url: 'https://asut.az/tax1/taskformred.php?id='+ViewTask.id+'&usernames='+ViewTask.username,
    data: formData,
    config: { headers: {'Content-Type': 'multipart/form-data' }}
   
})




.then(function (response) {
  setOpenforms(false);
  toast.success(' Formanın saxlanması uğurludur!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    }); 
  //handle success
  console.log(response)
  e.target.reset();
})
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
      {/* <Datatable data={data} columns={columns} tableBaslik=""   /> */}
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid 
      localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
      rows={data}
      columns={columnsab}
     
       components={{ Toolbar: GridToolbar }} 
       initialState={{ pinnedColumns: { left: ['actions']} }}
       />
      </div> </div>
      </div>
    </div>
    </div> </div> </div> </div>   
    
    
    
    
    <div className={open ?  'modal modal-slide-in update-item-sidebar fade show' : 'modal modal-slide-in update-item-sidebar fade'} id="moodalform" style= {styles.popup}>
    <div className="modal-dialog sidebar-lg">
      <div className="modal-content p-0">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{setOpen(false);setOpenforms(false);}}>×</button>
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
    
    
  <div className={openmodal ? "modal2 fade text-start show" : "modal2 fade text-start" } id="large"  aria-labelledby="myModalLabel17" style= {styles2.popup} aria-hidden="true">
                <div className="modal2-dialog modal2-dialog-centered modal2-xl">
                  <div className="modal2-content">
                    <div className="modal2-header">
                      <h4 className="modal2-title" id="myModalLabel17">{opendata}</h4>
                      <button type="button" className="btn-close" data-bs-dismiss="modal2" aria-label="Close" onClick={()=>{setOpenmodal(false);setOpenforms(false);}}></button>
                    </div>
                    <div className="modal2-body">
              
                    <div className="row invoice-preview">
                 
    <div className="col-xl-12 col-md-12 col-12"  id='printablediv'>
      <div className="card invoice-preview-card">
        <div className="card-body invoice-padding pb-0">
          
          <div className="d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0">
            <div>
              <div className="logo-wrapper">
                
                
                  
                <h3 className="text-primary invoice-logo"> <img src={logo} alt="" height="72px"/></h3>
              </div>
              
            </div>
            <div className="mt-md-0 mt-2">
              <h4 className="invoice-title">
                Tapsirik
                <span className="invoice-number">{ViewTask.TTNM}</span>
              </h4>
              <div className="invoice-date-wrapper">
                <p className="invoice-date-title">Kayit Tarix:</p>
                <p className="invoice-date">{ViewTask.create_date}</p>
              </div>
              
            </div>
          </div>
          
        </div>

       

        <div className="card-body invoice-padding pb-0">
          <div className="row invoice-sales-total-wrapper">
            <div className="col-md-6 order-md-1 order-2 mt-md-0 mt-3">
              <p className="card-text mb-0">
                <span className="fw-bold">№:</span> <span className="ms-75">{ViewTask.No}</span>
              </p><br/>
              <p className="card-text mb-0">
                <span className="fw-bold">Prioritet:</span> <span className="ms-75">{ViewTask.Prioritet}</span>
              </p><br/>
              <p className="card-text mb-0">
                <span className="fw-bold">Aid olduğu layihə:</span> <span className="ms-75">{ViewTask.Layihe}</span>
              </p><br/>
              
              <p className="card-text mb-0">
                <span className="fw-bold">Dəyəri:</span> <span className="ms-75">{ViewTask.Butce}</span>
              </p><br/>
              <p className="card-text mb-0">
                <span className="fw-bold">Status:</span> <span className="ms-75">{ViewTask.Status}</span>
              </p><br/>
              <p className="card-text mb-0">
                <span className="fw-bold">Dayandi mi:</span> <span className="ms-75">{ViewTask.Dayan}</span>
              </p><br/>
              <p className="card-text mb-0">
                <span className="fw-bold">PM:</span> <span className="ms-75">{ViewTask.PMDVX}</span>
              </p><br/>
              <p className="card-text mb-0">
                <span className="fw-bold">Muddet:</span> <span className="ms-75">{ViewTask.Muddet}</span>
              </p><br/>
             
            </div>
            <div className="col-md-6 order-md-1 order-2 mt-md-0 mt-3">
              <p className="card-text mb-0">
                <span className="fw-bold">Sifarişçi:</span> <span className="ms-75">{ViewTask.siparisci}</span>
              </p><br/>
              <p className="card-text mb-0">
                <span className="fw-bold">DVX Məsul şəxs:</span> <span className="ms-75">{ViewTask.msahs}</span>
              </p><br/>
              <p className="card-text mb-0">
                <span className="fw-bold">Aid olduğu modul:</span> <span className="ms-75">{ViewTask.Layihe}</span>
              </p><br/>
              <p className="card-text mb-0">
                <span className="fw-bold">Başlama vaxtı:</span> <span className="ms-75">{ViewTask.Baslama}    </span>
                <span className="fw-bold">Bitmə vaxtı:</span> <span className="ms-75">{ViewTask.Bitme}</span>
              </p><br/>
              <p className="card-text mb-0">
                <span className="fw-bold">Faiz:</span> <span className="ms-75">{ViewTask.Ifaiz}</span>
              </p><br/>
              <p className="card-text mb-0">
                <span className="fw-bold">PM Cybernet:</span> <span className="ms-75">{ViewTask.PMCEYBERNET}</span>
              </p><br/>
            </div>
            
            
          </div>
        </div>
       

        

         
        <div className="card-body invoice-padding pt-0">
          <div className="row">
            <div className="col-12">
              <span className="fw-bold">Qısa qeyd:</span>
              <span>{ViewTask.Qayd}</span>
            </div>
          </div>
        </div>

        <div className="card-body invoice-padding pt-0">
          <div className="row">
            <div className="col-12">
              <span className="fw-bold">Ətraflı məlumat:</span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="card-body invoice-padding pt-0">
          <div className="row">
            <div className="col-12">
              <span className="fw-bold">Mezmun:</span>
              <span>{ViewTask.Mezmun}</span>
            </div>
          </div>
        </div>


        <div className="card-body invoice-padding pt-0">
          <div className="row">
            <div className="col-12">
              <span className="fw-bold">Sened:</span>
              <span>{ViewTask.files}</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
     
    
    
  </div>
                      </div>
                    <div className="modal2-footer">
                      
                    </div>
                  </div>
                </div>
              </div>


              <div className= {openmodal ? 'modal-backdrop fade show' : '' }></div>
    
    
    
    
    
     </section>   <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />  </div> </div> </div> </div> 
    <Footer />
             </>
  )
}

export default Taskdata