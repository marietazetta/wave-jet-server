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
      minlength: [3, '3 characters minimum']
    },
    role: {
      type: String,
      default: "User"
    },
<<<<<<< HEAD

    // mobile: {
    //   type: Number,
    //   required: [true, 'Phone number is required'],
    // },

    // address: {
    //   type: String,
    //   required: [true, 'Enter a valid address'],
    // },



=======
>>>>>>> diego
  },
  {
    timestamps: true
  }
);

module.exports = model("User", userSchema);
