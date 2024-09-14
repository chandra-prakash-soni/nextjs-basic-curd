"use client"
import connectDB from '@/config/database';
import Schema from '../../../ApiSchema/database';
import errorHandler from '@/utils/error';

export default async (req, res) => {
  if (req.method === 'DELETE') {
    const { _id} = req.query;

    if (!_id ) {
      return errorHandler(res, 400, 'Please provide _id and newData.');
    }

    try {
      await connectDB();
      
      const deletedRecord = await Schema.findOneAndDelete({ _id }); 
      if (!deletedRecord) {
        return errorHandler(res, 404, 'Record not found.');
      }

      res.status(200).json({
        success: true,
        message: 'Record Deleted successfully!',
        deletedRecord
      });
    } catch (error) {
      errorHandler(res, 500, 'Internal server error.');
    }
  } else {
    errorHandler(res, 405, 'Method not allowed.');
  }
};