import React from "react";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

type PropsType = {
  children: any;
  placeholder: string;
  type: string;
  name: string;
  value: string;
  onChange: () => void;
};

const InputWithIcon = ({
  children,
  placeholder,
  type,
  name,
  value,
  onChange,
}: PropsType) => {
  return (
    <Input
      id="input-with-icon-adornment"
      startAdornment={
        <InputAdornment position="start">{children}</InputAdornment>
      }
      fullWidth
      placeholder={placeholder}
      style={{
        height: "55px",
        fontSize: "16px",
        paddingLeft: "15px",
      }}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputWithIcon;
