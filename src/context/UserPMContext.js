import {createContext, useEffect, useState} from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const UserPMContext = createContext()

const UserPMContextProvider  = (props) => {

   

const [PM, setPM] = useState([]);
useEffect(() => {
    getPM();
}, []);

function getPM() {
    axios.get(`https://asut.az/tax1/readpm.php`).then(function(response) {
       
        setPM(response.data);
    });
}



const sortedPM = PM.sort((a,b)=>(a.PM < b.PM ? -1 : 1));

 

const addPM = (upm,username) => {
    
    const formData = new FormData();
       
    formData.append('pm',upm)

   

    axios({
        method: 'post',
        url: 'https://asut.az/tax1/pmform.php?action=save&username='+username+'',
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
        //handle success
        console.log(response)
        //alert('Formanın saxlanması uğurludur.');  
        
        toast.success(' Formanın saxlanması uğurludur!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

            getPM();
    })
    .catch(function (response) {
        //handle error
        console.log(response)
    });
   
   
  
   getPM();
  
}



const deletePM = (id) => {
    setPM(PM.filter(PM => PM.id !== id))

   
        axios.delete(`https://asut.az/tax1/pmform.php?action=delete&id=${id}`).then(function(response){
            console.log(response.data);
           // alert('Modul Silindi')

           toast.error(' PM Silindi!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            getPM();
        });
    
   
   
}

const updatePM = (id, pm) => {
   
    const formData = new FormData();
       
    
    formData.append('pm',pm);

    

    axios({
        method: 'post',
        url: 'https://asut.az/tax1/pmformedit.php?id='+id,
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
        //handle success
     //   console.log(response)
      //  alert('Formanın saxlanması uğurludur.');  
      toast.warning(' PM redakte edildi!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        getPM();
    })
    .catch(function (response) {
        //handle error
      //  console.log(response)
    });
  
   getPM();
}

    return (
        <UserPMContext.Provider value={{sortedPM, addPM, deletePM, updatePM}}>
            {props.children}
            <ToastContainer
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
<ToastContainer />
        </UserPMContext.Provider>
    )
}

export default UserPMContextProvider;