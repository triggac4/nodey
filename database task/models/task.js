const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name value is required"],
    trim: true,
    maxLength: [20, "value must be less than 20 characters"],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("tasks", taskSchema);
