import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
const RedirectRoute = () => {
    return (
        <div className='redirect-route-container'>
            <div className="alert-container">
                <p className='alert-redirect'>Bạn cần đăng nhập để sử dụng chức năng này</p>
                <Link to='/sign-in' className='redirect-link'>Đăng nhập</Link>
            </div>
        </div>
    )
}

export default RedirectRoute
