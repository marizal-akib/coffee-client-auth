import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUser] = useState(loadedUsers);
    const handleDelete = id => {
        fetch(` https://coffee-store-server-6kvlist1g-mariz-al-akibs-projects.vercel.app/user/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount >0){
                console.log('Deleted');
                const usersLeft = users.filter(user=>user._id !== id);
                setUser(usersLeft);
            }
        })
    }
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created At</th>
        <th>Last Login At</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user=> <tr key={user._id}>
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.createAt}</td>
            <td>{user.lastLoggedAt}</td>
            <td>
                <button onClick={()=>handleDelete(user._id)} className="btn">X</button>
            </td>
          </tr>)
      }
    </tbody>
  </table>
</div>
    );
};

export default Users;