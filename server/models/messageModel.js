import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  //createdAt, updatedAt -> props used for cases like -> member since <createdAt>
  { timestamps: true } //used for time display
);

const Message = new mongoose.model("Message", messageSchema);

export default Message;
