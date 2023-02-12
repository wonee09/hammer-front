import React, { useState } from "react";

export const useInput = (init: any) => {
  const [value, setValue] = useState(init);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((pre: any) => ({ ...pre, [name]: value }));
  };

  const onClearHandle = () => {
    setValue(init);
  };

  return [value, onChange, onClearHandle];
};
