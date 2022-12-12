import {createContext, useEffect, useState} from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const UserModulContext = createContext()

const UserModulContextProvider  = (props) => {

   

const [Moduls, setModuls] = useState([]);
useEffect(() => {
    getModuls();
}, []);

function getModuls() {
    axios.get(`https://asut.az/tax1/readmodul.php`).then(function(response) {
       
        setModuls(response.data);
    });
}



const sortedModuls = Moduls.sort((a,b)=>(a.Modul < b.Modul ? -1 : 1));

 

const addModul = (umodul,username) => {
    
    const formData = new FormData();
       
    formData.append('modul',umodul)

   

    axios({
        method: 'post',
        url: 'https://asut.az/tax1/modulform.php?action=save&username='+username+'',
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

            getModuls();
    })
    .catch(function (response) {
        //handle error
        console.log(response)
    });
   
   
  
   getModuls();
  
}



const deleteModul = (id) => {
    setModuls(Moduls.filter(Modul => Modul.id !== id))

   
        axios.delete(`https://asut.az/tax1/modulform.php?action=delete&id=${id}`).then(function(response){
            console.log(response.data);
           // alert('Modul Silindi')

           toast.error(' Modul Silindi!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            getModuls();
        });
    
   
   
}

const updateModul = (id, modul) => {
   
    const formData = new FormData();
       
    
    formData.append('modul',modul);

    

    axios({
        method: 'post',
        url: 'https://asut.az/tax1/modulformedit.php?id='+id,
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
        //handle success
     //   console.log(response)
      //  alert('Formanın saxlanması uğurludur.');  
      toast.warning(' Modul redakte edildi!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        getModuls();
    })
    .catch(function (response) {
        //handle error
      //  console.log(response)
    });
  
   getModuls();
}

    return (
        <UserModulContext.Provider value={{sortedModuls, addModul, deleteModul, updateModul}}>
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
        </UserModulContext.Provider>
    )
}

export default UserModulContextProvider;