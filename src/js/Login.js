import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import {useStateValue} from './StateProvider'

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //signIn
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        }).catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://post-phinf.pstatic.net/MjAxOTExMDVfMjcw/MDAxNTcyOTQzNzM4Nzg5.VDaEc3y8UnokxIy6K-R2oxsIEGUG4eLhAPfHwU_i08Qg.mgvyrOtTNgQ9WuzCOfPSSOnUG6p1dDuZIwB4YjMv_rcg.PNG/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C.png?type=w1200" alt=""/>
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
