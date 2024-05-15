import React from 'react'
import axios from 'axios'
import { MdClose } from 'react-icons/md'
import '../../styles/forms.css'
import { useForm } from 'react-hook-form'
function TestimonyForm ({ handleClose, TestimonyToUpdate, handleReload }) {
  const { register, handleSubmit, formState: { errors } , setValue } = useForm()

  const topost = async data => {
    const { name, contacts, maintestimony, image, rating } = data
    const formData = new FormData()
    formData.append('name', name)
    formData.append('contacts', contacts)
    formData.append('maintestimony', maintestimony)
    formData.append('image', data.image[0]) 
    formData.append('rating', rating)
 

    try {
      const url = 'http://localhost:3330'
      let response;
      if (TestimonyToUpdate) {
        console.log(TestimonyToUpdate._id);
        response = await axios.put(
          `${url}/Testimonys/updateTestimony/${TestimonyToUpdate._id}`, // Update URL with Testimony ID
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );
        handleClose();
      }

else{
    const response = await axios.post(`${url}/testimony/createTestimony`, formData,{headers:{
        'Content-Type':'multipart/form-data'
      }})
       handleClose();
      console.log("here is the response",response) // Assuming you want to log the response data
}   
       handleReload();
      console.log("here is the response",response) // Assuming you want to log the response data
    } catch (error) {
      console.error('Error:', error)
    }
  }
  React.useEffect(() => {
    if (TestimonyToUpdate) {
      setValue('name', TestimonyToUpdate.name);
      setValue('contacts', TestimonyToUpdate.contacts);
      setValue('maintestimony', TestimonyToUpdate.maintestimony);
      setValue('rating', TestimonyToUpdate.rating);
    }
  }, [TestimonyToUpdate, setValue]);

  return (
    <div className='form-overlay'>
      <div className="form-container">
      <div className='form-header'>
          <h2>
            {TestimonyToUpdate ? 'Update Testimony' : 'Add Testimony'}
          </h2>

          <button className='close-button'
           onClick={handleClose}
           >
            <MdClose />
          </button>
        </div>
        {TestimonyToUpdate && TestimonyToUpdate.image && (
            <img  className="image-preview"src={TestimonyToUpdate.image} alt="Testimony Image" />
          )}
      <form
      className='add-update-form'
       onSubmit={handleSubmit(topost)}>
        <label htmlFor='image'
        className='add-update-form-label'>Image URL:
        <input
  type='file'
  accept='image/*'
  name='image'
  {...register("image")}
//   onChange={(e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setValue('image', imageUrl); // Set the URL as the value
//     }
//   }}
/> 
        </label>
        <br />
        
  
        <label htmlFor='name'
        className='add-update-form-label'>name:
         <input type='text' id='name' name='name'
         {...register("name")}
        /></label>
      
     

        <label 
        className='add-update-form-label'
        htmlFor='maintestimony'>maintestimony:
         <textarea
          id='maintestimony'
          name='maintestimony'
          {...register("maintestimony")}
        />
        </label>
      
        <label 
        className='add-update-form-label'
        htmlFor='contacts'>contacts:</label>
        <input type='text' id='contacts' name='contacts'
          {...register("contacts")} />
        <label 
        className='add-update-form-label'
        htmlFor='rating'>rating:
          <input type='text' id='rating' name='rating'
          {...register("rating")}/></label>
       
       <button className='add-update-form-button' type='submit'>
            {TestimonyToUpdate ? 'Update' : 'Add'}
          </button>
      </form>


        </div>  
    </div>
  )
}

export default TestimonyForm
