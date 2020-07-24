import React, { useState } from "react";

export const useSessionStorage = (key, initialValue) => {
  const [object, setObject] = useState(() => {
    try {
      const objectString = window.sessionStorage.getItem(key);
      const objectParse = objectString ? JSON.parse(objectString) : initialValue;
      return objectParse;
    } catch (err) {
      console.log("Error custom hook", err);
      return initialValue;
    }
  });

  const setStorage = (value) => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
      setObject(value);
    } catch (err) {
      console.log("Error custom hook set: ", err);
    }
  };

  return [object, setStorage];
};
