import {useContext} from 'react'
import {UserContext} from '../context/UserContext'


const Username = () => {
  const { user} = useContext(UserContext);
 
  return (
   
    <>
   
   
     <input type="text" className="form-control" id="username" name="username"  defaultvalue={user.name} value={user.name}
                onChange={e => this.setState({ username: e.target.value })} />
   
      </>      
  )
}

export default Username;
