import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    role: {
      type: String,
      required: true,
      enum: ['Student', 'Teacher', 'Admin', 'Parent'],
      default: 'Student',
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },

    verificationToken: { type: String, default: null },
    verificationTokenExpiresAt: { type: Date, default: null },
    resetPasswordToken: { type: String, default: null },
    resetPasswordExpiresAt: { type: Date, default: null },

    // borrowingHistory: [
    //   {
    //     bookId: { type: Schema.Types.ObjectId, ref: 'Book' },
    //     borrowedDate: { type: Date },
    //     returnedDate: { type: Date },
    //   },
    // ],
    // bio: { type: String, default: '' },
    // profilePic: { type: String, default: '' }, // Base64 or URL
  },
  { timestamps: true },
);

// UserSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// UserSchema.methods.comparePassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };

const User = mongoose.models.User || model('User', UserSchema);

export default User;

















// import mongoose, { Schema, model } from "mongoose";
// import bcrypt from "bcryptjs";

// const UserSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     role: {
//       type: String,
//       required: true,
//       enum: ["student", "teacher", "admin", "parent"],
//     },
//     isVerified: {
//       type: Boolean,
//       default: false,
//     },
//     verificationToken: {
//       type: String,
//       default: null,
//     },
//     resetToken: {
//       type: String,
//       default: null,
//     },

//     fullName: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     phone: { type: String },
//     role: { type: String, enum: ["Student", "Teacher", "Admin"], default: "Student" },
//     bio: { type: String, default: "" },
//     profilePic: { type: String, default: "" }, // Base64 or URL
//     password: { type: String, required: true },

//     //Enhance the user schema to track borrowing history
//     name: String,
//     email: String,
//     password: String,
//     borrowingHistory: [
//       {
//         book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
//         borrowedAt: Date,
//         returnedAt: Date,
//         penalty: Number,
//       },
//     ],

//     resetTokenExpiration: {
//       type: Date,
//       default: null,
//   }
//   },
//   {
//     timestamps: true,
//   }
// );

// // const mongoose = require("mongoose");

// UserSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();

//   const salt = await bcrypt.genSalt(10);
//   this.password = bcrypt.hash(this.password, salt);
//   next();
// });

// const User = model("User", UserSchema);

// export default UserSchema;
