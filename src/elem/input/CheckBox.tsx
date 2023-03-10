import React from "react";
import { Box, Checkbox, FormControlLabel } from "@mui/material";

type PropsType = {
  children: string;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  value?: boolean;
};

const CheckBox = ({ children, onChange, value }: PropsType) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          // defaultChecked={false}
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 25, // checkbox size
              color: "#767676", //custom color
            },
          }}
          onClick={() => {
            onChange((prev) => !prev);
          }}
          checked={value}
        />
      }
      label={
        <Box component="span" fontSize={"14px"}>
          {children}
        </Box>
      }
      style={{
        margin: 0, // 컴포넌트 전체 단위의 스타일링 지정
      }}
    />
  );
};

export default CheckBox;
