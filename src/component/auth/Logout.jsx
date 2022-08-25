import React from 'react'
import { GoogleLogout } from 'react-google-login';

const Logout = (props) => {

  const logout = () => {
    props.response();
    console.log('logout successful');
  }

  return (
    <div>
       <GoogleLogout
                clientId={props.ci}
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn btn_login">
                        <span><img src={props.user.profileObj.imageUrl } alt="" /></span>
                        <span>Logout</span>
                    </button>
                )}
                onLogoutSuccess={logout}
                isSignedIn={true}
                cookiePolicy={'single_host_origin'}
            />
    </div>
  )
}

export default Logout