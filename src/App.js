import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import MzListInfo from "./pages/MzListInfo";

const USER_ID = "coolcool";

function App() {
  const [userId, setUserId] = useState(USER_ID);

  useEffect(() => {
    setUserId(userId);
  }, [userId]);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home userId={USER_ID} />} />
          <Route
            path="/mzlist/:mzListName"
            element={<MzListInfo userId={USER_ID} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
