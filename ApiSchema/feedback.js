import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

let Feedback = null;
if (mongoose.models.Feedback) {
  Feedback = mongoose.models.Feedback;
} else {
  Feedback = mongoose.model("Feedback", feedbackSchema);
}
export default Feedback;
