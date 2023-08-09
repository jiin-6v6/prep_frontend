import { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import MzListInfo from "./pages/MzListInfo";
import MzListAdd from "./pages/MzListAdd";
import MzListUpdate from "./pages/MzListUpdate";

const USER_ID = "coolcool";

export const AppContext = createContext();

function App() {
  const [userId, setUserId] = useState(USER_ID);

  useEffect(() => {
    setUserId(userId);
  }, [userId]);

  return (
    <AppContext.Provider value={USER_ID}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mzlist/:mzListName" element={<MzListInfo />} />
            <Route path="/mzlist/new" element={<MzListAdd />} />
            <Route path="/mzlist/:mzListName/edit" element={<MzListUpdate />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
