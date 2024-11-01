import {API_URL} from '../config';

// Add Job
export const addJob = async (newJob) => {
  const res = await fetch(`${API_URL}/jobs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newJob),
  });
  return res.json();
   
};

// Delete Job
export const deleteJob = async (id) => {
  console.log("api url",API_URL);
  const res = await fetch(`${API_URL}/jobs/${id}`, {
    method: 'DELETE',
  });
  return res.json(); // Return response data if needed
};

// Update Job
export const updateJob = async (job) => {
  const res = await fetch(`${API_URL}/jobs/${job.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job),
  });
  return res.json(); // Return response data if needed
};
