import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { uploadJobAPI } from './API_servers/allAPI'
const Add = () => {
  
  const [error , setError] = useState('')
  const [jTitle,setJtitle] = useState('')
  const [jQualification,setJqualification] = useState('')
  const [jSal ,setJsal ] = useState('')
  const [jResume,setJresume] = useState('')
  const Navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!jTitle || jResume || jQualification || jSal){
        setError("please fill the form completely !!!...")
    }
    const newJob = {jTitle,jQualification,jSal,jResume};
    await uploadJobAPI(newJob);
    Navigate('/');
  } 
  return (
    <>
      
    <div className="container border rounded shadow mt-5" style={{maxWidth:'500px'}}>
        <input onChange={(e)=>setJtitle(e.target.value)} className='form-control my-3' value={jTitle} type="text" name="" placeholder=' Job title' id="" />
        <input onChange={(e)=>setJqualification(e.target.value)}  className='form-control mb-3'value={jQualification}  type="text" placeholder='Qualification' />
        <input onChange={(e)=>setJsal(e.target.value)}  className='form-control mb-3' value={jSal}  type="text" placeholder='Salary' />
        <input onChange={(e)=>setJresume(e.target.value)}  className='form-control mb-3'value={jResume}  type="text" placeholder=' Company Email' />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button onClick={handleSubmit} type='submit' className='form-control btn btn-success mb-3'>Upload </button>
    </div>
    </>
  )
}

export default Add