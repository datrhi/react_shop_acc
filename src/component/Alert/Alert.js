import React from 'react'
import '../Authenticate/AuthForm.css'
const Alert = ({info}) => {
    return info === null ? null : (
        <div className={info.type === 'danger' ? 'alert-danger' : 'alert-success'}>
            <p className="alert-message">{info.message}</p>
        </div>
    )
}

export default Alert
