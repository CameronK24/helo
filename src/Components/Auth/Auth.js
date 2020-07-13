import React, {Component} from 'react';
import logo from '../../logo/logo.png';

class Auth extends Component {
    render() {
        return (
            <div className='auth-screen'>
                <section className='auth-box'>
                    <img src={logo} alt='Helo Logo' />
                    <p>Helo</p>
                    <div className='user-login-info'>
                        <span>Username: <input/></span>
                        <span>Password: <input/></span>
                    </div>
                    <div className='login-register'>
                        <button>Login</button>
                        <button>Register</button>
                    </div>
                </section>
            </div>
        )
    }
}

export default Auth;