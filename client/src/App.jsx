import React, { useState } from "react";
import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

function App() {
  const [imageData, setImageData] = useState("");
  const [error, setError] = useState(null);

  const handleImageRequest = async () => {
    try {
      const response = await fetch("/api/v1/jai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: "Your prompt here" }), // Replace 'Your prompt here' with the actual prompt value
      });

      if (!response.ok) {
        throw new Error("Image request failed");
      }

      const data = await response.json();
      setImageData(data.photo);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer
        handleImageRequest={handleImageRequest}
        imageData={imageData}
        error={error}
      />
    </main>
  );
}

export default App;
