import React from 'react'
import { useAuth } from '../context/AuthProvider'

const Logout = () => {

    const [authUser, setAuthUser] = useAuth()
    const handleLogout = () => {
        try{
            setAuthUser({
                ...authUser,
                user:null
            });
            localStorage.removeItem("User");
            toast.success("Logout successfully");
                setTimeout(()=>{
                    window.location.reload();
                },3000);
        }catch (error){
            toast.error("Error: " + error.message);
            setTimeout(() => {},3000);
        }
    }

  return (
    <div>
      <button onClick={handleLogout} 
      className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'> 
        Logout
      </button>
    </div>
  )
}

export default Logout
