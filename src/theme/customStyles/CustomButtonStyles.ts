import { ButtonProps } from "@mui/material";
import { DefaultPaletteOptions } from "../colors";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    filled: true;
    outline: true;
    ghost: true;
  }
}

export const getFilledButtonStyle = (palette: DefaultPaletteOptions) => [
  {
    props: (props: ButtonProps) => props.variant === "filled",
    style: {
      backgroundColor: palette.primary?.main,
      color: palette.text?.secondary,
      borderRadius: "10px",
    },
  },
  {
    props: (props: ButtonProps) => props.variant === "outline",
    style: {
      backgroundColor: palette.background?.default,
      color: palette.text?.primary,
      borderRadius: "10px",
      border: `1px solid ${palette.primary?.main}`,
    },
  },
  {
    props: (props: ButtonProps) => props.variant === "ghost",
    style: {
      backgroundColor: "transparent",
      color: palette.text?.primary,
    },
  },
];
