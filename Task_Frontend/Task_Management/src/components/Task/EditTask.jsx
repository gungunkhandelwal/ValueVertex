import { Box, TextField, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const EditTask = () => {
    const [taskData, setTaskData] = useState({
        title: '',
        description: '',
        priority: 'Medium',
        status: 'To Do',
        due_date: '',
    });

    const { id } = useParams(); 
    const navigate = useNavigate();

    // Handle input change for all form fields
    const handleChange = (e) => {
        setTaskData({ ...taskData, [e.target.name]: e.target.value });
    };

    // Handle form submission for editing the task
    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");

        try {
            const response = await axios.put(
                `http://127.0.0.1:8000/task/${id}/`, 
                taskData,
                {
                    headers: {
                        Authorization: `Token ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("Task updated successfully:", response.data);
            setTaskData(response.data);
            navigate('/home'); 
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    return (
        <>
            <Navbar />
            <Box
                sx={{
                    width: '95vw',
                    height: '90vh',
                    backgroundColor: 'white',
                    boxShadow: '4px 4px 20px rgba(0, 0, 0, 1)',
                    position: 'relative',
                    top: '10px',
                    left: '20px',
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <form onSubmit={handleSubmit} style={{ width: "90%", marginLeft: '2rem' }}>
                    <TextField
                        label="Title"
                        name="title"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={taskData.title} 
                        onChange={handleChange} 
                    />
                    
                    <TextField
                        label="Description"
                        name="description"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                        value={taskData.description}
                        onChange={handleChange} 
                    />

                    <FormControl fullWidth margin="normal">
                        <InputLabel>Priority</InputLabel>
                        <Select
                            name="priority"
                            value={taskData.priority} 
                            onChange={handleChange} 
                        >
                            <MenuItem value="Low">Low</MenuItem>
                            <MenuItem value="Medium">Medium</MenuItem>
                            <MenuItem value="High">High</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth margin="normal">
                        <InputLabel>Status</InputLabel>
                        <Select
                            name="status"
                            value={taskData.status}
                            onChange={handleChange} 
                        >
                            <MenuItem value="To Do">To Do</MenuItem>
                            <MenuItem value="In Progress">In Progress</MenuItem>
                            <MenuItem value="Completed">Completed</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        label="Due Date"
                        name="due_date"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="datetime-local"
                        InputLabelProps={{ shrink: true }}
                        value={taskData.due_date}
                        onChange={handleChange} 
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ marginTop: "1rem" }}
                        fullWidth
                    >
                        Update Task
                    </Button>
                </form>
            </Box>
        </>
    );
};

export default EditTask;
