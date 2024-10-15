import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteJobAPI, editAPI, getJobs } from './API_servers/allAPI'

const View = () => {
  const [jobs, setJobs] = useState([])

  // Fetch all job details
  const getAllJobs = async () => {
    const result = await getJobs();
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setJobs(result.data);
    }
  }

  // Use useEffect to call getAllJobs when component mounts
  useEffect(() => {
    getAllJobs();
  }, []); // Empty dependency array ensures it runs only once


  const removeDetails = async (Id)=>{
    await deleteJobAPI(Id)
    getAllJobs()
  }
  
  return (
    <div>
      <Link to="/add" className='fw-bolder ms-5' id='link'>Add Employee</Link>
      <table className="container ps-4 mt-4 justify-content-evenly align-items-center shadow">
        <thead>
          <tr>
            <th>id</th>
            <th>Job Title</th>
            <th>Salary</th>
            <th>Qualification</th>
            <th>Send Resume</th>
          </tr>
        </thead>
        <tbody>
          {
            jobs.map((jobdetails) => (
              <tr key={jobdetails.id}>
                <td>{jobdetails.id}</td>
                <td>{jobdetails.jTitle}</td>
                <td>{jobdetails.jSal}</td>
                <td>{jobdetails.jQualification}</td>
                <td>{jobdetails.jResume}</td>
                <td>
                  <Link to={`/${jobdetails.id}/Edit`}>Edit</Link>
                  <button onClick={()=>removeDetails(jobdetails.id)} className='btn ms-5'>
                    <i className="fa-solid fa-trash text-danger"></i>
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default View
