/* eslint-disable react/prop-types */
import  { useState } from "react";

const QuantityPicker = (props) => {
  const [value, setValue] = useState(props.min);
  const [disableDec, setDisableDec] = useState(true);
  const [disableInc, setDisableInc] = useState(false);

  const increment = () => {
    const newValue = value + 1;
    if (value < props.max) {
      setValue(newValue);
      setDisableDec(false);
    }
    if (value === props.max - 1) {
      setDisableInc(true);
    }
    if (value === props.min) {
      setDisableDec(false);
    }
  };

  const decrement = () => {
    const newValue = value - 1;
    if (value > props.min) {
      setValue(newValue);
      if (value === props.min + 1) {
        setDisableDec(true);
      }
    } else {
      setValue(props.min);
    }
    if (value === props.max) {
      setDisableInc(false);
    }
  };

  return (
    <span className="quantity-picker">
      <button
        className={`${
          disableDec ? "mod-disable " : ""
        }quantity-modifier modifier-left`}
        onClick={decrement}
      >
        &ndash;
      </button>
      <input
        className="quantity-display"
        type="text"
        value={value}
        readOnly
      />
      <button
        className={`${
          disableInc ? "mod-disable " : ""
        }quantity-modifier modifier-right`}
        onClick={increment}
      >
        &#xff0b;
      </button>
    </span>
  );
};

export default QuantityPicker;
