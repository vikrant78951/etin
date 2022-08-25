import React, { useState } from 'react'
import Login from './Login'
import Logout from './Logout'



const Auth = () => {


    const [auth, setAuth] = useState()
    const clientId = "421173557736-33lnq15lkplq291gvjhogma99h4ubb5d.apps.googleusercontent.com";
    const response = (res) => {
        setAuth(res)
    }

    return (
        <div className='auth'>
            {!auth ? <Login response={response} ci={clientId} /> : <Logout response={response} ci={clientId} user={auth} />}
        </div>
    )
}

export default Auth