import {API_URL} from '../config';

// Add Job
export const addJob = async (newJob) => {
  const res = await fetch('https://my-json-server.typicode.com/shahzaibdurranii/React-Jobs-Web/jobs', {
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
  const res = await fetch(`https://my-json-server.typicode.com/shahzaibdurranii/React-Jobs-Web/jobs/${id}`, {
    method: 'DELETE',
  });
  return res.json(); // Return response data if needed
};

// Update Job
export const updateJob = async (job) => {
  const res = await fetch(`https://my-json-server.typicode.com/shahzaibdurranii/React-Jobs-Web/jobs/${job.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job),
  });
  return res.json(); // Return response data if needed
};
