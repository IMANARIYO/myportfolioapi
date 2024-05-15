import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root');

function UserModal({ isOpen, closeModal, mode }) {
  const [formData, setFormData] = useState({
    fullNames: '',
    phoneNumber: '',
    password: '',
    image: '',
    role: '',
    email: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform add request
    const response= await axios.post('https://imanariyobaptisteportfolioapi.onrender.com/auth/signup', formData);
    console.log(response.data.message);
    //   closeModal();
    alert("signup successfully");
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className="user-modal">
      {mode === 'add' && (
        <>
          <h2>Add New User</h2>
          <form method='post' onSubmit={handleSubmit}>
            <label>
              Full Name:
              <input type="text" name="fullNames" value={formData.fullNames} onChange={handleChange} />
            </label>
            <label>
              Phone Number:
              <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </label>
            <label>
              Image:
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </label>
            <label>
              Role:
              <input type="text" name="role" value={formData.role} onChange={handleChange} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
              <label>
              Role:
              <input type="text" name="role" value={formData.role} onChange={handleChange} />
            </label>:
              <input type="text" name="role" value={formData.role} onChange={handleChange} />
            </label>
            <label>
              Gender:
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
            <button type="submit" >Add</button>
            {/* <button onClick={closeModal}>Cancel</button> */}
          </form>
        </>
      )}
    </Modal>
  );
}

export default UserModal;
