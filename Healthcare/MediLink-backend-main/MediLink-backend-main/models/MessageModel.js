import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  sender: { type: String, required: true, enum: ["user", "doctor"] },
  read: { type: Boolean, default: false }
});

export default mongoose.model("message", messageSchema);
