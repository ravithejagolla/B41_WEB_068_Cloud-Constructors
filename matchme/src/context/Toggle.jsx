import React, { createContext, useState } from "react";

export const Togglecontext = createContext();

export const ToggleContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => setToggle((prev) => !prev);

  return (
    <Togglecontext.Provider value={{ toggle, handleToggle }}>
      {children}
    </Togglecontext.Provider>
  );
};
