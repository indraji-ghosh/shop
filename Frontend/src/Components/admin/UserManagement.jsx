import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser, fetchUsers } from '../../redux/slices/adminSlice'
import { deleteUser, updateUser } from '../../redux/slices/adminSlice'
import { useSelector } from 'react-redux'

function UserManagement() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user} = useSelector((state) => state.auth)
    const {users,loading, error} = useSelector((state) => state.admin)

useEffect(() => {
    if(user && user.role !== 'admin'){
        navigate('/')
    }
}, [user, navigate])

useEffect(() => {
    if(user && user.role == 'admin'){
       dispatch(fetchUsers())
    }
}, [dispatch, user])



    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        role:"customer"
    })
    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(addUser(formData))
        
        setFormData({
            name:"",
            email:"",
            password:"",
            role:"customer"
        })
    }
    const handleRoleChange = (userId, newRole) =>{
        dispatch(updateUser({id:userId, role:newRole}))
        console.log(userId, newRole);
        
    }
    const handleDeleteUser = (userId) =>{
        if(window.confirm("Are you sure You want to delete User?")){
            dispatch(deleteUser(userId))
            console.log(userId);
            
        }
    }
  return (
    <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">
            User Management
        </h2>
        {/* Add new UserForm */}
        <div className="p-6 rounded-lg mb-6">
            <h2 className="text-lg font-bold mb-4">
                Add new User
            </h2>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input type="text"  name='name' value={formData.name}  onChange={handleChange} className='w-full p-2 border rounded border-gray-400'/>
                    <label className="block text-gray-700">Email</label>
                    <input type="text"  name='email' value={formData.email}  onChange={handleChange} className='w-full p-2 border rounded border-gray-400'/>
                    <label className="block text-gray-700">Password</label>
                    <input type="password"  name='password' value={formData.password}  onChange={handleChange} className='w-full p-2 border rounded border-gray-400'/>
                    <label className="block text-gray-700">Role</label>
                    <select name="role" value={formData.role} onChange={handleChange} className='w-full p-2 border rounded border-gray-400'>
                        <option value="customer">Customer</option>
                        <option value="admin">Admin</option>
                        
                    </select>
                    </div>
                    <button type='submit' className="bg-green-500 text-white rounded py-2 px-4 hover:bg-green-600">Add User</button>
            </form>
        </div>

        {/* user list management */}
        <div className="overflow-x-auto sm:rounded-lg bg-white shadow-md">
               <table className="min-w-full text-left text-gray-500">
                <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                    <tr>
                        <th className="py-3 px-4">Name</th>
                        <th className="py-3 px-4">Email</th>
                        <th className="py-3 px-4">Role</th>
                        <th className="py-3 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>(
                        <tr key={user._id} className="border-b hover:bg-gray-50">
                            <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                                {user.name}
                            </td>
                            <td className="p-4 ">
                                {user.email}
                            </td>
                            <td className="p-4 ">
                                <select value={user.role} onChange={(e)=>handleRoleChange(user._id, e.target.value)} className='p-2 border rounded'>
                                    <option value="customer">Customer</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </td>
                            <td className="p-4 ">
                                <button onClick={() =>handleDeleteUser(user._id)} className="bg-red-500 text-white round hover:bg-red-600 px-4 py-2">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
               </table>
            </div>
    </div>
  )
}

export default UserManagement