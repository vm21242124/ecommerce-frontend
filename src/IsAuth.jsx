
import { useSelector } from 'react-redux'

const IsAuth = () => {
  const user=useSelector((state)=>state.user.user)
  console.log(user);
  if(user!==null){
    return true
  }
  return false
}

export default IsAuth