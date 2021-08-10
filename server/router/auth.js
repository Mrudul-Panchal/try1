const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');

require('../db/conn');
const User = require("../model/userSchema");
const bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
    res.send('Hello world from server router');
});

router.post('/register',

    (req, res) => {

        let { name, email, password, cpassword, role } = req.body;

        if (!name || !email || !password || !cpassword || !role) {
            return res.status(422).json({ error: "Fill em all properly" });
        }


        User.findOne({ email: email })
            .then(async (userExist) => {
                if (userExist) {
                    return res.status(422).json({ error: "Email Exist" });
                }
                else if (password != cpassword) {
                    return res.status(422).json({ error: "Password does not match" });
                }

                password = await bcrypt.hash(password, 12);
                cpassword = await bcrypt.hash(cpassword, 12);
                const user = new User({ name, email, password, cpassword, role });



                user.save().then(() => {
                    res.status(201).json({ error: "Success registered" });
                }).catch((err) => {
                    console.log('err', err)
                    res.status(500).json({ error: "failed to register" })
                });

            }).catch(err => { console.log(err); });

    });

module.exports = router;

/* router.post('/register', async (req, res) => {
    const { name, email, password, cpassword, role} = req.body;

    if (!name || !email || !password || !cpassword || !role){
        return res.status(422).json({ error: "Fill em all properly" });
    }

    try{
        const userExist = await User.findOne({ email:email });

        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });
        }

        const user = new User({ name, email, password, cpassword, role});

        await user.save();
        
        res.status(201).json({ message: "user registered successfully" });
    } catch (err) {
        console.log(err);
    }
});  

module.exports = router;  */


// login route

router.post('/signin', async (req, res) => {
    // console.log(req.body);
    // res.json({ message: "success" });
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Invalid data" })
        }
        const userLogin = await User.findOne({ email: email });

        // console.log(userLogin);

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 86400),
                httpOnly: true
            });


            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credentials" });
            }
            else {
                res.json({ message: "login success" });
            }
        }
        else {
            res.status(400).json({ error: "Invalid Credentials" });
        }

    } catch (err) {
        console.log(err);
    }
});

router.get('/about', authenticate, (req, res) => {
    console.log('About Page');
    res.send(req.rootUser);
});

router.get('/contact', authenticate, (req, res) => {
    console.log('Contact Page');
    res.send(req.rootUser);
});

router.get('/logout', (req, res) => {
    console.log('Logout Page');
    res.clearCookie('jwtoken', { path:'/' });
    res.status(200).send('User Logout');
});


module.exports = router;