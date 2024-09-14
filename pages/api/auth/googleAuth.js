import connectDB from '@/config/database';
import errorHandler from '@/utils/error';
import userSchema from "@/ApiSchema/user";
import bcrypt from 'bcrypt';
import React from 'react'
import { getToken } from 'next-auth/jwt';
import { cookieSetter } from '@/utils';

const handle = async (req, res) => {

    if (req.method == "POST") {

        const { name, email } = req.body;
        if (!name && !email) return errorHandler(res, 400, "Failed Authication !");

        const ragexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!ragexEmail.test(email)) { return errorHandler(res, 400, "Enter valid Email address !"); }

        const encryptedPassword = await bcrypt.hash(email, 10);
        await connectDB();
        let user = await userSchema.findOne({ email })
        // return false
        let token = '';

        if (user) {

            token = getToken(user._id)

            cookieSetter(res, token, true);
            return res.status(200).json({
                success: true,
                message: "logged in successfully !",
                token
            })
        } else {
            await userSchema.create({
                name,
                email,
                password: encryptedPassword
            })
            token = getToken(user._id)
            cookieSetter(res, token, true)
            return res.status(200).json({
                success: true,
                message: "User created !",
                token
            })
        }


    }
}

export default handle
