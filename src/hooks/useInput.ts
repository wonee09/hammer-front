import React, { useState } from "react";

export const useInput = (init: any) => {
  const [value, setValue] = useState(init);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      setValue((pre: any) => ({ ...pre, [name]: checked }));
    } else {
      setValue((pre: any) => ({ ...pre, [name]: value }));
    }
  };

  const onClearHandle = () => {
    setValue(init);
  };

  return [value, onChange, onClearHandle];
};
