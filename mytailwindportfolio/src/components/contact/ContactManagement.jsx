import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { MdVisibility, MdEdit, MdDelete, MdClose } from 'react-icons/md'


function Contact ({ contact }) {
  const { _id, name, email, subject, telephone, message, dateSent } = contact
  return (
    <tr className='contact'>
      <td>
        {name}
      </td>
      <td>
        {email}
      </td>
      <td>
        {subject}
      </td>
      <td>
        {telephone}
      </td>
      <td>
        {message}
      </td>
      <td>
        {dateSent}
      </td>
      <td className='actions'>
        <button onClick={() => handleView(_id)}>
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
function ContactsManagement () {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  let url = 'http://localhost:3330'
  const [contacts, setContacts] = useState([])

  const fetchContacts = async () => {
    try {
      console.log('hi')
      const response = await axios.get(`${url}/contact/getAllContacts`)
      setContacts(response.data.data) // Assuming response.data is the correct structure
      console.log('hell', response.data)
    } catch (error) {
      console.error('Error fetching contatcs:', error)
      // Handle error if necessary
    }
  }
  //   fetchContacts();
  useEffect(() => {
    fetchContacts()
  }, [])
  const currentContacts = contacts.slice(indexOfFirstItem, indexOfLastItem)
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className='contatcs list-of-items-container'>
      <h1>List of conatcs</h1>
      <button className='add-button'>add contact</button>
      <table className='contacts-table table'>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>subject</th>
            <th>telphone</th>
            <th>message</th>
            <th>dateSent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentContacts.map(contact =>
            <Contact key={contact._id} contact={contact} />
          )}
        </tbody>
      </table>

      <div className='pagination'>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastItem >= contacts.length}
        >
          Next
        </button>
      </div>
    </div>
  )
}
export default ContactsManagement
