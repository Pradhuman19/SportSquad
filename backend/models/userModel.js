import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    joinedEvents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
    }],
    createdEvents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
    }],

},{timestamps: true});

export const User = mongoose.model("User", userSchema);