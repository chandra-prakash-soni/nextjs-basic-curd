import connectDB from "@/config/database"
import Schema from "../../../ApiSchema/database";
import errorHandler from "@/utils/error";


export default async (req, res) => {

    if(req.method == "GET"){
        await connectDB();
        const records = await Schema.find({})
          res.status(200).json({
            success: false,
            message : "successfull !",
            records
          });
    }else{
       errorHandler(res,404,"error 404")
    }
    
  };