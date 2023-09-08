// App.tsx
import React, { useState, useEffect } from "react";
// import "./App.css"; // Add Tailwind CSS classes to this file
import ImageSlider from "./ImageSlider";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900">
      <div className="w-full max-w-lg">
        <ImageSlider />
      </div>
    </div>
  );
}

export default App;
