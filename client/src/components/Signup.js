import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

const Signup = () => {

    const [user,setUser] = useState({
        name: "", email: "", password: "", cpassword: ""
    });

let name,value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, password, cpassword } = user;

       await fetch('/register')
    }


    return (
        <section className='Signup'>
            <div className="container mt-5">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className='form-title'>Sign-up</h2>
                        <form method="POST" className="register-form" id="register-form">



                            <div className="form-group">
                                <label htmlFor="name">
                                        <i class="zmdi zmdi-account"></i>
                                </label>
                                <input type="text" name="name" id="name" autocomplete="off"
                                value={user.name}
                                onChange={handleInputs}

                                   placeholder="Your Name"
                                />
                            </div>


                            <div className="form-group">
                                <label htmlFor="email">
                                        <i class="zmdi zmdi-email"></i>
                                </label>
                                <input type="email" name="email" id="email" autocomplete="off"
                                value={user.email}
                                onChange={handleInputs}

                                   placeholder="Your E-mail"
                                />
                            </div>



                            <div className="form-group">
                                <label htmlFor="password">
                                        <i class="zmdi zmdi-lock"></i>
                                </label>
                                <input type="password" name="password" id="password" autocomplete="off"
                                value={user.password}
                                onChange={handleInputs}

                                   placeholder="Your password"
                                />
                            </div>



                            <div className="form-group">
                                <label htmlFor="cpassword">
                                        <i class="zmdi zmdi-lock-outline"></i>
                                </label>
                                <input type="password" name="cpassword" id="cpassword" autocomplete="off"
                                value={user.cpassword}
                                onChange={handleInputs}

                                   placeholder="Confirm your password"
                                />
                                </div>

            

                                <div className="form-group form-button">
                                    <input type="submit" name="submit" id="submit" className="form-submit"
                                    value='register' onClick={PostData}
                                    />
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