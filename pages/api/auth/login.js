import React from 'react'
import userSchema from "../../../ApiSchema/user";
import errorHandler from '@/utils/error';
import { cookieSetter, getToken } from '@/utils';
import connectDB from '@/config/database';
import bcrypt from 'bcrypt';

const handle = async (req, res) => {
    if(req.method !== "POST") return  errorHandler(res, 404, "only POST api Method is allowed");
    const { email, password } = req?.body;
    // Please Enter title and description.
    if (!email || !password){
        return errorHandler(res, 400, "enter valid Email and Password.");}


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return errorHandler(res, 400, 'Invalid Email Address syntax.');
    }

    await connectDB();
    const user = await userSchema.findOne({ email })
    // user Already exist.
    if (!user) {
        return errorHandler(res, 400, "Enter valid Email and Password.");
    } else {
        // registerd successfull
        const match = await bcrypt.compare(password, user.password);
        if (!match) return errorHandler(res, 400, "Enter valid Email and Password.");
        const token = getToken(user._id)
        cookieSetter(res, token, true)

        res.status(200).json({ success: true, message: "Login successfully !", token });
    }

}

export default handle
