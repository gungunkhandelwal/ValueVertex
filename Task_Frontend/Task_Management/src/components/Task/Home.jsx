import { Box, Button, Divider, Typography } from "@mui/material";
import Navbar from "./Navbar";
import ViewTask from "./ViewTask";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Navbar />
            <Box
                sx={{
                    width: '97vw',
                    height: '85vh',
                    backgroundColor: 'white',
                    boxShadow: '4px 4px 20px rgba(0, 0, 0, 1)',
                    position: 'relative',
                    top: '10px',
                    left: '20px',
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                {/* Column 1 */}
                <Box
                    sx={{
                        flex: 1,
                        backgroundColor: '#f0f0f0',
                        padding: '20px',
                    }}
                >
                    <Typography variant="h4" component="div" sx={{ textAlign:'center'}}>
                        Task 
                    </Typography>
                    <Divider/>
                    <Button variant="outlined" sx={{marginTop:'2rem', marginLeft:'5rem'}}><Link to='/add_task' style={{textDecoration:'none'}} >Add Task</Link></Button>
                </Box>

                {/* Column 2 */}
                <Box
                    sx={{
                        flex: 3,
                        backgroundColor: '#e0e0e0',
                        padding: '20px',
                    }}
                >
                    <Typography variant="h4" component="div" sx={{ textAlign:'center' }}>
                        Your Task 
                    </Typography>   
                    <ViewTask />

                </Box>
            </Box>
        </>
    )

}

export default Home;