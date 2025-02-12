import mongoose from "mongoose";
import { randomUUID } from "crypto";

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        default: randomUUID(),
    },
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
    upvotes: [String],
    downvotes: [String],
    saved: [String]
});

export default mongoose.model("User", userSchema);