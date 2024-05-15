import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import BlogsContext from './BlogsContext'
import { MdVisibility, MdEdit, MdDelete } from 'react-icons/md'

import './singleblog.css'
import BlogForm from './BlogForm'
import Singleblogmodal from './blogcard'
import BlogModalContent from './BlogModalContent'
function Blog ({ blog, handleEdit, handleDelete, handleView }) {
  const {
    _id,
    title,
    likes,
    image,
    category,
    createdAt,
    comments,
    readmin
  } = blog

  return (
    <tr className='blog'>
      <td>
        <img className='user-image' src={image} alt={title} />
      </td>
      <td>
        {title}
      </td>
      <td>
        {category}
      </td>
      <td>
        {readmin}
      </td>
      <td>
        {likes}
      </td>
      <td>
        {createdAt}
      </td>
      <td>
        {comments.length}
      </td>
      <td className='blog actions'>
        <button onClick={() => handleView(blog)}>
          <MdVisibility />
        </button>

        <button onClick={() => handleEdit(_id)}>
          <MdEdit />
        </button>

        <button onClick={() => handleDelete(_id)}>
          <MdDelete />
        </button>
      </td>
    </tr>
  )
}

function Blogsmanagement () {
  const { blogs, setBlogs } = useContext(BlogsContext) // Retrieve blogs from context

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [blogToUpdate, setBlogToUpdate] = useState(null)
  const [selectedBlog, setSelectedBlog] = useState(null) // State to store the selected blog data
  const [modal, setModalOpen] = useState(false) // State to manage the modal visibility

  const handleEdit = blogId => {
    const blog = blogs.find(blog => blog._id === blogId)
    setBlogToUpdate(blog)
    setIsFormOpen(true) // Open form in edit mode
  }

  const handleDelete = async _id => {
    try {
      await axios.delete(`http://localhost:3330/Blogs/deleteBlog/${_id}`)
      // Update blogs state after deletion
      setBlogs(blogs.filter(blog => blog._id !== _id))
      alert(`Blog with ID ${_id} deleted successfully`)
    } catch (error) {
      console.log(`Error deleting blog with ID ${_id}:`, error.message)
    }
  }
  const handleView = blog => {
    setSelectedBlog(blog)
    setModalOpen(true) // Open modal when viewing a blog
  }
  const handleCloseModal = () => {
    setModalOpen(false) // Close modal
  }

  const handleAddSection = () => {
    setIsFormOpen(true)
    setBlogToUpdate(null)
  }

  const handleReload = () => {
    window.location.reload()
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
  }

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentBlogs = blogs.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className='Blogs list-of-items-container'>
      <h1>List of Blogs</h1>
      <button className='add-button' onClick={handleAddSection}>
        Add blog
      </button>

      {isFormOpen &&
        <BlogForm
          handleClose={handleCloseForm}
          BlogToUpdate={blogToUpdate}
          handleReload={handleReload}
        />}

      <table className='blogs table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Readmin</th>
            <th>Likes</th>
            <th>Created At</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentBlogs.map(blog =>
            <Blog
              key={blog._id}
              blog={blog}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleView={handleView}
            />
          )}
        </tbody>
      </table>

      {modal &&
        <BlogModalContent
          handleClose={handleCloseModal}
          props={selectedBlog}
        />}
      <div className='pagination'>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastItem >= blogs.length}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Blogsmanagement
