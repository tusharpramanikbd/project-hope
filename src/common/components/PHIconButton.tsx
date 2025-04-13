import React from "react";
import { IconButton, IconButtonProps, useTheme } from "@mui/material";

interface PHIconButtonProps extends IconButtonProps {
  icon: React.ReactNode;
  variant?: "filled" | "ghost";
}

const PHIconButton = ({
  icon,
  variant = "ghost",
  ...rest
}: PHIconButtonProps) => {
  const { palette } = useTheme();
  return (
    <IconButton
      sx={{
        ...(variant === "filled" && {
          backgroundColor: palette.primary.main,
          color: palette.text.secondary,
          "&:hover": {
            backgroundColor: palette.primary.main,
            opacity: 0.7,
          },
        }),
      }}
      {...rest}
    >
      {icon}
    </IconButton>
  );
};
export default PHIconButton;
