import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsrs] = useState(loadedUsers);
    console.log(users);

    const handleDelete = id =>{
        // console.log(id);


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {

            
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/users/${id}`,{
                method: "DELETE",
                // headers: {'content-type': "application/json"},
                })

            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.deletedCount > 0){
/*                     Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully Deleted",
                        showConfirmButton: false,
                        timer: 1500
                      }); */

                      Swal.fire({
                        title: "Deleted!",
                        text: "User has been deleted.",
                        icon: "success"
                      });


                    const remainingUsers = users.filter(user=>user._id !== id);
                    setUsrs(remainingUsers)
                }
            })


              
            }
          });


    }

    return (
        <div>
            <h2 className="text-5xl">Users: {loadedUsers.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Crated At</th>
                            <th>Last Signin Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>
                                <th></th>
                                <td>{user.email}</td>
                                <td>{user.creationTime}</td>
                                <td>{user.lastLoggedAt}</td>
                                <td>
                                    <button 
                                    onClick={() =>handleDelete(user._id)} 
                                    className="btn">X</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;