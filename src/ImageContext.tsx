import React, { createContext, useState } from "react";

// Create a context
export const ImageContext = createContext();

// Create a provider component
export const ImageProvider = ({ children }) => {
  const [base64Image, setBase64Image] = useState("");

  return (
    <ImageContext.Provider value={{ base64Image, setBase64Image }}>
      {children}
    </ImageContext.Provider>
  );
};