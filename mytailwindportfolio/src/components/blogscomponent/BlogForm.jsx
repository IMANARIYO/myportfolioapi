import React from 'react'
import axios from 'axios'
import { MdClose } from 'react-icons/md'
import '../../styles/forms.css'
import { useForm } from 'react-hook-form'
function BlogForm ({ handleClose, BlogToUpdate, handleReload }) {
  const { register, handleSubmit, formState: { errors } , setValue } = useForm()

  const topost = async data => {
    const { title, category, description,  readmin } = data
    const formData = new FormData()
    formData.append('title', title)
    formData.append('category', category)
    formData.append('description', description)
    formData.append('image', data.image[0]) 
    formData.append('readmin', readmin)
 

    try {
      const url = 'http://localhost:3330'
      let response;
      if (BlogToUpdate) {
        // If updating a blog
        console.log(BlogToUpdate._id);
        response = await axios.put(
          `${url}/Blogs/updateBlog/${BlogToUpdate._id}`, // Update URL with Blog ID
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );
        console.log("see---",response.data.data)
        handleClose();
      }

else{
    const response = await axios.post(`${url}/Blogs/createBlog`, formData,{headers:{
        'Content-Type':'multipart/form-data'
      }})
      
       handleClose();
}   
       handleReload();
      console.log("here is the response",response) // Assuming you want to log the response data
    } catch (error) {
      console.error('Error:', error)
    }
  }
  React.useEffect(() => {
    if (BlogToUpdate) {
      setValue('title', BlogToUpdate.title);
      setValue('category', BlogToUpdate.category);
      setValue('description', BlogToUpdate.description);
      setValue('readmin', BlogToUpdate.readmin);
    }
  }, [BlogToUpdate, setValue]);

  return (
    <div className='form-overlay'>
      <div className="form-container">
      <div className='form-header'>
          <h2>
            {BlogToUpdate ? 'Update blog' : 'Add blog'}
          </h2>

          <button className='close-button' onClick={handleClose}>
            <MdClose />
          </button>
        </div>
        {BlogToUpdate && BlogToUpdate.image && (
            <img  className="image-preview"src={BlogToUpdate.image} alt="Blog Image" />
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
        
  
        <label htmlFor='title'
        className='add-update-form-label'>Title:
         <input type='text' id='title' name='title'
         {...register("title")}
        /></label>
      
     

        <label 
        className='add-update-form-label'
        htmlFor='description'>Description:
         <textarea
          id='description'
          name='description'
          {...register("description")}
        />
        </label>
      
        <label 
        className='add-update-form-label'
        htmlFor='category'>Category:</label>
        <input type='text' id='category' name='category'
          {...register("category")} />
        <label 
        className='add-update-form-label'
        htmlFor='readmin'>Readmin:
          <input type='text' id='readmin' name='readmin'
          {...register("readmin")}/></label>
       
       <button className='add-update-form-button' type='submit'>
            {BlogToUpdate ? 'Update' : 'Add'}
          </button>
      </form>


        </div>  
    </div>
  )
}

export default BlogForm
