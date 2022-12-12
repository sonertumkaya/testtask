import {createContext, useEffect, useState} from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const UserBildirisContext = createContext()

const UserBildirisContextProvider  = (props) => {

   

const [Bildiris, setBildiris] = useState([]);
useEffect(() => {
    getBildiris();
}, []);

function getBildiris() {
    axios.get(`https://asut.az/tax1/readBildiris.php`).then(function(response) {
       
        setBildiris(response.data);
    });
}



const sortedBildiris = Bildiris.sort((a,b)=>(a.Bildiris < b.Bildiris ? -1 : 1));

 

 



const readBildiris = (id) => {
    setBildiris(Bildiris.filter(Bildiris => Bildiris.id !== id))

   
        axios.delete(`https://asut.az/tax1/Bildirisform.php?action=delete&id=${id}`).then(function(response){
            console.log(response.data);
           // alert('Modul Silindi')

           toast.error(' Bildiris Okundu!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            getBildiris();
        });
    
   
   
}

 

    return (
        <UserBildirisContext.Provider value={{sortedBildiris, readBildiris}}>
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
        </UserBildirisContext.Provider>
    )
}

export default UserBildirisContextProvider;