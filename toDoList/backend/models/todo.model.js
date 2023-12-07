const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  checked: {
    type: Boolean,
    default: false
  }
 
});
module.exports = mongoose.model("Todo", todoSchema);
