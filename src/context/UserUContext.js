import {createContext, useEffect, useState} from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const UsersContext = createContext()

const UsersContextProvider  = (props) => {

   

const [User, setUsers] = useState([]);
useEffect(() => {
    getUsers();
}, []);

function getUsers() {
    axios.get(`https://asut.az/tax1/readuser.php`).then(function(response) {
       
        setUsers(response.data);
    });
}



const sortedUsers = User.sort((a,b)=>(a.User < b.User ? -1 : 1));

 

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
       // console.log(response)
       // alert('Formanın saxlanması uğurludur.');  
       toast.success(' Formanın saxlanması uğurludur!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }); 
        getUsers();
    })
    .catch(function (response) {
        //handle error
        console.log(response)
    });
   
   
   getUsers();
  
}



const deleteUser = (id) => {
    setUsers(User.filter(Users => User.id !== id))

   
        axios.delete(`https://asut.az/tax1/modulform.php?action=delete&id=${id}`).then(function(response){
         //   console.log(response.data);
         //   alert('User Silindi')

         toast.error(' İstifadəçi Silindi!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            getUsers();
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
      //  console.log(response)
      //  alert('Formanın saxlanması uğurludur.');  
      toast.warning(' İstifadəçi Redaktə edildi!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        getUsers();
      
    })
    .catch(function (response) {
        //handle error
        console.log(response)
    });
   
     
   getUsers();
}

    return (
        <UsersContext.Provider value={{sortedUsers, addModul, deleteUser, updateModul}}>
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
        </UsersContext.Provider>
    )
}

export default UsersContextProvider;