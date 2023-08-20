import React, { useEffect, useState } from "react";
import "./Index.css";
import handleSubmit from "../firebase_setUp/handlesubmit";

const SendMessage = () => {
  const [key, setKey] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 5000); // 5000 milliseconds = 5 seconds

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleSend = () => {
    if (key === "") {
      setSuccessMessage("Please Enter the key!!");
    } else if (message === "") {
      setSuccessMessage("Please Enter a Message!!");
    } else {
      const response = handleSubmit(key.trim(), message.trim());
      if (response) {
        setSuccessMessage("Entry successful!!");
      } else {
        setSuccessMessage("Entry failed!!");
      }
      setKey("");
      setMessage("");
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter Key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default SendMessage;
