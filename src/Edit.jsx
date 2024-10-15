import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editAPI, getSingleJobAPI } from './API_servers/allAPI';

const Edit = () => {
  const { id } = useParams();  // Extract the job ID from URL parameters
  const [error, setError] = useState('');
  const [jTitle, setJtitle] = useState('');
  const [jQualification, setJqualification] = useState('');
  const [jSal, setJsal] = useState('');
  const [jResume, setJresume] = useState('');
  const navigate = useNavigate();

  // Fetch job details when component loads
  useEffect(() => {
    const getAllJobDetails = async () => {
      try {
        const job = await getSingleJobAPI(id);
        setJtitle(job.data.jTitle);  // Accessing data from API
        setJqualification(job.data.jQualification);
        setJsal(job.data.jSal);
        setJresume(job.data.jResume);
      } catch (err) {
        setError('Failed to fetch job details');
      }
    };
    getAllJobDetails();
  }, [id]);

  //  update job details
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!jTitle || !jQualification || !jSal || !jResume) {
      setError('Please fill out the form completely!');
      return;
    }

    const updateDetails = { jTitle, jQualification, jSal, jResume };
    try {
      await editAPI(id, updateDetails);
      navigate('/');
    } catch (err) {
      setError('Failed to update job details');
    }
  };

  return (
    <div className="container border rounded shadow mt-5" style={{ maxWidth: '500px' }}>
      <input 
        onChange={(e) => setJtitle(e.target.value)} 
        className="form-control my-3" 
        value={jTitle} 
        type="text" 
        placeholder="Job title" 
      />
      <input 
        onChange={(e) => setJqualification(e.target.value)} 
        className="form-control mb-3" 
        value={jQualification} 
        type="text" 
        placeholder="Qualification" 
      />
      <input 
        onChange={(e) => setJsal(e.target.value)} 
        className="form-control mb-3" 
        value={jSal} 
        type="text" 
        placeholder="Salary" 
      />
      <input 
        onChange={(e) => setJresume(e.target.value)} 
        className="form-control mb-3" 
        value={jResume} 
        type="text" 
        placeholder="Company Email" 
      />
      {error && <p className="text-center text-danger">{error}</p>}
      <button 
        onClick={handleSubmit} 
        className="form-control btn btn-success mb-3"
      >
        Update
      </button>
    </div>
  );
};

export default Edit;
