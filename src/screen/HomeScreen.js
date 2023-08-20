import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function HomeScreen() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  useEffect(() => {
    setActiveButton(1);
  }, []);

  return (
    <div className="App">
      <Link to="/SendMessage">
        <Button
          label="Send Message"
          isActive={activeButton === 1}
          onClick={() => handleButtonClick(1)}
        />
      </Link>
      <Link to="/ReceiveMessage">
        <Button
          label="Receive message"
          isActive={activeButton === 2}
          onClick={() => handleButtonClick(2)}
        />
      </Link>
    </div>
  );
}

export default HomeScreen;
