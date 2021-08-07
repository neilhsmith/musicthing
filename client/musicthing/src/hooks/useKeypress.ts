import { useEffect, useState } from "react";

export default function (targetKey: string) {
  const [keyPressed, setKeyPressed] = useState<boolean>(false);

  function keyDown({ key }: KeyboardEvent) {
    if (key === targetKey) setKeyPressed(true);
  }

  function keyUp({ key }: KeyboardEvent) {
    if (key === targetKey) setKeyPressed(false);
  }

  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);

    return () => {
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
    };
  });

  return keyPressed;
}
