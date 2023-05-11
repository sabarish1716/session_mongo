const mongoose = require("mongoose");
const { isEmail } = require("validator");

const subjectSchema = mongoose.Schema({
  name: {
    type: String,
    required:true
// require:true    // minLength: [5, "string should be atleast 5 char"],
  },
  std: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("subject", subjectSchema, "Subject");
