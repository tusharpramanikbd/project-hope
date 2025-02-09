import { ButtonProps } from "@mui/material";
import { DefaultPaletteOptions } from "../colors";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    filled: true;
    outline: true;
    ghost: true;
  }
}

export const GetFilledButtonStyle = (palette: DefaultPaletteOptions) => [
  {
    props: (props: ButtonProps) => props.variant === "filled",
    style: {
      backgroundColor: palette.primary?.main,
    },
  },
];
