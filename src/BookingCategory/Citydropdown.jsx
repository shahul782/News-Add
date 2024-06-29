import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

export default function Citydropdown() {
  const [category, setCategory] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleProceed = () => {
    const categoryToPath = {
      chennai: "/chennai",
      hyderabadcity: "/hyderabad",
      karnataka: "/karnataka",
      vizag: "/vizag",
      manglore: "/manglore",
      nasapondy: "/nasapondy",
      madurai: "/madurai",
      thrichy: "/thrichy",
      newdelhi: "/newdelhi"
    };

    const path = categoryToPath[category.toLowerCase()];
    if (path) {
      navigate(path);
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <Select
          value={category}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">Select Category</MenuItem>
          <MenuItem value="chennai">Chennai</MenuItem>
          <MenuItem value="hyderabadcity">Hyderabad City</MenuItem>
          <MenuItem value="karnataka">Karnataka</MenuItem>
          <MenuItem value="vizag">Vizag</MenuItem>
          <MenuItem value="manglore">Mangalore</MenuItem>
          <MenuItem value="nasapondy">Nasa Pondy</MenuItem>
          <MenuItem value="madurai">Madurai</MenuItem>
          <MenuItem value="thrichy">Thrichy</MenuItem>
          <MenuItem value="newdelhi">New Delhi</MenuItem>
        </Select>
      </FormControl>
      <button
        className="p-3 bg-blue-700 ml-24 text-white font-bold mt-5 rounded-xl"
        onClick={handleProceed}
      >
        Book Add by City
      </button>
    </div>
  );
}
