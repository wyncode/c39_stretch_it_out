const mongoose = require('mongoose'),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken'),
  

const userSchema = new mongoose.Schema({
    name: [
        {
            firstName: {
                type: String,
                required: true,
                trim: true
            },
            lastName:{
                type: String,
                required: true,
                trim: true
            }
        }
    ],
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
        
    },

    quizAnswers: [
        {
            personType: {
            type: String,
            required: true,
        },
            stretchingLevel:{
                type: String,
                required: true
            },
            timeDedicated:{
                type: String,
                required: true
            }
    },

    ],
    
//ANCHOR store and get from localstorage, so no tokens for now
    avatar:{
        type: String,
    },
    stretches: {}
},
{
    timestamps: true
}
);
const User = mongoose.model("User", userSchema);
module.exports=User;