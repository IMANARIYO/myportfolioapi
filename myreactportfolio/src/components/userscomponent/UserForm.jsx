import React from 'react'
import { MdClose } from 'react-icons/md'
import axios from 'axios'
import './UserForm.css'
import { useForm } from 'react-hook-form'
function UserForm ({ handleClose, userToUpdate, handleReload }) {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm()

  const onSubmit = async data => {
    try {
      console.log("trying to post the datass")
      const formData = new FormData()
      formData.append('fullNames', data.fullNames)
      formData.append('phoneNumber', data.phoneNumber)
      formData.append('password', data.password)
      formData.append('image', data.image[0])
      formData.append('role', data.role)
      formData.append('email', data.email)
      formData.append('gender', data.gender)
      let response
      let url='http://localhost:3330'
      if (userToUpdate) {
     console.log(userToUpdate._id)
        response = await axios.patch(
          `${url}/auth/updateUserById/${userToUpdate._id}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )
        handleClose()
      } else {
        console.log("inposting users",data.email)
        response = await axios.post(
          `${url}/auth/signup`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )
        console.log("aftwr",response.data)
        handleClose()
      }
      handleReload()
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(
    () => {
      if (userToUpdate) {
        Object.entries(userToUpdate).forEach(([key, value]) => {
          setValue(key, value)
        })
      }
    },
    [userToUpdate, setValue]
  )

  return (
    <div className='form-overlay'>
      <div className='form-container'>
        <div className='form-header'>
          <h2>
            {userToUpdate ? 'Update User' : 'Add User'}
          </h2>

          <button className='close-button' onClick={handleClose}>
            <MdClose />
          </button>
        </div>
        <form className='add-update-form' onSubmit={handleSubmit(onSubmit)}>
          <label className='add-update-form-label'>
            Full Name:
            <input
              className='add-update-form-input'
              type='text'
              name='fullNames'
              {...register('fullNames', {
                required: true
              })}
            />
            {errors.fullNames && <p>this field is required</p>}
          </label>
          <label className='add-update-form-label'>
            Phone Number:
            <input
              className='add-update-form-input'
              type='text'
              name='phoneNumber'
              {...register('phoneNumber', {
                required: true
              })}
            />
          </label>
          <label className='add-update-form-label'>
            Image:
            <input
              className='add-update-form-input'
              type='file'
              accept='image/*'
              name='image'
              {...register('image', {
                required: true
              })}
            />
          </label>
          <label className='add-update-form-label'>
            Role:
            <input
              className='add-update-form-input'
              type='text'
              name='role'
              {...register('role', {
                required: true
              })}
            />
          </label>
          <label className='add-update-form-label'>
            Email:
            <input
              className='add-update-form-input'
              type='email'
              name='email'
              {...register('email', {
                required: true
              })}
            />
          </label>
          <label className='add-update-form-label'>
            Password:
            <input
              className='add-update-form-input'
              type='password'
              name='password'
              {...register('password', {
                required: true
              })}
            />
          </label>
          <label className='add-update-form-label'>
            Gender:
            <select
              className='add-update-form-input'
              name='gender'
              {...register('gender', {
                required: true
              })}
            >
              <option value=''>Select Gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          </label>
          <button className='add-update-form-button' type='submit'>
            {userToUpdate ? 'Update' : 'Add'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default UserForm
