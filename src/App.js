import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";

const USER_ID = "coolcool";

function App() {
  const [userId, setUserId] = useState(USER_ID);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home userId={USER_ID} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
