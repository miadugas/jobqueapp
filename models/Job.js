import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide a company name"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide the position"],
      maxlength: 100,
    },
    url: {
      type: String,
      required: [false, "Please provide a Post URL"],
      maxlength: 100,
    },
    salary: {
      type: String,
      required: [false, "Please provide a Salary range"],
      maxlength: 10,
    },
    status: {
      type: String,
      enum: [
        "Pre-Interview",
        "1st Interview",
        "2nd Interview",
        "3rd Interview",
        "4th Interview",
        "Other",
        "Declined",
        "Pending",
      ],
      default: "Pending",
    },

    jobType: {
      type: String,
      enum: [
        "Full-Time",
        "Part-Time",
        "Remote",
        "Contract",
        "Internship",
      ],
      default: "Full-Time",
    },
    jobLocation: {
      type: String,
      default: "the city",
      required: true,
    },
    contact: {
      type: String,
      required: false,
      maxlength: 50,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
