import React from 'react'
import './AuthForm.css'
export default function AuthForm() {
    return (
        <div className='auth-container'>
            <div className='login-container'>
                <form className='login-form' method="POST">
                    <h4 className='auth-title'>ĐĂNG NHẬP TÀI KHOẢN</h4>
                    <input name='username' className='login-input' placeholder='Tên đăng nhập' type='text' required/>
                    <input name='password' className='login-input' placeholder='Mật khẩu' type='password' required/>
                    <button className='auth-button' type='submit' >Đăng nhập</button>
                </form>
            </div>
            <div className='register-container'>
                <form className='register-form' method="POST">
                    <h4 className='auth-title'>ĐĂNG KÝ TÀI KHOẢN</h4>
                    <input name="username" className='register-input' placeholder='Tên đăng nhập' type='text' required/>
                    <input name='emaill' className='register-input' placeholder='Email' type='email' required />
                    <input name="password" className='register-input' placeholder='Mật khẩu' type='password' required/>
                    <input name='password' className='register-input' placeholder='Nhập lại mật khẩu' type='password' required/>
                    <button className='auth-button' type='submit'>Đăng ký</button>
                </form>
            </div>
        </div>
    )
}
