/**
 * @module User
 */

import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

/**
 * User Schema
 * @typedef {Object} UserSchema
 * @property {string} name - The name of the user
 * @property {string} email - The email address of the user (unique)
 * @property {string} password - The hashed password of the user
 * @property {('Admin'|'Teacher'|'Student'|'Parent')} [role='Student'] - The role of the user
 */

/**
 * Mongoose schema for the User model
 * @type {mongoose.Schema<UserSchema>}
 */

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["student", "teacher", "admin", "parent"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      default: null,
    },
    resetToken: {
      type: String,
      default: null,
    },
    resetTokenExpiration: {
      type: Date,
      default: null,
  }
  },
  {
    timestamps: true,
  }
);

/**
 * Middleware function to hash the user's password before saving to the database.
 * This function is registered as a pre-save hook for the UserSchema.
 * @async
 * @function
 * @param {function} next - The next middleware function in the stack
 * @returns {Promise<void>}
 */

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

/**
 * User model
 * @type {mongoose.Model<UserSchema>}
 */
const User = model("User", UserSchema);

export default User;

