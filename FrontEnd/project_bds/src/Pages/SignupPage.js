import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Style/LoginPage.css'
import { toast } from 'react-toastify';
import validator from 'validator';

function SignupPage() {

    const [requestUser, setRequestUser] = useState({
        username: '',
        password: '',
        email: ''
    })

    const handelSignup = () => {
        if (requestUser.username === null || requestUser.username === '') {
            toast.warning("Chưa nhập tên người dùng")
        } else if (requestUser.password === null || requestUser.password === '') {
            toast.warning("Chưa nhập mật khẩu")
        } else if (requestUser.email === null || requestUser.email === '') {
            toast.warning("Chưa nhập email")
        } else if ( ! validator.isEmail(requestUser.email)) {
            toast.warning("Định dạng email chưa hợp lệ")
        }
        // else if (requestUser.retypePassword === null || requestUser.retypePassword === '') {
        //     toast.warning("Chưa nhập xác nhận mật khẩu")
        // } 
        // else if (requestUser.password !== requestUser.retypePassword) {
        //     toast.warning("Mật khẩu chưa trùng")
        // }
        else toast.success("Đăng nhập thành công")
    }

    return (
        <div className='login-page'>
            <Box className='login-box'
                component="form"
                noValidate
                autoComplete="off"
            >
                <h1>Bất động sản</h1>
                <h2>Đăng ký</h2>
                <TextField
                    onChange={(e) => { requestUser.username = e.target.value }}
                    label="Tên người dùng"
                    variant="outlined"
                    margin="normal" />
                <TextField
                    onChange={(e) => { requestUser.password = e.target.value }}
                    label="Mật khẩu"
                    variant="outlined"
                    type='password'
                    margin="normal" />
                {/* <TextField
                    onChange={(e) => { requestUser.password = e.target.value }}
                    label="Xác nhận mật khẩu"
                    variant="outlined"
                    type='password'
                    margin="normal" /> */}
                <TextField
                    onChange={(e) => { requestUser.email = e.target.value }}
                    label="Email"
                    variant="outlined"
                    type='email-'
                    margin="normal" />
                {/* <Link>Quên mật khẩu</Link> */}
                <Button variant='contained' className='login-btn' onClick={() => { handelSignup() }}>Đăng ký</Button>
                {/* <div style={{ display: 'flex', width: '100%', margin: '1rem auto' }}>
                    <hr style={{ width: '25%', height: '0px', margin: 'auto', paddingRight: '5px' }} />
                    Hoặc đăng nhập bằng
                    <hr style={{ width: '25%', height: '0px', margin: 'auto', paddingLeft: '5px' }} />
                </div>
                <div>
                    <Button>Facebook</Button>
                    <Button>Google</Button>
                    <Button>AppleID</Button>
                </div> */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>Đã có tài khoản?
                    <Link to={'/'}>Đăng nhập ngay</Link>
                </div>
            </Box>
        </div>
    );
}

export default SignupPage;