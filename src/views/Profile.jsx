import React from 'react'
import MyProfile from '../assets/MyProfile.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, AppBar, Toolbar, Typography, Button, Avatar, Fab } from '@mui/material'
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom';


function Profile() {
    return (
        <>
            {/* Navigation */}
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static' sx={{ backgroundColor: 'black', height: '96px', justifyContent: 'center' }}>
                    <Toolbar>
                        <Typography sx={{ flexGrow: 1, fontSize: '32px', color: '#C7C7C7', ml: '250px' }}>
                            SATJATUM KAOSAWANG
                        </Typography>
                        <Typography sx={{ fontSize: '16px', color: '#C7C7C7', fontFamily: 'Inter', mr: '32px' }}>
                            Work
                        </Typography>
                        <Typography sx={{ fontSize: '16px', color: '#C7C7C7', fontFamily: 'Inter', mr: '32px' }}>
                            About
                        </Typography>
                        <Typography sx={{ fontSize: '16px', color: '#C7C7C7', fontFamily: 'Inter', mr: '230px' }}>
                            Contact
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>

            {/* Content */}
            <Box sx={{ bgcolor: 'black', display: 'flex', borderBottom: '1px solid #484848', }}>
                <Box sx={{ ml: '310px', my: '210px' }}>
                    <Box sx={{ width: '580px' }}>
                        <Typography sx={{ fontSize: '101px', color: 'white', lineHeight: 1 }}>
                            HI, I AM
                        </Typography>
                        <Typography sx={{ fontSize: '101px', color: 'white', lineHeight: 1 }}>
                            SATJATUM K.
                        </Typography>
                        <Typography sx={{ fontSize: '18px', fontFamily: 'Manrope', color: '#C7C7C7' }}>
                            นักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์จากประเทศไทย ที่มีความหลงใหลในการสร้าง เว็บไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้
                        </Typography>
                        <Button variant='contained' sx={{ fontSize: '16px', fontFamily: 'Manrope', fontWeight: 'bold', color: 'black', bgcolor: '#d3e07A', width: '187px', height: '54px', borderRadius: '100px', my: '40px', gap: '12px', }}>
                            Contact Me <ArrowOutwardIcon />
                        </Button>
                        <Fab sx={{ bgcolor: '#222222', mx: '16px' }}>
                            <LinkedInIcon sx={{ color: '#d3e07A' }} />
                        </Fab>
                        <Fab sx={{ bgcolor: '#222222' }}>
                            <GitHubIcon sx={{ color: '#d3e07A' }} />
                        </Fab>
                    </Box>
                </Box>
                <Box>
                    <Avatar variant='square' src={MyProfile} sx={{ width: '571.21px', height: '667px', my: '52px', ml: '60px', borderRadius: '20px' }} />
                </Box>
            </Box>




            {/* About */}
            <Box sx={{ bgcolor: 'black', borderBottom: '1px solid #484848' }}>
                <Box sx={{ display: 'flex', }}>
                    <Box sx={{ ml: '330px', my: '50px' }}>
                        <Box sx={{ width: '307px' }}>
                            <Typography sx={{ fontSize: '101px', color: 'white' }}>
                                ABOUT ME
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ ml: '200px', my: '100px' }}>
                        <Box sx={{ width: '720px' }}>
                            <Typography sx={{ fontSize: '32px', fontFamily: 'Manrope', color: 'white', lineHeight: '140%' }}>
                                ผมเป็นนักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์ที่ทำงานอยู่ใน กรุงเทพฯ กำลังมองหาโอกาสที่น่าตื่นเต้นในการทำงาน มีพื้นฐานการศึกษาด้านวิศวกรรมซอฟต์แวร์
                            </Typography>
                            <Typography sx={{ fontSize: '18px', fontFamily: 'Manrope', color: '#C7C7C7', lineHeight: '150%' }}>
                                ชอบให้ความสำคัญกับการเข้าถึง (accessibility) เมื่อพัฒนาเว็บไซต์ มีความกระตือรือร้นและอยากรู้ อยากเห็นเกี่ยวกับการแก้ปัญหาต่างๆ ปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ React.js และการออกแบบ เว็บไซต์เล็กน้อยเมื่อไม่ได้เขียนโปรแกรม ดิฉัน/ผมชอบเล่นฟุตบอล ถ่ายภาพ และเล่นเกม FIFA, Diablo กำลังเรียนรู้เพิ่มเติมเพื่อพัฒนาทักษะอยู่เสมอ
                            </Typography>
                            <Button variant='contained' sx={{ fontSize: '16px', fontFamily: 'Manrope', fontWeight: 'bold', color: 'black', bgcolor: '#d3e07A', width: '244px', height: '54px', borderRadius: '100px', my: '40px', gap: '12px', }}>
                                DOWNLOAD RESUME<ArrowOutwardIcon />
                            </Button>
                            <Fab sx={{ bgcolor: '#222222', mx: '16px' }}>
                                <LinkedInIcon sx={{ color: '#d3e07A' }} />
                            </Fab>
                            <Fab sx={{ bgcolor: '#222222' }}>
                                <GitHubIcon sx={{ color: '#d3e07A' }} />
                            </Fab>
                        </Box>
                    </Box>
                </Box>
            </Box>




            {/*  My Capabilities */}
            <Box sx={{ bgcolor: 'black', borderBottom: '1px solid #484848' }}>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ ml: '330px', my: '100px' }}>
                        <Box sx={{ width: '618.5px' }}>
                            <Typography sx={{ fontSize: '76px', color: 'white' }}>
                                My Capabilities
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ my: '115px' }}>
                        <Box sx={{ width: '618.5px' }}>
                            <Typography sx={{ fontSize: '17px', color: '#C7C7C7', fontFamily: 'Manrope' }}>
                                ผมมองหาโอกาสในการเพิ่มทักษะใหม่ๆ อยู่เสมอ ทั้งการพัฒนาฟรอนท์เอนด์ แบล็กเอนต์ การออกแบบ UX/UI ฐานข้อมูล
                            </Typography>
                            <Box sx={{ my: '25px' }}>
                                <Button variant='outlined' color="#484848" sx={{ color: 'white', borderRadius: '100px', fontSize: '16px', width: '124px', height: '56px', mr: '16px', my: '16px', fontFamily: 'Manrope' }}>
                                    HTML
                                </Button>
                                <Button variant='outlined' color="#484848" sx={{ color: 'white', borderRadius: '100px', fontSize: '16px', width: '124px', height: '56px', mr: '16px', fontFamily: 'Manrope' }}>
                                    CSS
                                </Button>
                                <Button variant='outlined' color="#484848" sx={{ color: 'white', borderRadius: '100px', fontSize: '16px', width: '175px', height: '56px', mr: '16px', fontFamily: 'Manrope' }}>
                                    JAVASCRIPT
                                </Button>
                                <Button variant='outlined' color="#484848" sx={{ color: 'white', borderRadius: '100px', fontSize: '16px', width: '124px', height: '56px', mr: '16px', fontFamily: 'Manrope' }}>
                                    FLUTTER
                                </Button>
                                <Button variant='outlined' color="#484848" sx={{ color: 'white', borderRadius: '100px', fontSize: '16px', width: '124px', height: '56px', mr: '16px', fontFamily: 'Manrope' }}>
                                    DART
                                </Button>
                                <Button variant='outlined' color="#484848" sx={{ color: 'white', borderRadius: '100px', fontSize: '16px', width: '124px', height: '56px', mr: '16px', fontFamily: 'Manrope' }}>
                                    IoT
                                </Button>
                                <Button variant='outlined' color="#484848" sx={{ color: 'white', borderRadius: '100px', fontSize: '16px', width: '124px', height: '56px', mr: '16px', fontFamily: 'Manrope' }}>
                                    REACT
                                </Button>
                                <Button variant='outlined' color="#484848" sx={{ color: 'white', borderRadius: '100px', fontSize: '16px', width: '124px', height: '56px', mr: '16px', fontFamily: 'Manrope' }}>
                                    DATABASE
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>


            {/* MY EXPERIENCE */}
            <Box sx={{ bgcolor: 'black', borderBottom: '1px solid #484848' }}>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ ml: '330px', my: '100px' }}>
                        <Box sx={{ width: '580px' }}>
                            <Typography sx={{ fontSize: '76px', color: 'white' }}>
                                My Experience
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ my: '115px', mx: '30px' }}>
                        <Box sx={{ width: '580px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', my: '16px' }}>
                                <Typography sx={{ fontSize: '24px', color: 'white', fontFamily: 'Manrope' }}>
                                    Freelance Developer
                                </Typography>
                                <Typography sx={{ fontSize: '18px', color: '#C7C7C7', fontFamily: 'Manrope' }}>
                                    Nov 2023 — Present
                                </Typography>
                            </Box>
                            <Typography sx={{ fontSize: '18px', color: '#C7C7C7', fontFamily: 'Manrope' }}>
                                พัฒนาและปรับปรุงส่วนติดต่อผู้ใช้สำหรับเว็บแอปพลิเคชันโดยใช้ React.js
                                ทำงานร่วมกับทีมออกแบบ UX/UI เพื่อสร้างประสบการณ์ผู้ใช้ที่น่าประทับใจ
                                ปรับปรุงความเร็วในการโหลดเว็บไซต์ด้วยเทคนิคการเพิ่มประสิทธิภาพต่างๆ
                                ร่วมพัฒนาและดูแลไลบรารีคอมโพเนนต์ภายในองค์กร
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', my: '16px' }}>
                                <Typography sx={{ fontSize: '24px', color: 'white', fontFamily: 'Manrope' }}>
                                    Front-End Intern
                                </Typography>
                                <Typography sx={{ fontSize: '18px', color: '#C7C7C7', fontFamily: 'Manrope' }}>
                                    Sep 2023 — Nov 2023
                                </Typography>

                            </Box>
                            <Typography sx={{ fontSize: '18px', color: '#C7C7C7', fontFamily: 'Manrope', }}>
                                พัฒนาเว็บไซต์ลูกค้าโดยใช้ HTML, CSS และ JavaScript
                            </Typography>
                            <Typography sx={{ fontSize: '18px', color: '#C7C7C7', fontFamily: 'Manrope', }}>
                                ช่วยปรับปรุงการเข้าถึง (Accessibility) ของเว็บไซต์ให้สอดคล้องกับมาตรฐาน WCAG
                            </Typography>
                            <Typography sx={{ fontSize: '18px', color: '#C7C7C7', fontFamily: 'Manrope', }}>
                                ทำงานร่วมกับทีมแบ็คเอนด์เพื่อเชื่อมต่อ API
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* LET'S CONNECT */}
            <Box sx={{ bgcolor: 'black', borderBottom: '1px solid #484848' }}>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ ml: '330px', my: '100px' }}>
                        <Box sx={{ width: '627.5px' }}>
                            <Typography sx={{ fontSize: '76px', color: 'white' }}>
                                LET'S CONNECT
                            </Typography>
                            <Typography sx={{ fontSize: '18px', color: '#C7C7C7', fontFamily: 'Manrope' }}>
                                Say hello at <Link> S6752D1006@sau.ac.th</Link>
                            </Typography>
                            <Typography sx={{ fontSize: '18px', color: '#C7C7C7', fontFamily: 'Manrope' }}>
                                For more info, here's my <Link> resume</Link>
                            </Typography>
                        </Box>
                        <Box sx={{ my: '40px' }}>
                            <LinkedInIcon sx={{ color: '#d3e07A', mr: '24px', fontSize: '32px' }} />
                            <GitHubIcon sx={{ color: '#d3e07A', mr: '24px', fontSize: '32px' }} />
                            <XIcon sx={{ color: '#d3e07A', mr: '24px', fontSize: '32px' }} />
                            <InstagramIcon sx={{ color: '#d3e07A', mr: '24px', fontSize: '32px' }} />
                        </Box>
                        <Typography sx={{ fontSize: '16px', color: '#C7C7C7', fontFamily: 'Manrope', mt: '430px' }}>
                            © 2025 Satjatum Kaosawang
                        </Typography>
                    </Box>

                    <Box sx={{ my: '100px' }}>
                        <Box>
                            <Typography sx={{ fontSize: '16px', color: '#C7C7C7', fontFamily: 'Manrope', my: '20px' }}>
                                Name
                            </Typography>
                            <TextField variant="outlined" sx={{ bgcolor: '#1A1A1A', width: '627.5px' }}></TextField>
                        </Box>
                        <Box sx={{ my: '30px' }}>
                            <Typography sx={{ fontSize: '16px', color: '#C7C7C7', fontFamily: 'Manrope', my: '20px' }}>
                                Email
                            </Typography>
                            <TextField variant="outlined" sx={{ bgcolor: '#1A1A1A', width: '627.5px' }}></TextField>
                        </Box>
                        <Box sx={{ my: '30px' }}>
                            <Typography sx={{ fontSize: '16px', color: '#C7C7C7', fontFamily: 'Manrope', my: '20px' }}>
                                Subject
                            </Typography>
                            <TextField variant="outlined" sx={{ bgcolor: '#1A1A1A', width: '627.5px' }}></TextField>
                        </Box>
                        <Box sx={{ my: '30px' }}>
                            <Typography sx={{ fontSize: '16px', color: '#C7C7C7', fontFamily: 'Manrope', my: '20px' }}>
                                Message
                            </Typography>
                            <TextField variant="outlined" sx={{ bgcolor: '#1A1A1A', width: '627.5px', height: '156px' }}></TextField>
                        </Box>
                        <Button variant='contained' sx={{ fontSize: '16px', fontFamily: 'Manrope', fontWeight: 'bold', color: 'black', bgcolor: '#d3e07A', width: '140px', height: '54px', borderRadius: '100px', my: '30px', }}>
                            SUBMIT
                        </Button>
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default Profile