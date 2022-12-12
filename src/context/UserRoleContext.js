import {createContext, useEffect, useState} from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const UserRoleContext = createContext()

const UserRoleContextProvider  = (props) => {

   

const [Roles, setRoles] = useState([]);
useEffect(() => {
    getRoles();
}, []);

function getRoles() {
    axios.get(`https://asut.az/tax1/readrole.php`).then(function(response) {
       
        setRoles(response.data);
    });
}



const sortedRoles = Roles.sort((a,b)=>(a.role < b.role ? -1 : 1));

 

const addRole = ( urole,dashboard,yform,tapsirik,struktur,users,moduls,username) => {
   
    const formData = new FormData();
       
    formData.append('role',urole)
    formData.append('dashboard',dashboard)
    formData.append('yform',yform)
    formData.append('tapsirik',tapsirik)
    formData.append('struktur',struktur)
    formData.append('users',users)
    formData.append('moduls',moduls)

    axios({
        method: 'post',
        url: 'https://asut.az/tax1/roleform.php?action=save&username='+username+'',
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
        //handle success
        console.log(response)
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
        getRoles();
    })
    .catch(function (response) {
        //handle error
        console.log(response)
    });
   
   
   getRoles();
}



const deleteRole = (id) => {
    setRoles(Roles.filter(Role => Role.id !== id))

   
        axios.delete(`https://asut.az/tax1/roleform.php?action=delete&id=${id}`).then(function(response){
            console.log(response.data);
           // alert('Role Silindi')
           toast.error(' Rol Silindi!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            getRoles();
        });
    
   
   
}

const updateRole = (id,urole, dashboard,yform,tapsirik,struktur,users,moduls) => {
   
    const formData = new FormData();
       
    
    formData.append('role',urole);
    formData.append('dashboard',dashboard)
    formData.append('yform',yform)
    formData.append('tapsirik',tapsirik)
    formData.append('struktur',struktur)
    formData.append('users',users)
    formData.append('moduls',moduls)
    

    axios({
        method: 'post',
        url: 'https://asut.az/tax1/roleformedit.php?id='+id,
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
        //handle success
       // console.log(response)
       // alert('Formanın saxlanması uğurludur.');  
       toast.warning(' Rol redakte edildi!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        getRoles();
    })
    .catch(function (response) {
        //handle error
        console.log(response)
    });
   
   
  
   getRoles();
}

    return (
        <UserRoleContext.Provider value={{sortedRoles, addRole, deleteRole, updateRole}}>
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
        </UserRoleContext.Provider>
    )
}

export default UserRoleContextProvider;