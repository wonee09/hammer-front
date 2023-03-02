import React from "react";
import { Box, Checkbox, FormControlLabel } from "@mui/material";

type PropsType = {
  children: string;
  setTrueToAll: any;
  setFalseToAll: any;
  isChecked: boolean;
  setIsCheckedAll: any;
};

const AllCheckBox = ({
  children,
  setTrueToAll,
  setFalseToAll,
  isChecked,
  setIsCheckedAll,
}: PropsType) => {
  // console.log("v", isChecked);
  return (
    <FormControlLabel
      control={
        <Checkbox
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 25, // checkbox size
              color: "#767676", //custom color
            },
          }}
          onChange={(e) => {
            setIsCheckedAll((prev: any) => !prev);

            const target = e.target as HTMLInputElement;
            // console.log(target.checked);

            if (target.checked) {
              setTrueToAll();
            } else {
              setFalseToAll();
            }
          }}
          checked={isChecked}
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

export default AllCheckBox;
