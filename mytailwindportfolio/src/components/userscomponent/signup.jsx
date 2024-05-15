import React, { useState } from 'react';
import axios from 'axios';
import { MdClose } from 'react-icons/md'
import { useForm } from 'react-hook-form'
function SignupForm() {
    const { register, handleSubmit, formState: { errors } , setValue } = useForm()



    const handleSignup = async data => {
        const { fullNames, email, password, confirmPassword, phoneNumber, gender, image } = data;
    
        if (password !== confirmPassword) {
            // Handle password mismatch error
            console.error('Passwords do not match');
            return;
        }
    
        try {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
            formData.append('fullNames', fullNames);
            formData.append('phoneNumber', phoneNumber);
            formData.append('gender', gender);
            formData.append('image', image[0]); // Corrected the image append
            // Removed unnecessary alerts and console.log statements
    
            const response = await axios.post('http://localhost:3330/auth/signup', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    
            console.log("response", response);
            const responseData = response.data;
            if (response.status === 201) {
                alert('Signup successful!');
                // You can redirect the user to the login page after successful signup
                window.location.href = '/login';
            } else {
                // Handle other response statuses or errors from the server
                console.error(responseData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle other errors such as network issues
            // alert('An error occurred. Please try again later.');
        }
    };
    
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white w-96 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="fullNames" className="block text-gray-700">Full Names:</label>
            <input
              type="text"
              id="fullNames"
              name='fullNames'
              {...register("fullNames", { required: true })}
              className="form-input mt-1 block w-full rounded-lg border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
            name='email'
            autoComplete="email"
              {...register("email")}
           
              className="form-input mt-1 block w-full rounded-lg border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              name='password'
              autoComplete="new-password"
              {...register("password")}
              className="form-input mt-1 block w-full rounded-lg border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
             name='confirmPassword'
             autoComplete="password"
              {...register("confirmPassword")}
              className="form-input mt-1 block w-full rounded-lg border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
             name='phoneNumber'
              {...register("phoneNumber")}
              className="form-input mt-1 block w-full rounded-lg border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-700">Gender:</label>
            <input
              type="text"
              id="gender"
             name='gender'
              {...register("gender")}    
              className="form-input mt-1 block w-full rounded-lg border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Image" className="block text-gray-700">Profile Image:</label>
            <input
              type="file"
              id="image"
              accept='image/*'
              name='image'
              {...register("image")}
              className="form-input mt-1 block w-full rounded-lg border-gray-300"
            />
          </div>
          {/* {error && <div className="text-red-500 mb-4">{error}</div>} */}
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">Signup</button>
          <div className="mt-4">
            <span className="text-gray-600">Already have an account?</span>
            <a href="/login" className="text-blue-500 ml-2">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
