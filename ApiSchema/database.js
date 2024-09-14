import { mongoose } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Make the 'title' field required
    },
    description: {
      type: String,
      required: true, // Make the 'description' field required
    },
    imgurl: {
      type: String,
      required: true, // Make the 'description' field required
    },
    type: {
      type: String,
      required: true, // Make the 'description' field required
    },
  },
  {
    timestamps: true,
  }
);

let Todo = null;
if (mongoose.models.Todo) {
  // If the model already exists, use it
  Todo = mongoose.models.Todo;
} else {
  // Otherwise, create the model
  Todo = mongoose.model("Todo", userSchema);
}
// const Todo = mongoose && mongoose.model('todo', userSchema);
export default Todo;
