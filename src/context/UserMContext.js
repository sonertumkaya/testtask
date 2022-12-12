import {createContext, useEffect, useState} from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const UserMContext = createContext()

const UserMContextProvider  = (props) => {

   

const [M, setM] = useState([]);
useEffect(() => {
    getM();
}, []);

function getM() {
    axios.get(`https://asut.az/tax1/messagereads.php?id=30`).then(function(response) {
       
        setM(response.data);
    });
}



const sortedM = M.sort((a,b)=>(a.M < b.M ? -1 : 1));

  



const readM = (id) => {
    setM(M.filter(M => M.id !== id))

   
        axios.delete(`https://asut.az/tax1/Mform.php?action=delete&id=${id}`).then(function(response){
            console.log(response.data);
           // alert('Modul Silindi')

           toast.error(' M Silindi!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            getM();
        });
    
   
   
}
 

    return (
        <UserMContext.Provider value={{sortedM, readM}}>
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
        </UserMContext.Provider>
    )
}

export default UserMContextProvider;