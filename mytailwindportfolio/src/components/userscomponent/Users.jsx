import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdVisibility, MdEdit, MdDelete, MdClose } from 'react-icons/md'; 
import './Users.css';
// import './UserForm.css';
import UserForm from './UserForm';
import { Link, useParams } from 'react-router-dom';


function User({ user, handleEdit, handleDelete,handleView }) {
  const { _id,fullNames, phoneNumber, image, role, email, gender } = user; 
  return (
    <tr className='user'>
      <td>
        <img className='user-image' src={image} alt={fullNames} /> 
      </td>
      <td>{fullNames}</td>
      <td>{phoneNumber}</td>
      <td>{role}</td>
      <td>{gender}</td>
      <td>{email}</td>
      <td className='actions '>
        
        <Link to={`/users/${_id}`}> 
     <MdVisibility />
       </Link>
        <button onClick={() => handleEdit(_id)}> 
          <MdEdit />
        </button>
        <button onClick={() => handleDelete(_id)}> 
          <MdDelete />
        </button>
      </td>
    </tr>
  );
}



function Users() {
  let url="http://localhost:3330"
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [users, setUsers] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${url}/auth/getAllUsers`);
      setUsers(response.data.data);
    } catch (error) {
      console.error(error); 
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddSection = () => {
    setIsFormOpen(true); 
    setUserToUpdate(null);
  };

  const handleReload = () => {
    window.location.reload(); 
  };

  const handleCloseForm = () => {
    setIsFormOpen(false); 
  };

  const handleEdit = (userId) => {
    const user = users.find(user => user._id === userId);
    setUserToUpdate(user);
    setIsFormOpen(true); // Open form in edit mode
  };

  const handleSubmitForm = async (formData) => {
    try {
      console.log("handle submit")  
    const response= await axios.post('https://imanariyobaptisteportfolioapi.onrender.com/auth/signup', formData);
    alert("signup successfully");
    setIsFormOpen(false); 
   
  } catch (error) {
   alert(error);
    
  }
  };
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  const handleDelete = async (_id) => {
    try {
 
      await axios.delete(`${url}/auth/deleteUserById/${_id}`);
      setUsers(users.filter(user => user._id !== _id));
 
      alert(`User with ID ${_id} deleted successfully`);
    } catch (error) {
     alert(`Error deleting user with ID ${_id}:`, error);
    }
  };
  
  
const _id = useParams()

  return (
    <div className='users list-of-items-container'>
      <h1>List of users</h1>
      <button className='add-button' onClick={handleAddSection}>Add users</button>
      { isFormOpen && <UserForm handleClose={handleCloseForm} userToUpdate={userToUpdate} handleSubmit={handleSubmitForm}  handleReload={handleReload} /> }
      
      {/* handleSubmit={handleSubmitForm} */}
      <table className='users table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <User
              key={user._id}
              user={user}
             
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
      <div className='pagination'>
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastItem >= users.length}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Users;
