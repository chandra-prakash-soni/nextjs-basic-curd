import React from 'react'

const errorHandler = (res,statuscode,message,data) => {
    res.status(statuscode).json({
        success: false,
         message,
    })
}

// const getToken = (token)=>{
// const tkn = token;
// return tkn;
// }

export default errorHandler
