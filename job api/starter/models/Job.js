const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
    {
        company: {
            type: String,
            required: [true, "please provide a company name"],
            maxlength: 50,
        },
        position: {
            type: String,
            required: [true, "please provide the position name"],
            maxlength: 100,
        },
        status: {
            type: String,

            enum: ["pending", "interview", "declined"],
            default: "pending",
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: "user",
            required: [true, "please provide createdBy"],
        },
    },
    { timestamps: true }
);

mongoose.model("job", jobSchema);
