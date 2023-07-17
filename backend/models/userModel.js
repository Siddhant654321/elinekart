import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "email-validator"; // Import the email-validator package

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: [3, 'Name must be at least 3 characters long'] // Validate minimum length
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (email) => validator.validate(email), // Use email-validator for email format checking
        message: 'Please provide a valid email'
      }
    },
    password: {
      type: String,
      required: true,
      minlength: [6, 'Password must be at least 6 characters long'] // Validate minimum length
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
