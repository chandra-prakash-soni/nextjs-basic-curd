import React from 'react'
import userSchema from "../../../ApiSchema/user";
import errorHandler from '@/utils/error';
import { cookieSetter, getToken } from '@/utils';
import connectDB from '@/config/database';
import bcrypt from 'bcrypt';

const handle = async (req, res) => {
    if (req.method !== "POST") return errorHandler(res, 404, "only POST api Method is allowed");

    const { name, email, password } = req?.body;
    // Please Enter title and description.
    if (!name || !email || !password)
        return errorHandler(res, 400, "Please Entername, email and password.");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return errorHandler(res, 400, 'Invalid email address syntax.');
    }

    await connectDB();
    let user = await userSchema.findOne({ email })
    // user Already exist.
    if (user) {
        return errorHandler(res, 400, "user Already exist.");
    } else {
        // registerd successfull. 
        const encryptedPassword = await bcrypt.hash(password, 10);

        user = await userSchema.create({
            name,
            email,
            password: encryptedPassword
        })
        const token = getToken(user._id)
        cookieSetter(res, token, true)

        res.status(201).json({ success: true, message: "registerd successfully !", token });
    }

}

export default handle
