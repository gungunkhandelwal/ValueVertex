import { Box, TextField, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import Navbar from "./Navbar";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";


const AddTask = () => {
    const [taskData, setTaskData] = useState('');
    const title=useRef('');
    const description=useRef('');
    const navigate=useNavigate();

    const handleChange = (e) => {
        setTaskData({ ...taskData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const titleElement=title.current.value;
        const descriptionElement=description.current.value;
        // Get the token from local storage
        const token = localStorage.getItem("token");

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/task/",
                {
                 title:titleElement,
                 description:descriptionElement
                },
                {
                    headers: {
                        Authorization: `Token ${token}`, // Assuming you're using token auth
                        "Content-Type": "application/json",
                    },
                }
            );
            // console.log("Task created successfully:", response.data);
            setTaskData(response.data);
            navigate('/home');
        } catch (error) {
            console.error("Error creating task:", error.response ? error.response.data : error.message);
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
                <form onSubmit={handleSubmit} style={{ width: "90%",marginLeft:'2rem' }}>
                    <TextField
                        label="Title"
                        name="title"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        ref={title}
                        

                    />
                    <TextField
                        label="Description"
                        name="description"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                        ref={description}

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
                        Add Task
                    </Button>
                </form>

            </Box>
        </>
    )

}

export default AddTask;