import React, { useState } from "react";
function ColorForm(props) {
  let [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addColor(input);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="colorpicker">Color Picker:</label>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="color"
            id="colorpicker"
          />
        </div>
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}

export default ColorForm;
