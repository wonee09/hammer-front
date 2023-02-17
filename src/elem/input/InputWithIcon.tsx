import React from "react";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";

const InputWithIcon = ({ children, placeholder, type }: any) => {
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
      type={type}
    />
  );
};

export default InputWithIcon;
