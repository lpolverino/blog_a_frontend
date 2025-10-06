import React, { useContext } from 'react'
import { UserContext } from '../../../Context/UserProvider';

const Header = () => {
  const {user} = useContext(UserContext);
  
  return (
    <div>
        <h1>blog_a</h1>
        <p>{user.user && user.user.Name}</p>
        <button>Conf</button>
    </div>
  )
}

export default Header