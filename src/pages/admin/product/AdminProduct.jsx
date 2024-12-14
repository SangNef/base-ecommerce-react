import React from 'react'
import { useAuthContext } from '~/contexts/AuthContext';

const AdminProduct = () => {
  const { authState } = useAuthContext();
  const { user } = authState;
  console.log(user)

  return (
    <div>{user?.fullname}</div>
  )
}

export default AdminProduct