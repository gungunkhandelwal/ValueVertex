import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function ViewTask() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem('token'); 
    if (token) {
      axios.get('http://127.0.0.1:8000/task/', {
        headers: {
          Authorization: `token ${token}` 
        }
      })
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the tasks!', error);
        setError('Unable to fetch tasks. Please make sure you are authenticated.');
      });
    } else {
      setError('No token found. Please log in.');
    }
  }, []);

  return (
    <TableContainer component={Paper} sx={{ marginTop: '2rem' }}>
      {error ? (
        <div style={{ padding: '20px', color: 'red' }}>{error}</div> // Show an error message if there's an issue
      ) : (
        <Table sx={{ minWidth: 650 }} aria-label="task table">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight:'bold'}}>Task Title</TableCell>
              <TableCell align="right" sx={{fontWeight:'bold'}} >Priority</TableCell>
              <TableCell align="right" sx={{fontWeight:'bold'}}>Due Date</TableCell>
              <TableCell align="right" sx={{fontWeight:'bold'}}>Status</TableCell>
              <TableCell align="right" sx={{fontWeight:'bold'}}>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.length > 0 ? tasks.map((task,index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {task.title}
                </TableCell>
                <TableCell align="right">{task.priority}</TableCell>
                <TableCell align="right">{new Date(task.due_date).toLocaleString()}</TableCell>
                <TableCell align="right">{task.status}</TableCell>
                <TableCell align="right" sx={{margin:'2px'}} >
                   <Button variant='outlined' sx={{margin:'4px'}}><Link >Edit</Link></Button> 
                   <Button variant='outlined'><Link >Delete</Link></Button> 
                </TableCell>
                
              </TableRow>
            )) : (
              <TableRow>
                <TableCell colSpan={4} align="center">No tasks available</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}
