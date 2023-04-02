import { useState } from "react";

export function useToggleValues(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleToggledValue = () => {
    setValue(!value);
  };
  return [value, handleToggledValue];
}
