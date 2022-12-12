import {createContext, useEffect, useState} from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const UserMessageContext = createContext()

const UserMessageContextProvider  = (props) => {

   

const [Message, setMessage] = useState([]);
useEffect(() => {
    getMessage();
}, []);

function getMessage() {
    axios.get(`https://asut.az/tax1/readMessage.php`).then(function(response) {
       
        setMessage(response.data);
    });
}



const sortedMessage = Message.sort((a,b)=>(a.Message < b.Message ? -1 : 1));

 

const addMessage = (uMessage,username) => {
    
    const formData = new FormData();
       
    formData.append('Message',uMessage)

   

    axios({
        method: 'post',
        url: 'https://asut.az/tax1/Messageform.php?action=save&username='+username+'',
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

            getMessage();
    })
    .catch(function (response) {
        //handle error
        console.log(response)
    });
   
   
  
   getMessage();
  
}



const deleteMessage = (id) => {
    setMessage(Message.filter(Message => Message.id !== id))

   
        axios.delete(`https://asut.az/tax1/Messageform.php?action=delete&id=${id}`).then(function(response){
            console.log(response.data);
           // alert('Modul Silindi')

           toast.error(' Message Silindi!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            getMessage();
        });
    
   
   
}

const updateMessage = (id, Message) => {
   
    const formData = new FormData();
       
    
    formData.append('Message',Message);

    

    axios({
        method: 'post',
        url: 'https://asut.az/tax1/Messageformedit.php?id='+id,
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
        //handle success
     //   console.log(response)
      //  alert('Formanın saxlanması uğurludur.');  
      toast.warning(' Message redakte edildi!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        getMessage();
    })
    .catch(function (response) {
        //handle error
      //  console.log(response)
    });
  
   getMessage();
}

    return (
        <UserMessageContext.Provider value={{sortedMessage, addMessage, deleteMessage, updateMessage}}>
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
        </UserMessageContext.Provider>
    )
}

export default UserMessageContextProvider;