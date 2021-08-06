const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'basic',
        enum: ["basic", "admin"],
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true                       
            }
        }
    ]
})

//   userSchema.pre('save', async function (next) {
//     if (this.isModified('password')) {
//         console.log('password', this.password)
//         this.password = bcrypt.hash(this.password, 12);
//         this.cpassword = bcrypt.hash(this.cpassword, 12);
//     } 
//     next();
// }) 

// GenerateTokens
userSchema.methods.generateAuthToken = async function () {
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token : token });
        await this.save();
        return token;
        // console.log(token)
    } catch(err) {
        console.log(err);
    }
}

// collection create

const User = mongoose.model('USER', userSchema);

module.exports = User;

