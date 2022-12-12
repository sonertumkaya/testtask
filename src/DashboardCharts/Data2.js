import React, { useEffect, useState } from 'react';
//import axios from 'axios';
//import DataTable from 'react-data-table-component';
//import DataTableExtensions from "react-data-table-component-extensions";
//import "react-data-table-component-extensions/dist/index.css";
import { DataGrid, GridToolbar, GridColDef,trTR  } from '@mui/x-data-grid';
const columns = [
  {
    name:   '№',
   selector: row => row.No,
   sortable: true,
   },
   {
    name:   'Layihə',
   selector: row => row.Layihe,
   sortable: true,
   },
   {
    name:   'Baş İdarə',
   selector: row => row.Idare,
   sortable: true,
   },
   {
    name:   'TT nömrəsi/Müqavilə bəndi',
   selector: row => row.TTNM,
   sortable: true,
   },
   {
    name:   'Məzmun',
   selector: row => row.Mezmun,
   sortable: true,
   },
   {
    name:   'Başlanma',
   selector: row => row.Baslanma,
   sortable: true,
   },
   {
    name:   'Bitmə',
   selector: row => row.Bitme,
   sortable: true,
   },
   {
    name:   'İcra faizi',
   selector: row => row.Ifaiz,
   sortable: true,
   },
   {
    name:   'Status',
   selector: row => row.Status,
   sortable: true,
   },
   {
    name:   'Dayanıb',
   selector: row => row.Dayan,
   sortable: true,
   },
   {
    name:   'Qeyd',
   selector: row => row.Qayd,
   sortable: true,
   },
   {
    name:   'İcra müddəti',
   selector: row => row.Muddet,
   sortable: true,
   },
   {
    name:   'Büdcə',
   selector: row => row.Butce,
   sortable: true,
   },
   {
    name:   'Prioritet',
   selector: row => row.Prioritet,
   sortable: true,
   },
   {
    name:   'İcra edilmə ardıcıllığı',
   selector: row => row.Ardcilik,
   sortable: true,
   },
   {
    name:   'Sifarişçi',
   selector: row => row.Siparisci,
   sortable: true,
   },
   {
    name:   'PM DVX',
   selector: row => row.PMDVX,
   sortable: true,
   },
   {
    name:   'PM CyberNet MMC',
   selector: row => row.PMCyberNet,
   sortable: true,
   },
   
];
function Data2  (props)  {
  const [seldata, setSelec] = useState([]);
  


 useEffect( ()=>{

 
const url=`https://asut.az/tax1/chartdata2.php?action=form&siparis=`;
const url2=`&pr=`;
const url3=`&status=`;
const url4=`&deger=`;
const url5=`&idare=`;
  const aurl=url+props.siparis+url2+props.pr+url3+props.statusa+url4+props.degerg+url5+props.filtera;
  //alert(aurl)
  const sgData=[];
  const getdata2= async()=>{
    const reqData= await fetch(aurl);
    const resData= await reqData.json();   
  
    for(let i=0; i< resData.length; i++)
    {
     sgData.push(resData[i]);
    
    }
    
    setSelec(sgData);
  
    }
    getdata2();
},[props.siparis,props.pr,props.statusa,props.degerg,props.filtera]);

const data = React.useMemo(() => {
  return seldata;
}, [seldata])

const tableData = {
  columns,
  data
};

const columnsa: GridColDef[] = [
  {
    headerName:  '№',
   field:"id",
   
   },
   {
    headerName:  'Layihə',
   field:"Layihe",
   
   },
   {
    headerName:  'Baş İdarə',
   field:"Idare",
   
   },
   {
    headerName:  'TT nömrəsi/Müqavilə bəndi',
   field:"TTNM",
   width: 150 ,
   
   },
   {
    headerName:  'Məzmun',
   field:"Mezmun",
   width: 400 ,
   },
   {
    headerName:  'Başlanma',
   field:"Baslanma",
   
   },
   {
    headerName:  'Bitmə',
   field:"Bitme",
   
   },
   {
    headerName:  'İcra faizi',
   field:"Ifaiz",
   
   },
   {
    headerName:  'Status',
   field:"Status",
   
   },
   {
    headerName:  'Dayanıb',
   field:"Dayan",
   
   },
   {
    headerName:  'Maksat',
   field:"Qayd",
   
   },
   {
    headerName:  'İcra müddəti',
   field:"Muddet",
   
   },
   {
    headerName:  'Büdcə',
   field:"Butce",
   
   },
   {
    headerName:  'Prioritet',
   field:"Prioritet",
   
   },
   {
    headerName:  'İcra edilmə ardıcıllığı',
   field:"Ardcilik",
   
   },
   {
    headerName:  'Sifarişçi',
   field:"Siparisci",
   
   },
   {
    headerName:  'PM DVX',
   field:"PMDVX",
   
   },
   {
    headerName:  'PM CyberNet MMC',
   field:"PMCyberNet",
   
   },
];

    return(
      
     
        <React.Fragment>
       
      
       {/* <DataTableExtensions {...tableData} export={false} print={false} exportHeaders>
                    <DataTable
            id="5"
            pagination 
             
        />
           </DataTableExtensions>           */}

<div style={{ height: 400, width: '100%' }}>
           <DataGrid 
      localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
      rows={data}
      columns={columnsa}
      getRowHeight={() => 'auto'}
       components={{ Toolbar: GridToolbar }} />
   </div>
              
        </React.Fragment>
    );
}

 
 

export default Data2;