import React from "react";
import { Anchor, Image } from "./style";

const DEFAULT_IMAGE =
  "https://lasillarotarm.blob.core.windows.net.optimalcdn.com/images/2019/10/12/gokumuertedragonball.1-focus-0-0-983-557.jpg";

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
);
