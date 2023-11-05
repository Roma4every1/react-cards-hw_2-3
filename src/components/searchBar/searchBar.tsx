import React, { useRef, useState } from "react";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
type SearchBarProps = {
  onChange: (value: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };
  const inputRef = useRef<HTMLInputElement>(null);

  const [showClearIcon, setShowClearIcon] = useState("none");
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      setShowClearIcon("none");
      onChange("");
    }
  };

  return (
    <TextField
      size="small"
      variant="outlined"
      onChange={handleChange}
      placeholder="Search..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment
            position="end"
            style={{ display: showClearIcon, cursor: "pointer" }}
            onClick={handleClick}
          >
            <ClearIcon />
          </InputAdornment>
        ),
      }}
      inputRef={inputRef}
    />
  );
};

export default SearchBar;
