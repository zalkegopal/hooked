import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: String,
      require: true,
    },
    receiverId: { type: String, require: true },
    message: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Message = new mongoose.model('Message', messageSchema);

export default Message;
