const { Schema, model } = require("mongoose");


const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    username: {
      type: String,
      required: [true, 'User is required'],
      minlength: [3, '3 characters minimun']
    },

    role: {
      type: String,
      default: "User"
    },

    // address: {
    //   type: String,
    //   required: [true, 'Enter a valid address'],
    // },

    // phone: {
    //   type: Number,
    //   required: [true, 'Phone number is required'],
    // }, 



  },
  {

    timestamps: true
  }
);

const User = model("User", userSchema);


module.exports = User;
