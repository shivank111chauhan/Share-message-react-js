import React, { useEffect, useState } from "react";
import getDataFromFirestore from "../firebase_setUp/getDataFromFirestore";

const ReceiveMessage = () => {
  const [key, setKey] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 5000); // 5000 milliseconds = 5 seconds

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleSend = async () => {
    if (key === "") {
      setSuccessMessage("Please Enter the key!!");
    } else {
      let data = await getDataFromFirestore(key.trim());
      if (data === "error") {
        setSuccessMessage("Key Not found in database!!");
      } else {
        setDisplayText(data);
      }
    }
  };

  return (
    <div>
      <div className="container">
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Enter Key"
        />
        <input
          type="text"
          value={displayText}
          placeholder="Non editable message"
        />

        <button onClick={handleSend}>Receive</button>
        {successMessage && <p>{successMessage}</p>}
      </div>
    </div>
  );
};

export default ReceiveMessage;
