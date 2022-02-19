import React, { useState, createContext } from "react";
import Login from "./login";
import User from "./user";

export const AppContext = createContext(null);

function ContextHook() {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}> {/* O 'value' recebe os valores a serem transmitidos pelo 'context' */}
      <Login /> <User />
    </AppContext.Provider>
  );
}

export default ContextHook;