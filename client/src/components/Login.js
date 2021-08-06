import React from 'react';
import { NavLink } from 'react-router-dom'


const Login = () => {
    return (
        <section className='Signup'>
            <div className="container mt-5">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className='form-title'>Sign-up</h2>
                        <form className="register-form" id="register-form">



                            <div className="form-group">
                                <label htmlFor="email">
                                        <i class="zmdi zmdi-email"></i>
                                </label>
                                <input type="email" email="" id="email" autocomplete="off" 
                                   placeholder="Your E-mail"
                                />
                            </div>



                            <div className="form-group">
                                <label htmlFor="password">
                                        <i class="zmdi zmdi-lock"></i>
                                </label>
                                <input type="password" name="password" id="password" autocomplete="off" 
                                   placeholder="Your password"
                                />
                            </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="submit" id="submit" className="form-submit"
                                    value='register' />
                            </div>

                            <div className="Login-image">
                            <figure>
                                   
                                    <NavLink to="/Signup" className="Login-image-link"> 
                                    <img src="./images/index.jpeg" alt="registeration pic" />
                                    </NavLink>
                                    </figure>
                               
                            </div>

                        </form>
                    </div>
              
                </div>
            </div>
        </section>
        )
}

export default Login
