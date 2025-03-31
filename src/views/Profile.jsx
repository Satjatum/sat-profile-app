import React from 'react'
import MyProfile from '../assets/MyProfile.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Box, AppBar, Toolbar, Typography, Button, Avatar, Fab } from '@mui/material'


function Profile() {
    return (
        <>
            {/* Navbar */}
            <AppBar position='static' sx={{ backgroundColor: 'black' }}>
                <Toolbar>
                    <Typography sx={{ ml: '10px', flexGrow: 1 }}>Satjatum Kaosawang</Typography>
                    <Typography sx={{ mr: '30px', textDecoration: 'none', color: 'white' }}>Work</Typography>
                    <Typography sx={{ mr: '30px', textDecoration: 'none', color: 'white' }}>About</Typography>
                    <Typography sx={{ mr: '30px', textDecoration: 'none', color: 'white' }}>Contact</Typography>
                </Toolbar>
            </AppBar>

            {/* Content */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', bgcolor: 'black' }}>
                <Box sx={{ mx: '100px', my: '250px' }}>
                    <Typography variant='h3' sx={{ color: 'white' }} >HI,I AM</Typography>
                    <Typography variant='h3' sx={{ color: 'white' }}>Satjatum</Typography>
                    <Typography sx={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, culpa!</Typography>

                    <Button variant="contained" size="large" endIcon={<FiberManualRecordIcon />} sx={{ borderRadius: '50px', mr: '20px', my: '30px', color: 'black', bgcolor: '#d3e97a' }}>
                        Contact Me
                    </Button>

                    <Fab size="medium" sx={{ mr: '20px', color: '#d3e97a', bgcolor: '#222222' }}>
                        <LinkedInIcon />
                    </Fab>

                    <Fab size="medium" sx={{ color: '#d3e97a', bgcolor: '#222222' }}>
                        <GitHubIcon />
                    </Fab>
                </Box>

                <Box sx={{ mx: 'auto', my: '100px' }}>
                    <Avatar variant="square" src={MyProfile} sx={{ width: '572.21px', height: '667px', boxShadow: 3, borderRadius: 2 }} />
                </Box>

            </Box >
        </>
    )
}

export default Profile