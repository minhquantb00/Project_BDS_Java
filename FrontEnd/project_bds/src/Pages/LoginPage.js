import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Style/LoginPage.css'
import { toast } from 'react-toastify';

function LoginPage() {

    const [requestUser, setRequestUser] = useState({
        username: '',
        password: ''
    })

    const handelLogin = () => {
        if (requestUser.username === null || requestUser.username === '') {
            toast.warning("Chưa nhập tên người dùng")
        } else if (requestUser.password === null || requestUser.password === '') {
            toast.warning("Chưa nhập mật khẩu")
        } else toast.success("Đăng nhập thành công")
    }

    return (
        <div className='login-page'>
            <Box className='login-box'
                component="form"
                noValidate
                autoComplete="off"
            >
                <h1>Bất động sản</h1>
                <h2>Đăng nhập</h2>
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
                <Link>Quên mật khẩu</Link>
                <Button variant='contained' className='login-btn' onClick={() => { handelLogin() }}>Đăng nhập</Button>
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
                    }}>Chưa có tài khoản?
                    <Link>Đăng ký tài khoản mới</Link>
                </div>
            </Box>
        </div>
    );
}

export default LoginPage;