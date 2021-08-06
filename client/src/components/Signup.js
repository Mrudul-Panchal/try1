import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
    return (
        <section className='Signup'>
            <div className="container mt-5">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className='form-title'>Sign-up</h2>
                        <form className="register-form" id="register-form">



                            <div className="form-group">
                                <label htmlFor="name">
                                        <i class="zmdi zmdi-account"></i>
                                </label>
                                <input type="text" name="name" id="name" autocomplete="off" 
                                   placeholder="Your Name"
                                />
                            </div>


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



                            <div className="form-group">
                                <label htmlFor="cpassword">
                                        <i class="zmdi zmdi-lock-outline"></i>
                                </label>
                                <input type="password" cpassword="cpassword" id="cpassword" autocomplete="off" 
                                   placeholder="Confirm your password"
                                />
                                </div>

            

                                <div className="form-group form-button">
                                    <input type="submit" name="submit" id="submit" className="form-submit"
                                    value='register' />
                            </div>

                            <div className="signup-image">
                            <figure>
                                   
                                    <NavLink to="/login" className="signup-image-link"> 
                                    <img src="./images/index.jpeg" alt="Login pic" />
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

export default Signup 