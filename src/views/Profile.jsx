import React from 'react'
import MyProfile from '../assets/MyProfile.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Box, AppBar, Toolbar, Typography, Button, Avatar, Fab } from '@mui/material'
import { Link } from 'react-router-dom';


function Profile() {
    return (
        <>
            {/* Navigation */}
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static' sx={{ backgroundColor: 'black', height: '96px', justifyContent: 'center' }}>
                    <Toolbar>
                        <Typography sx={{ flexGrow: 1, fontSize: '32px' }}>
                            SATJATUM KAOSAWANG
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>

            {/* Content */}
            <Box sx={{ bgcolor: 'black', display: 'flex', justifyContent: 'space-between', borderBottom: 1 }}>
                <Box sx={{ width: '542px', mx: '108px', my: '74px' }}>
                    <Typography sx={{ color: 'white', fontSize: '101px' }}>
                        hi, i am SATJATUM S.
                    </Typography>
                    <Typography sx={{ color: 'white', fontSize: '16px' }}>
                        นักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์จากประเทศไทย ที่มีความหลงใหลในการสร้าง เว็บไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้
                    </Typography>
                    <Button variant="contained" sx={{ bgcolor: '#d3e07A', color: 'black', fontSize: '16px', borderRadius: '100px', my: '20px', mr: '16px' }}>
                        Contact Me
                    </Button>
                    <Fab sx={{ bgcolor: '#222222', color: '#d3e07A', mr: '16px' }}>
                        <LinkedInIcon />
                    </Fab>
                    <Fab sx={{ bgcolor: '#222222', color: '#d3e07A' }}>
                        <GitHubIcon />
                    </Fab>
                </Box>

                <Box>
                    <Avatar variant='square' src={MyProfile} sx={{ width: '571.21px', height: '667px', mr: '400px', my: '52px', borderRadius: '20px' }} />
                </Box>
            </Box>

            {/* About */}
            <Box sx={{ bgcolor: 'black', display: 'flex', justifyContent: 'space-between', borderBottom: 1 }}>
                <Box sx={{ mx: '108px', my: '74px' }}>
                    <Typography sx={{ color: 'white', fontSize: '101px' }}>
                        ABOUT ME
                    </Typography>
                </Box>
                <Box sx={{ mr: '250px', my: '52px', }}>
                    <Typography sx={{ color: 'white', fontSize: '32px', width: '704px' }}>
                        ผมเป็นนักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์ที่ทำงานอยู่ใน กรุงเทพฯ กำลังมองหาโอกาสที่น่าตื่นเต้นในการทำงาน มีพื้นฐานการศึกษาด้านวิศวกรรมซอฟต์แวร์
                    </Typography>
                    <Typography sx={{ color: 'white', fontSize: '18px', width: '704px' }}>
                        ชอบให้ความสำคัญกับการเข้าถึง (accessibility) เมื่อพัฒนาเว็บไซต์ มีความกระตือรือร้นและอยากรู้ อยากเห็นเกี่ยวกับการแก้ปัญหาต่างๆ ปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ React.js และการออกแบบ เว็บไซต์เล็กน้อยเมื่อไม่ได้เขียนโปรแกรม ดิฉัน/ผมชอบเล่นฟุตบอล ถ่ายภาพ และเล่นเกม FIFA, Diablo กำลังเรียนรู้เพิ่มเติมเพื่อพัฒนาทักษะอยู่เสมอ
                    </Typography>
                    <Button variant="contained" sx={{ bgcolor: '#d3e07A', color: 'black', fontSize: '16px', borderRadius: '100px', my: '20px', mr: '16px' }}>
                        Contact Me
                    </Button>
                    <Fab sx={{ bgcolor: '#222222', color: '#d3e07A', mr: '16px' }}>
                        <LinkedInIcon />
                    </Fab>
                    <Fab sx={{ bgcolor: '#222222', color: '#d3e07A' }}>
                        <GitHubIcon />
                    </Fab>
                </Box>
            </Box>
            {/* Image2 */}
            <Box sx={{ bgcolor: 'black' }}>
                <Avatar variant='square' src={MyProfile} sx={{ width: '1322px', height: '798px', borderRadius: '20px', mx: 'auto' }} />
            </Box>


            {/* About */}
            <Box sx={{ bgcolor: 'black', display: 'flex', justifyContent: 'space-between', borderBottom: 1 }}>
                <Box sx={{ mx: '108px', my: '74px' }}>
                    <Typography sx={{ color: 'white', fontSize: '101px' }}>
                        My Capabilities
                    </Typography>
                </Box>
                <Box sx={{ mr: '250px', my: '52px', }}>
                    <Typography sx={{ color: 'white', fontSize: '18px', width: '704px' }}>
                        ผมมองหาโอกาสในการเพิ่มทักษะใหม่ๆ อยู่เสมอ ทั้งการพัฒนาฟรอนท์เอนด์ แบล็กเอนต์ การออกแบบ UX/UI ฐานข้อมูล
                    </Typography>
                    <Button variant="contained" sx={{ bgcolor: '#d3e07A', color: 'black', fontSize: '16px', borderRadius: '100px', my: '20px', mr: '16px' }}>
                        HTML
                    </Button>
                    <Button variant="contained" sx={{ bgcolor: '#d3e07A', color: 'black', fontSize: '16px', borderRadius: '100px', my: '20px', mr: '16px' }}>
                        CSS
                    </Button>
                    <Button variant="contained" sx={{ bgcolor: '#d3e07A', color: 'black', fontSize: '16px', borderRadius: '100px', my: '20px', mr: '16px' }}>
                        JAVASCRIPT
                    </Button>
                    <Button variant="contained" sx={{ bgcolor: '#d3e07A', color: 'black', fontSize: '16px', borderRadius: '100px', my: '20px', mr: '16px' }}>
                        FLUTTER
                    </Button>
                    <Button variant="contained" sx={{ bgcolor: '#d3e07A', color: 'black', fontSize: '16px', borderRadius: '100px', my: '20px', mr: '16px' }}>
                        DART
                    </Button>
                    <Button variant="contained" sx={{ bgcolor: '#d3e07A', color: 'black', fontSize: '16px', borderRadius: '100px', my: '20px', mr: '16px' }}>
                        IOT
                    </Button>
                    <Button variant="contained" sx={{ bgcolor: '#d3e07A', color: 'black', fontSize: '16px', borderRadius: '100px', my: '20px', mr: '16px' }}>
                        REACT
                    </Button>
                    <Button variant="contained" sx={{ bgcolor: '#d3e07A', color: 'black', fontSize: '16px', borderRadius: '100px', my: '20px', mr: '16px' }}>
                        DATABASE
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Profile