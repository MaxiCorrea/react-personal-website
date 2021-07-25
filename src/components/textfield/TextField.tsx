import * as React from "react";
import { TextFieldStyled } from "./TextField.styles";
import { IconButton, InputAdornment } from "@material-ui/core";
import ClearIcon from "../../assets/svg/clear_icon.svg";

interface TextFieldProps {
  onClear: () => void;
  value?: unknown;
  disabled?: boolean;
  [x: string]: any;
}

export const TextField: React.FC<TextFieldProps> = (props) => {
  const { value, disabled, onClear, ...rest } = props;
  if (disabled === true) {
    return (
      <TextFieldStyled
        {...rest}
        value={value}
        disabled
        size="small"
        variant="outlined"
      />
    );
  }
  return (
    <TextFieldStyled
      {...rest}
      value={value}
      size="small"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              size="small"
              onClick={() => {
                onClear();
              }}
            >
              <img src={`${ClearIcon.toString()}`} alt={"Clear"} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
