import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../stores";

const ColorPicker = () => {
  const snap = useSnapshot(state);
  console.log("Selected Color:", snap.color);

  return (
    <div className="color-picker">
      <SketchPicker
        color={snap.color}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
