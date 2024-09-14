import { mongoose } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);
let userdata = null;

if (mongoose.models.user) {
  // If the model already exists, use it
  userdata = mongoose.models.user;
} else {
  // Otherwise, create the model
  userdata = mongoose.model("user", userSchema);
}
export default userdata;
