import FeedbackSchema from "@/ApiSchema/feedback";
import connectDB from "@/config/database"
import errorHandler from "@/utils/error"



export default async (req, res) => {
    if (req.method == "GET") {
        await connectDB();

        const records = await FeedbackSchema.find({})
        return res.status(200).json({
            success: true,
            message: "Get FeedBack Successfully.",
            records
        })

    } else {
        errorHandler(res, 404, "Only get api allow.")
    }
}