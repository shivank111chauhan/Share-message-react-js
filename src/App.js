import "./App.css";
import HomeScreen from "./screen/HomeScreen";
import { Routes, Route, Navigate } from "react-router-dom";
import SendMessage from "./screen/SendMessage";
import ReceiveMessage from "./screen/ReceiveMessage";

function App() {
  return (
    <div className="App">
      <HomeScreen />
      <Routes>
        <Route path="/" element={<Navigate to="/SendMessage" />} />
        <Route path="/SendMessage" element={<SendMessage />} />
        <Route path="/ReceiveMessage" element={<ReceiveMessage />} />
      </Routes>
    </div>
  );
}

export default App;
