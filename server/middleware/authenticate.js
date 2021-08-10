const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authenticate = async (req, res, next) => {
    try{

const token = req.cookies.jwtoken;
const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token":token    });

if (!rootUser) { throw new Error('User not found')}

req.token = token;
req.rootUser = rootUser;
req.rootUser = rootUser._id;



    } catch (err) {
        res.status(401).send('Unauthorized No tokens');
        console.log(err);
    }

}

module.exports = Authenticate;