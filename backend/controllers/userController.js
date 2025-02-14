import TryCatch from "../../utils/TryCatch.js";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
export const registerUser = TryCatch(async (req , res) =>{
    const { name, email, password } = req.body;
       let user = await User.findOne({ email });
       if(user) 
        return res.status(400).json({ msg: "The user already exists." });
       const hashPassword = await bcrypt.hash(password, 10); 
       user = await User.create({
        name,
        email,
        password: hashPassword, 
    });

    res.status(201).json({ user ,msg: "User created successfully" });
})

export const loginUser = TryCatch(async (req , res) =>{
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user) 
            return res.status(400).json({ msg: "The user does not exist." });
        
        const comparePassword = await bcrypt.compare(password, user.password);
        if(!comparePassword) 
            return res.status(400).json({ msg: "Invalid credentials." });

        res.status(200).json({ user ,msg: "Login successful" }); 
});
