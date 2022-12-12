import {createContext, useEffect, useState} from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const StrukturContext = createContext()

const StrukturContextProvider  = (props) => {

   

const [Strukturs, setStrukturs] = useState([]);
useEffect(() => {
    getStrukturs();
}, []);

function getStrukturs() {
    axios.get(`https://asut.az/tax1/readstruktur.php`).then(function(response) {
     
        setStrukturs(response.data);
    });
}



const sortedStrukturs = Strukturs.sort((a,b)=>(a.struktur < b.struktur ? -1 : 1));

 

const addStruktur = (struktur,username) => {
    
    const formData = new FormData();
       
    formData.append('struktur',struktur)

    

    axios({
        method: 'post',
        url: 'https://asut.az/tax1/strukturform.php?action=save&username='+username+'',
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
        getStrukturs();

    })
    .catch(function (response) {
        //handle error
        console.log(response)
    });
   
   
   getStrukturs();
}



const deleteStruktur = (id) => {
    setStrukturs(Strukturs.filter(Struktur => Struktur.id !== id))

   
        axios.delete(`https://asut.az/tax1/strukturform.php?action=delete&id=${id}`).then(function(response){
            //console.log(response.data);
           // alert('Struktur Silindi')
            getStrukturs();
            toast.error(' Struktur Silindi!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                getStrukturs();
        });
    
   
   
}

const updateStruktur = (id, struktur) => {
   
    const formData = new FormData();
       
    
    formData.append('struktur',struktur);

    

    axios({
        method: 'post',
        url: 'https://asut.az/tax1/strukturformedit.php?id='+id,
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
        //handle success
      //  console.log(response)
       // alert('Formanın saxlanması uğurludur.');  

       toast.warning(' Struktur Redaktə edildi!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

        getStrukturs();
    })
    .catch(function (response) {
        //handle error
        console.log(response)
    });
   
   
   getStrukturs();
}

    return (
        <StrukturContext.Provider value={{sortedStrukturs, addStruktur, deleteStruktur, updateStruktur}}>
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
        </StrukturContext.Provider>
    )
}

export default StrukturContextProvider;