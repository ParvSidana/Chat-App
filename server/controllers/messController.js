import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

const messageSent = async (req, res) => {
  // console.log("message sent", req.params.id);
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;

    // REQ.USER IS THE USER WE ADDED IN OUR PROTECTROUTE MIDDLEWARE
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });

    // IF NO CONVERSATION UPTIL NOW CREATE ONE
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],

        //MESSAGE IS ALREADY A DEFAULT ARRAY NO NEED TO INITIALISE
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) conversation.messages.push(newMessage._id);

    // THIS WILL TAKE MORE TIME AS IT GOES ONE BY ONE
    // await conversation.save();
    // await newMessage.save();

    // THIS WILL RUN IN PARALLEL
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error while sending message", error.message);
    res.status(500).json({ err: "Internal server Error" });
  }
};

const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); //POPULATE GETS US HOLD OF MESSAGES INSTEAD OF OTHER PROPS

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessage controller", error.message);
    res.status(500).json({ err: "Internal server Error" });
  }
};

export { messageSent, getMessage };
