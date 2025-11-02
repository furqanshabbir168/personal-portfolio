import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Loader from "./Components/Loader";

function App() {
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    // Run only once when app starts
    const timer = setTimeout(() => setLoading(false), 4000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; 
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
