import {createContext, useEffect, useState} from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const UserSModulContext = createContext()

const UserSModulContextProvider  = (props) => {

   

const [SModuls, setModuls] = useState([]);
useEffect(() => {
    getModuls();
}, []);

function getModuls() {
    axios.get(`https://asut.az/tax1/readsmodul.php`).then(function(response) {
       
        setModuls(response.data);
    });
}



const sortedSModuls = SModuls.sort((a,b)=>(a.Modul < b.Modul ? -1 : 1));

 

const addModul = (umodul,username,amodul) => {
    
    const formData = new FormData();
       
    formData.append('modul',umodul)
    formData.append('mid',amodul)

   

    axios({
        method: 'post',
        url: 'https://asut.az/tax1/smodulform.php?action=save&username='+username+'',
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
        //handle success
       // console.log(response)
      //  alert('Formanın saxlanması uğurludur.'); 
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



const deleteSModul = (id) => {
    setModuls(SModuls.filter(SModul => SModul.id !== id))

   
        axios.delete(`https://asut.az/tax1/smodulform.php?action=delete&id=${id}`).then(function(response){
            console.log(response.data);
           // alert('Modul Silindi')
           toast.error(' Alt Modul Silindi!', {
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

const updateModul = (id, modul,amodul) => {
   
    const formData = new FormData();
       
    
    formData.append('modul',modul);
    formData.append('mid',amodul);

    

    axios({
        method: 'post',
        url: 'https://asut.az/tax1/smodulformedit.php?id='+id,
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
        //handle success
      //  console.log(response)
      //  alert('Formanın saxlanması uğurludur.');  
      toast.warning(' Alt modul redakte edildi!', {
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

    return (
        <UserSModulContext.Provider value={{sortedSModuls, addModul, deleteSModul, updateModul}}>
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
        </UserSModulContext.Provider>
    )
}

export default UserSModulContextProvider;