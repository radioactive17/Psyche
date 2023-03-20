import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import './Chat.css';

//  Import action
import { userMessage, sendMessage } from "../../actions/watson";

const Chat = ({ chat, userMessage, sendMessage }) => {
  // Handle Users Message
  const [message, setMessage] = useState("");
  const endOfMessages = useRef(null);

  const scrollToBottom = () => {
    endOfMessages.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [chat]);

  //  Function that handles user submission
  const handleClick = async (e) => {
    const code = e.keyCode || e.which;

    if (code === 13) {
      console.log(message);
      userMessage(message);
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="Watson_chat">
      <h3>Virtual Psychiatrist</h3>
      
      {/* Handle Messages */}
      <div className="Watson_historyContainer">
        {chat.length === 0
          ? ""
          : chat.map((msg) => <div className={"Watson_"+msg.type}>{msg.message}</div>)}
        <div ref={endOfMessages}></div>
      </div>

      {/* Input Box */}
      <input
        id="Watson_chatBox"
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleClick}
        value={message}
        placeholder="Type Here.."
      ></input>

    </div>
  );
};
const mapStateToProps = (state) => ({
  chat: state.watson.messages,
});

export default connect(mapStateToProps, { userMessage, sendMessage })(Chat);