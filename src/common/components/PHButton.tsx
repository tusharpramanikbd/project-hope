import { Button, ButtonProps } from "@mui/material";

interface PHButtonProps extends ButtonProps {
  label: string | React.ReactNode;
}

const PHButton = ({ label, variant = "filled", ...rest }: PHButtonProps) => {
  return (
    <Button variant={variant} {...rest}>
      {label}
    </Button>
  );
};

export default PHButton;
