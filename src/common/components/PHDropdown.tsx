import {
  Autocomplete,
  FormControl,
  MenuItem,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";

interface PHDropdownProps {
  label: string;
  options: string[];
  placeholder: string;
  isAutocomplete?: boolean;
}

const PHDropdown = ({
  label,
  options,
  placeholder,
  isAutocomplete = false,
}: PHDropdownProps) => {
  const { palette } = useTheme();
  const [value, setValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  if (isAutocomplete) {
    return (
      <Autocomplete
        options={options}
        getOptionLabel={(option: string) => option}
        id="disable-close-on-select"
        disableCloseOnSelect
        blurOnSelect
        renderInput={(params) => (
          <>
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              {label}
            </Typography>
            <TextField
              {...params}
              variant="standard"
              placeholder={placeholder}
              sx={{
                m: 1,
                minWidth: 140,
                "& .MuiInput-input": {
                  fontSize: "14px",
                  textAlign: "center",
                  color: palette.text.secondary,
                },
              }}
            />
          </>
        )}
      />
    );
  }

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 140, gap: 1 }}>
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
