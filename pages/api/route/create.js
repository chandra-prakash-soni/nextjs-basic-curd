import connectDB from "@/config/database"
import Schema from "../../../ApiSchema/database";
import errorHandler from "@/utils/error";


export default async (req, res) => {

    if (req.method == "POST") {
        const { title, description,imgurl,blogtype } = req.body;
        if (!title || !description || !imgurl || !blogtype)
        return errorHandler(res, 400, "Please Enter title and description.");

        await connectDB();
        const JsonData = Schema.create({
            title,
            description,
            imgurl,
            type: blogtype
        })
        return res.status(200).json({
            success: true,
            message: 'Successfull Created!',
            rescord: {
                title: title,
                description: description,
                imgurl : imgurl,
                type: blogtype
            }
        })
    } else {
        return errorHandler(res, 404, "only POST api Method is allowed")

    }

}