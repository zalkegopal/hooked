import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other']
    },
    desc: {
        type: String,
    },
    verified: {
        type: Boolean,
        default: false
    },
    verificationTokenString: String,
    crushes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    receivedLikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    matches: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    profileImages: [{
        type: String
    }],
    turnOns: [{    // array of user own turn on things
        type: String
    }],
    lookingFor: [{    // array of things they are looking for
        type: String
    }]
});

const User = new mongoose.model("User", userSchema);

export default User;