import "./App.css";
import React from "react";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Navbar from "./Navbar"
import Physics from "./pages/Physics";
import Pques from "./pages/Pques";
function App() {
  const [questions, setQuestions] = React.useState(Pques)
  return (
    <Router>
      <Navbar />
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Physics" element={<Physics questions={questions}/>} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
