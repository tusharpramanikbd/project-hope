import { FormControl, MenuItem, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";

interface PHDropdownProps {
  label: string;
  options: string[];
  placeholder: string;
}

const PHDropdown = ({ label, options, placeholder }: PHDropdownProps) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Select
        labelId="select-standard-label"
        id="select-standard"
        value={value}
        onChange={handleChange}
        displayEmpty
        renderValue={(selected) => {
          if (!selected) return placeholder;
          return selected;
        }}
        sx={{
          "& .MuiInput-input": {
            fontSize: "14px",
            opacity: 0.5,
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PHDropdown;
