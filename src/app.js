import React from "react";
import { ListOfCategory } from "./components/ListOfCategory";
import { GlobatStyle } from "./Globalstyles";
import { PothoCard } from "./components/PhotoCard";

export const App = () => {
  return (
    <>
      <GlobatStyle />
      <ListOfCategory path="https://antoniomasia.com/que-es-eslint-y-por-que-deberias-usarlo/" />
      <PothoCard />
    </>
  );
};
