import axios from 'axios';

export const handleSubmit = async (formData, url) => {
  try {
    
    const response = await axios.post(url, formData);
    alert("Signup successful");
    return response.data;
  } catch (error) {
    alert("Error:", error);
    throw error; // Re-throw the error to handle it in the component
  }
};

export const handleClose = (setIsOpen) => {
  setIsOpen(false);
};