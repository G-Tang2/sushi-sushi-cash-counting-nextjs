import { models, model } from "mongoose";
import { Schema } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists."],
    required: [true, "Email is required."],
  },
  username: {
    type: String,
    unique: [true, "Username already exists."],
    required: [true, "Username is required."],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
});

// hash password
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    throw error;
  }
});

UserSchema.methods.comparePassword = async function (password: string) {
  console.log(password, this.password);
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

const User = models.User || model("User", UserSchema);

export default User;
